import { useSelector } from "react-redux";

const TodoList = () => {
  const filteredToDo = useSelector((state) => {
    const todo = state.todo;
    const filter = state.filter;
    const searchTerm = state.searchTerm;

    return todo.filter((todo) => {
      const matchFilter =
        (filter === "COMPLETED" && todo.completed) ||
        (filter === "INCOMPLETE" && !todo.completed) ||
        filter === "ALL";

      const matchSearch = todo.text.toLowerCase().includes(searchTerm);

      return matchFilter && matchSearch;
    });
  });
  console.log('Filtered TodoList: ' , filteredToDo);
  return (
    <div>
      <h1>TODO LIST</h1>
    </div>
  );
};
export default TodoList;
