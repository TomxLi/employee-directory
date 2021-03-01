import React from "react";
import SearchBox from "../SearchBox";
import "./style.css";


function SearchArea({ handleSearchChange }) {
  return (
    <nav className="navbar navbar-expand navbar-light bg-light">
      <div className="navbar-collapse row" id="navbarNav">
        <SearchBox handleSearchChange={handleSearchChange} />
      </div>
    </nav>
  );
}
export default SearchArea;
