import { FaPlus } from "react-icons/fa6";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  addTodo,
  addTodoItem,
  deleteTodoItem,
  fetchTodos,
  updateTodoItem,
} from "../../redux/actions";

const InputField = () => {
  const dispatch = useDispatch();
  const [newTodoText, setNewTodoText] = useState("");
  const [newTodosText, setNewTodosText] = useState("");
  const [todoToUpdate, setTodoToUpdate] = useState(null);
  const [todoToDelete, setTodoToDelete] = useState(null);

  console.log(newTodoText);

  //handle addToDo
  const handleADDTodo = (text) => {
    dispatch(addTodo(text));
  };
  ///add todo Click list
  const handleADDTodoClick = () => {
    if (newTodoText.trim() !== "") {
      handleADDTodo(newTodoText.trim());
      setNewTodoText("");
    }
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
    </div>
  );
};
export default InputField;
