import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterTodo, markAllCompleted } from "../redux/action";

function FilterButton() {
  const dispatch = useDispatch();
  const currentFilter = useSelector((state) => state.filter);
  const handleFilter = (filter) => {
    dispatch(filterTodo(filter));
  };
  return (
    <div className="flex items-center space-x-4">
      <select
        value={currentFilter}
        onChange={(e) => handleFilter(e.target.value)}
        className="text-sm px-2 py-1 rounded border border-gray-300 focus:outline-none"
      >
        <option value="ALL">Default</option>
        <option value="COMPLETED">Completed</option>
        <option value="INCOMPLETE">In Complete</option>
      </select>
      <button
        onClick={() => dispatch(markAllCompleted())}
        className="text-sm px-2 py-1 bg-purple-500 text-white ml-2 rounded"
      >
        Mark all Completed
      </button>
    </div>
  );
}

export default FilterButton;
