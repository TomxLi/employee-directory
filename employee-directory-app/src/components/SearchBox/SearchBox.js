import React from "react";

function SearchBox({ handleSearchChange }) {
  return (
    <div className="searchbox">
      <form className="form-inline">
        <input
          className="form-control"
          type="search"
          placeholder="Search By Name"
          aria-label="Search"
          onChange={(e) => handleSearchChange(e)}
        />
      </form>
    </div>
  );
}
export default SearchBox;