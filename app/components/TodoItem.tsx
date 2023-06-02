"use client";
import { TodoProp } from "@/type";

function TodoItem({ id, title, completed, toggleCompleted }: TodoProp) {
  return (
    <>
      <div className="flex items-center my-2">
        <input
          id={id}
          type="checkbox"
          defaultChecked={completed}
          onChange={(e) => toggleCompleted(id, e.target.checked)}
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded peer"
        />
        <label
          htmlFor={id}
          className="ml-2 font-medium text-gray-900 dark:text-gray-300 peer-checked:line-through peer-checked:text-slate-500"
        >
          {title}
        </label>
      </div>
    </>
  );
}

export default TodoItem;
