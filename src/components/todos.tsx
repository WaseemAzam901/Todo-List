"use client"
import { useTodos } from '@/store/todos'


const Todos = () => {
    const {todos, toggleTodoAsCompleted} = useTodos();
    // console.log(todos);
    let filter = todos;
  return (
    <>
    <ul>
      {
        filter.map((todo)=> {
          return <li key={todo.id}>
            <input type="checkbox" id={`todo-${todo.id}`} checked={todo.completed} onChange={()=> toggleTodoAsCompleted(todo.id)}/>

            <label htmlFor={`todo-${todo.id}`}>{todo.task}</label>

            {
              todo.completed && (
                <button type="button">Delete</button>
              )
            }
          </li>
        })
      }
    </ul>
    </>
  )
}

export default Todos