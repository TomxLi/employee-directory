import React from "react";
import DataRow from "../DataRow";

function DataTable({ headings, users, handleSort }) {
  return (
    <div className="datatable mt-5">
      <table
        id="table"
        className="table table-striped table-hover table-condensed"
      >
        <thead>
          <tr>
            {headings.map(({ name, width }) => {
              if (name === "Name") {
                console.log(name);
                return (
                  <th
                    className="col"
                    key={name}
                    style={{ width }}
                    onClick={() => {
                      handleSort(name.toLowerCase());
                    }}
                  >
                    {name}
                    <span className="pointer" />
                    <b></b> <i class="fa fa-fw fa-sort"></i>
                    <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet"></link>
                  </th>
                );
              } else {
                return (
                  <th
                    className="col"
                    key={name}
                    style={{ width }}
                  >
                    {name}
                    <span className="pointer" />
                  </th>
                );
              }
            })}
          </tr>
        </thead>

        <DataRow users={users} />
      </table>
    </div>
  );
}

export default DataTable;
