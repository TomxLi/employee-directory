import React, { Component } from "react";
import DataTable from "../DataTable";
import SearchArea from "../SearchArea";
import API from "../../utils/API";

export default class DataArea extends Component {
  state = {
    users: [{}],
    order: "descend",
    filteredUsers: [{}],
  };

  headings = [
    { name: "Image", width: "10%" },
    { name: "Name", width: "10%" },
    { name: "Phone", width: "20%" },
    { name: "Email", width: "20%" },
    { name: "DOB", width: "10%" },
  ];

  handleSort = (heading) => {
    console.log(heading);
    if (this.state.order === "descend") {
      this.setState({
        order: "ascend",
      });
    } else {
      this.setState({
        order: "descend",
      });
    }

    const compareFnc = (a, b) => {
      if (this.state.order === "ascend") {
        // account for missing values
        if (a[heading] === undefined) {
          return 1;
        } else if (b[heading] === undefined) {
          return -1;
        }
        // numerically
        else if (heading === "name") {
          const aFirtName = a[heading].first.toLowerCase();
          const aLastName = a[heading].last.toLowerCase();
          const bFirstName = b[heading].first.toLowerCase();
          const bLastName = b[heading].last.toLowerCase();
          //break tie when first name is same
          if (aFirtName.localeCompare(bFirstName) === 0) {
            return aLastName.localeCompare(bLastName);
          }
          return aFirtName.localeCompare(bFirstName);
        } else {
          return a[heading] - b[heading];
        }
      } else {
        // account for missing values
        if (a[heading] === undefined) {
          return 1;
        } else if (b[heading] === undefined) {
          return -1;
        }
        // numerically
        else if (heading === "name") {
          const aFirstName = a[heading].first.toLowerCase();
          const aLastName = a[heading].last.toLowerCase();
          const bFirstName = b[heading].first.toLowerCase();
          const bLastName = b[heading].last.toLowerCase();
          //break tie when first name is same
          if (aFirstName.localeCompare(bFirstName) === 0) {
            return bLastName.localeCompare(aLastName);
          }
          return bFirstName.localeCompare(aFirstName);
        } else {
          return b[heading] - a[heading];
        }
      }
    };
    const sortedUsers = this.state.filteredUsers.sort(compareFnc);
    this.setState({ filteredUsers: sortedUsers });
  };

  handleSearchChange = (event) => {
    console.log(event.target.value);
    const filter = event.target.value;
    const filteredList = this.state.users.filter((item) => {
      // merge data together, then see if user input is anywhere inside
      let values = Object.values(item).join("").toLowerCase();
      return values.indexOf(filter.toLowerCase()) !== -1;
    });
    this.setState({ filteredUsers: filteredList });
  };

  componentDidMount() {
    API.getUsers().then((results) => {
      this.setState({
        users: results.data.results,
        filteredUsers: results.data.results,
      });
    });
  }

  render() {
    return (
      <>
        <SearchArea handleSearchChange={this.handleSearchChange} />
        <div className="data-area">
          <DataTable
            headings={this.headings}
            users={this.state.filteredUsers}
            handleSort={this.handleSort}
          />
        </div>
      </>
    );
  }
}
