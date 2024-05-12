import store from "../redux/store";
import "./App.css";
import {Provider} from 'react-redux';
import HeaderSection from "./components/header";
import InputField from "./components/inputField";
import FilterButton from "./components/filterButton";
import SearchButton from "./components/search";
import TodoList from "./components/todoList";


function App() {
  return (
    < Provider store={store}>
      
      <div className="max-w-4x1 sm:mt-6 mx-8 my-8 p-4 bg-gray-100 rounded">
        {/* Header section */}
        <HeaderSection></HeaderSection>
        
        {/* input field section */}
        <InputField></InputField>

        {/* filter and search */}
      <div className="flex justify-between  items-center">
          <FilterButton></FilterButton>
          <SearchButton></SearchButton>
      </div>
        
        {/* todoList */}
        <TodoList></TodoList>
      </div>



    </Provider>
  );
}

export default App;
