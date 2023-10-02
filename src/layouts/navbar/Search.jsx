import React, { useState } from "react";
import searchImage from "../../assets/search.svg";
import { useDispatch, useSelector } from "react-redux";
import { search } from "../../features/filter/filterSlice";

const Search = () => {
  const dispatch = useDispatch();
  const { searched } = useSelector((state) => state.filter);
  const [searchInput, setSearchInput] = useState(searched);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(search(searchInput));
  };
  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };
  return (
    <div className="flex items-center h-10 px-5 text-sm bg-white border rounded-lg border-slate-200 ring-emerald-200">
      <form onSubmit={handleSubmit}>
        <input
          className="mr-2 border-none outline-none"
          type="search"
          name="search"
          placeholder="Search"
          value={searchInput}
          onChange={handleInputChange}
        />
      </form>
      <img
        className="inline h-4 cursor-pointer"
        src={searchImage}
        alt="Search"
      />
    </div>
  );
};

export default Search;
