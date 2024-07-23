'use client'
import { useState } from 'react'
const AddTodo = () => {
  const [todo, setTodo] = useState("")
  return (
    <form action="">
      <input type="text" placeholder='Write your todo' value={todo} onChange={(event)=> setTodo(event.target.value)} className='border '/>
      <button type='submit'>ADD</button>
    </form>
  )
}

export default AddTodo