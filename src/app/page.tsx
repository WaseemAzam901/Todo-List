import Image from "next/image";
import AddTodo from '../components/AddTodo'
import Todos from "@/components/Todos";
import Navbar from "@/components/Navbar";
import { RiTodoLine } from "react-icons/ri";
export default function Home() {
  return (
    // <div className="flex justify-center items-center">
    <main className="flex flex-col items-center min-h-[100vh] mt-24">
      <h1 className="text-5xl font-bold mb-20 flex"><RiTodoLine className="text-[#68B984]"/> TODO NEXT + TYPESCRIPT <RiTodoLine className="text-[#68B984]"/></h1>
      <Navbar />
      <AddTodo />
      <Todos />
    </main>
    // </div>
  );
}
