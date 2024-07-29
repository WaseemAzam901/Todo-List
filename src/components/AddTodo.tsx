'use client'
import { useTodos } from '@/store/todos';
import { FormEvent, useState } from 'react'
const AddTodo = () => {
  const [todo, setTodo] = useState("");
  const {handleAddTodo} = useTodos();
  const handleFormSubmit = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleAddTodo(todo);
    setTodo("");
  }
  return (
    <form action="" onSubmit={handleFormSubmit}>
      <input type="text" placeholder='Write your todo' value={todo} onChange={(event)=> setTodo(event.target.value)} className='border'/>
      <button type='submit'>ADD</button>
    </form>
  )
}

export default AddTodo