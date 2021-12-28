import React from "react";
import "./search.css";

function Search(props) {
  return (

    <div className="search">
      <input
        type="search"
        placeholder="Search..."
        onChange={(e) => {
          props.setSearchinput(e.target.value);
        }}
      ></input>
    </div>
  );
}

export default Search;
