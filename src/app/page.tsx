import Image from "next/image";
import AddTodo from '../components/AddTodo'
import Todos from "@/components/Todos";
export default function Home() {
  return (
    <div className="flex justify-center items-center">
    <main className="">
      <h1 className="text-2xl">TODO NEXT + TYPESCRIPT</h1>
      <AddTodo />
      <Todos />
    </main>
    </div>
  );
}
