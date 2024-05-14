import React from "react";
import { FaCheck, FaTimes, FaToggleOff, FaToggleOn, FaTrash } from "react-icons/fa"
import { useDispatch } from "react-redux";
import { deleteTodoItem, markCompleted, markIncomplete, toggleTodo } from "../../redux/actions";


export const Item = ({ todo, index }) => {
    const dispatch = useDispatch();

  return (
    
      <li className="flex  border-b-2 justify-between py-2 ">
        <div className="flex item-center" >
          <span className="mr-4">{index + 1}</span>
          {/* adding condition css */}
          <span className={`mr-2 ${todo.completed? "line-through text-red-400": " "}`}>{todo.text}</span>
        </div>
        <div className="buttons">
            <button onClick={()=> dispatch(toggleTodo(index))} className="mr-2 text-sm bg-blue-600 p-2 rounded text-white">{todo.completed ? <FaToggleOff/>: <FaToggleOn/>}</button>
            {
                !todo.completed &&(
                    <button onClick={()=> dispatch(markCompleted(index))} className="mr-2 text-sm bg-blue-600 p-2 rounded text-white"><FaCheck/></button>
                )
            }
            {
                todo.completed &&(
                    <button onClick={()=> dispatch(markIncomplete(index))} className="mr-2 text-sm bg-yellow-600 p-2 rounded text-white"><FaTimes/></button>
                )
            }
           
           {/* working on it */}
            <button onClick={()=> dispatch(deleteTodoItem(index))} className="mr-2 text-sm bg-red-600 p-2 rounded text-white"><FaTrash/></button>
        </div>
      </li>

  );
};
