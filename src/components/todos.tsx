"use client"
import { useTodos } from '@/store/todos'


const Todos = () => {
    const {todos} = useTodos();
    // console.log(todos);
    let filter = todos;
  return (
    <>
    <ul>
      {
        filter.map((todo)=> {
          return <li key={todo.id}>{todo.task}</li>
        })
      }
    </ul>
    </>
  )
}

export default Todos