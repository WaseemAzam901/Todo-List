"use client";
import { useTodos } from "@/store/todos";
import { FormEvent, useState } from "react";
const AddTodo = () => {
  const [todo, setTodo] = useState("");
  const { handleAddTodo } = useTodos();
  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleAddTodo(todo);
    setTodo("");
  };
  return (
    <form action="" onSubmit={handleFormSubmit}>
      <input
        type="text"
        placeholder="Write your todo"
        value={todo}
        onChange={(event) => setTodo(event.target.value)}
        className="border-[0.1rem] border-solid border-[#ccc] w-[45rem] px-2 py-3 my-16 font-medium"
      />
      <button
        disabled={!todo}
        type="submit"
        className={`px-10 py-3 ml-3 font-bold rounded-md border ${
          todo
            ? "bg-[#68B984] text-white"
            : "bg-gray-400 text-gray-200 cursor-not-allowed"
        }`}
      >
        ADD 
      </button>
    </form>
  );
};

export default AddTodo;
