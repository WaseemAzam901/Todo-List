import { createContext, ReactNode, useState } from 'react'

// Creating Context
export const todosContext = createContext(null);

//Creating Provider Function
export const todosProvider =(children:{children:ReactNode}) => {

    const [todos, setTodos] = useState([])

    const handleAddTodo = (task:string) => {
    
        setTodos((prev)=> {
            const newTodos = [{
                id: Math.random.toString(),
                task,
                complete:false,
                createdAt: new Date();

            }]
            ...prev
        })
        return newTodos;
    }
}
