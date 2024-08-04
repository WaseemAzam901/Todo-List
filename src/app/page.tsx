import Image from "next/image";
import AddTodo from '../components/AddTodo'
import Todos from "@/components/Todos";
import Navbar from "@/components/Navbar";
export default function Home() {
  return (
    <div className="flex justify-center items-center">
    <main className="">
      <h1 className="text-2xl">TODO NEXT + TYPESCRIPT</h1>
      <Navbar />
      <AddTodo />
      <Todos />
    </main>
    </div>
  );
}
