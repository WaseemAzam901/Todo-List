"use client"
import { useTodos } from '@/store/todos'


const Todos = () => {
    const {todos, toggleTodoAsCompleted, handleTodoDelete} = useTodos();
    // console.log(todos);
    let filter = todos;
  return (
    <>
    <ul>
      {
        filter.map((todo)=> {
          return <li key={todo.id}>
            {/* dekho hum ny input feild ko id is liye di kyu k hum neechay label use kar rahay hain aur humain pata hai k label aur input feild ki id same hoti hai tabhi woh eik dusray k saath aatay hain */}
            {/* id main dekho todo same rahay gah aur todo.id ki madad say number aye gah means todo-0.98762 is tarhan */}
            {/* checked say hoga yeh k agar todo.completed ki value true hui toh input box per automatic tick laga huwa hoga aur agar false hui toh tick khatam ho jaye gah */}
            {/* toggleTodoAsCompleted function ka faida yeh hai k jesay hi koi feild per matlab kyu k yeh eik text feild ki jagah checkbox feild hai toh jesay hi koi is per click karay gah matlab checkbox ko checked unckeced karay gah toh yeh function call hoga*/}
            {/* acha start main todo.completed ki value false hai toh unchecked hoga aur jesay hi onchange hoga means box per click hoga toh woh is todo.completed ki value is li k liye true kar de gah jis say hoga yeh k delete button show ho jaye gah screen per */}
            {/* is function toggleTodoAsCompleted ki defination store/todos.tsx aur yahan yeh context api with usecontext hook ki madad say aaya hai*/}
            {/* aur agar hum checkbox per baar baar check karain gy yeni click toh todo.completed ki value true, false, true, false hoti rahay gi */}
            <input type="checkbox" id={`todo-${todo.id}`} checked={todo.completed} onChange={()=> toggleTodoAsCompleted(todo.id)}/>

            <label htmlFor={`todo-${todo.id}`}>{todo.task}</label>
            {/* agar todo.completed kissi input feild ka true huwa tabhi yeh delete ka button show hoga */}
            {
              todo.completed && (
                <button type="button" onClick={()=>handleTodoDelete(todo.id)}>Delete</button>
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