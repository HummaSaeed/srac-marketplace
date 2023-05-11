import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaSearch } from "react-icons/fa";
import * as types from "../../constants";

const Searchbar = () => {
  const dispatch = useDispatch();
  // const vehicle = useSelector((state) => state.api.data.data);
  const [searchQuery, setSearchQuery] = useState();

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
    dispatch({ type: types.UPDATE_SEARCH, payload: searchQuery });
  };
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div>
        <input
          className="searchbar"
          type="text"
          value={searchQuery}
          onChange={handleInputChange}
        />
        <button className="search_button">
          <FaSearch />
        </button>
      </div>
    </div>
  );
};

export default Searchbar;
