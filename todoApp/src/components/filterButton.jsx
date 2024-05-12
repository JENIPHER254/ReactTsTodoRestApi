import React from "react";
import { useDispatch , useSelector} from "react-redux";
import { filterTodo, markAllCompleted } from "../../redux/actions";

const FilterButton = () => {
    const dispatch = useDispatch();
    const currentFilter =  useSelector((state)=> state.filter);

    // handle filter event
    const handleFilter = (filter)=>{
        dispatch(filterTodo(filter))

    }

  return (
    <div className="flex items-center mb-4">
      <select
       value={currentFilter}
       onChange={(e)=>handleFilter(e.target.value)}
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
        onClick={()=> dispatch(markAllCompleted())}
        className="ml-2 p-2 text-sm bg-purple-400 rounded hover:bg-purple-600  text-white"
      >
        Mark all Completed
      </button>
    </div>
  );
};
export default FilterButton;
