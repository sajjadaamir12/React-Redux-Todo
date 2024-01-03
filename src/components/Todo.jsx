import React, { useState } from "react";
import { BsPlus, BsSearch } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { addTodo, updateSearchTeam } from "../redux/action";
import FilterButton from "./FilterButton";
import TodoList from "./TodoList";

function Todo() {
  const dispatch = useDispatch();

  const [newTodoText, setNewTodoText] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const handleAddTodo = (text) => {
    dispatch(addTodo(text));
  };
  const handleAddtoClick = () => {
    if (newTodoText.trim !== "") {
      handleAddTodo(newTodoText.trim());
      setNewTodoText("");
    }
  };
  const handleSearchChange = (value) => {
    setSearchTerm(value);
    dispatch(updateSearchTeam(value));
  };

  // console.log(newTodoText);
  return (
    <div className="max-w-4xl mx-auto sm:mt-8 p-4 bg-gray-100 rounded">
      <h2 className="mt-3 mb-6 text-2xl font-bold text-center uppercase">
        Personal Todo App
      </h2>
      <div className="flex items-center mb-4">
        <input
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
          type="text"
          name="addTodoInput"
          id="addTodoInput"
          placeholder="Add Todo"
          className="flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
        />
        <button
          onClick={handleAddtoClick}
          className="ml-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
        >
          <BsPlus />
        </button>
      </div>

      {/* filter and search */}
      <div className="flex items-center justify-between">
        <FilterButton />
        <div className="flex items-center mb-4">
          <input
            value={searchTerm}
            onChange={(e) => handleSearchChange(e.target.value)}
            type="text"
            name="searchTerm"
            id="searchTerm"
            placeholder="Search"
            className="flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
          />
          <button className="ml-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none">
            <BsSearch />
          </button>
        </div>
      </div>
      <TodoList />
    </div>
  );
}

export default Todo;
