import Image from "next/image";
import AddTodo from '../components/AddTodo'
import Todos from "@/components/todos";
export default function Home() {
  return (
    <main className="">
      <h1 className="text-2xl">TODO NEXT + TYPESCRIPT</h1>
      <AddTodo />
      <todos />
    </main>
  );
}
