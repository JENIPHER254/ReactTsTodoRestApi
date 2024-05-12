import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import {  updateSearchTerm } from "../../redux/actions";

const SearchButton = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // handle search
  const handleSearchChange = (value) => {
    searchTerm(value);
    dispatch(updateSearchTerm(value));
  };
  return (
    <div className="flex items-center mb-4">
      <input
        value={searchTerm}
        onChange={(e) => handleSearchChange(e.target.value)}
        type="text"
        id="addTodoInput"
        name="addTodoInput"
        placeholder="Add Todo Item ..."
        className="flex-grow p-3 text-sm border-gray-300 focus:outline-none focus:border-blue-500 border-b-2"
      />
      <button
      
        className="ml-2 p-3 text-sm bg-blue-400 rounded hover:bg-blue-600 font-bold text-white"
      >
        <FaSearch></FaSearch>
      </button>
    </div>
  );
};
export default SearchButton;
