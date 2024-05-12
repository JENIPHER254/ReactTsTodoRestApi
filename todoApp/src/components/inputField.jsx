import { FaPlus } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, updateSearchTerm } from "../../redux/actions";

const InputField = () => {
  const dispatch = useDispatch;
  const [newTodoText, setNewTodoText] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  console.log(newTodoText);

  //handle addToDo
  const handleADDTodo = (text) => {
    dispatch(addTodo(text));
  };
  ///add todo Click list
  const handleADDTodoClick = () => {
    if (newTodoText.trim() !== "") {
      handleADDTodo(newTodoText.trim());
      setNewTodoText = "";
    }
  };
  const handleSearchChange = (value) => {
    searchTerm(value);
    dispatch(updateSearchTerm(value));
  };
  return (
    <div>
      <div className="flex items-center mb-7">
        <input
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
          type="text"
          id="addTodoInput"
          name="addTodoInput"
          placeholder="Add Todo Item ..."
          className="flex-grow p-3 border-gray-300 focus:outline-none focus:border-blue-500 border-b-2"
        />
        <button
          onClick={handleADDTodoClick}
          className="ml-2 p-4 bg-blue-400 rounded hover:bg-blue-600 font-bold text-white"
        >
          <FaPlus></FaPlus>
        </button>
      </div>
      {/* filter and search */}
      <div className="flex justify-between  items-center">
        <div className="flex items-center mb-4">
          <select
            type="text"
            id="search"
            name="search"
            placeholder="search ..."
            className="flex-grow px-7 py-2 text-sm rounded border-gray-300 focus:outline-none focus:border-blue-500 border-b-2"
          >
            <option value="ALL">Default</option>
            <option value="COMPLETED">Completed</option>
            <option value="INCOMPLETE">Incomplete</option>
          </select>
          <button
            onClick={handleADDTodoClick}
            className="ml-2 p-2 text-sm bg-purple-400 rounded hover:bg-purple-600  text-white"
          >
           Mark all Completed
          </button>
        </div>
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
            onClick={handleADDTodoClick}
            className="ml-2 p-3 text-sm bg-blue-400 rounded hover:bg-blue-600 font-bold text-white"
          >
            <FaSearch></FaSearch>
          </button>
        </div>
      </div>
    </div>
  );
};
export default InputField;
