import React, { Component } from "react";


export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <h1>Employee Directory</h1>
        <p>
          Narrow your search result using search box or sort by Name
        </p>
      </div>
    );
  }
}
