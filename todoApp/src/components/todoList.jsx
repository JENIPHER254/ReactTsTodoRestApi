import { useSelector } from "react-redux";
import { Item } from "./todoIItem";

const TodoList = () => {
  const filteredTodo = useSelector((state) => {
    const todos=state.todos;
    const todo = state.todo;
    const filter = state.filter;
    const searchTerm = state.searchTerm;
  
    return todo.filter((todo) => {
      const matchFilter =
        (filter === "COMPLETED" && todo.completed) ||
        (filter === "INCOMPLETE" && !todo.completed) ||
       ( filter === "ALL");

      const matchSearch = todo.text.toLowerCase().includes(searchTerm);

      return matchFilter && matchSearch;
    });
  });
  
  console.log('Filtered TodoList: ' , filteredTodo);
  return (
    <div>
     
      <ul>
        <li className="text-sm pl-2 text-gray-400 font-bold mb-5">All Available Tasks here ...</li>
          {filteredTodo.map((todo, index)=>
           <Item key={index} todo={todo} index={index}></Item>
          )} 
      
      </ul>

    </div>
  );
};
export default TodoList;
