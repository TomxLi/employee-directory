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
                </th>
              );
            })}
          </tr>
        </thead>

        <DataRow users={users} />
      </table>
    </div>
  );
}

export default DataTable;
