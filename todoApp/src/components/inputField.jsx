import { FaPlus } from "react-icons/fa6";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodoAndItem } from "../../redux/actions";

const InputField = () => {
  const status = "completed";
  const dispatch = useDispatch();
  const [newTodoText, setNewTodoText] = useState("");

  // Handle addTodo
  const handleAddTodo = () => {
    if (newTodoText.trim() !== "") {
      // Dispatch addTodoAndItem action with the todo name and default status
      dispatch(addTodoAndItem(newTodoText.trim(),  status));
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
          onClick={handleAddTodo}
          className="ml-2 p-4 bg-blue-400 rounded hover:bg-blue-600 font-bold text-white"
        >
          <FaPlus></FaPlus>
        </button>
      </div>
    </div>
  );
};
export default InputField;
