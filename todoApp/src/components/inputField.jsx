const InputField = () => {
  return (
    <div className="flex items-center">
      <input
        type="text"
        name="text"
        id="addTodo"
        placeholder="Add Todo Item ..."
        className="flex-grow p-4 border-gray-300 focus:outline-none focus:border-blue-500 border-b-2"
      />
    </div>
  );
};
export default InputField;
