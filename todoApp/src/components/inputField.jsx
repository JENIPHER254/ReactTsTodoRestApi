import { FaPlus } from "react-icons/fa6";

const InputField = () => {
  return (
    <div className="flex items-center">
      <input
        type="text"
        name="text"
        id="addTodo"
        placeholder="Add Todo Item ..."
        className="flex-grow p-3 border-gray-300 focus:outline-none focus:border-blue-500 border-b-2"
      />
      <button className="ml-2 p-4 bg-blue-400 rounded hover:bg-blue-600 font-bold text-white"><FaPlus></FaPlus></button>
    </div>
  );
};
export default InputField;
