"use client"
import { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import { json } from 'stream/consumers';

export type Todo = {
    id:string;
    task:string;
    completed:boolean;
    createdAt: Date;
}

export type TodosContext = {
    todos: Todo[];
    handleAddTodo: (task: string) => void;
    toggleTodoAsCompleted : (id:string) => void;
    handleTodoDelete : (id:string) => void;
}

// Creating Context
export const todosContext = createContext<TodosContext | null>(null);

//Creating Provider Function
export const TodosProvider =({children}:{children:ReactNode}) => {

    // 1 ghanta 17 minute tak neechay wali line 30 to 34 ki jagah bus yeh line thi [todos, setTodos] = useState<Todo[]>([])
    // per ab kyu k hum local storage set kar rahay hain takay jab page refresh ho tab bhi data show ho toh is k liye hum ab usestate ko start main eik empty array say define karnay k bajaye eik function ki return value say define karain gy
    // wesay yeh local storage ka kaam samajnay k liye meray hisab say ab video 1 ghanta 17 minute say dekh lo warna main neechay thora bohot essay hi samjha deta hu
    // dekho hum ny use effect k under eik variable jissay hum ny bola k local storage main say eik key utha k lao jis ka naam hai todos aur agar na milay toh variable ko khali array say intialize karwa do || [] 
    // 
    const [todos, setTodos] = useState<Todo[]>([])
    useEffect(() => {
        const newTodos = localStorage.getItem("todos") || "[]";
        setTodos(JSON.parse(newTodos) as Todo[]);
    }, [])

    const handleAddTodo = (task:string) => {
    
        setTodos((prev)=> {
            const newTodos:Todo[] = [{
                id: Math.random().toString(),
                task,
                completed:false,
                createdAt: new Date()

            },
            ...prev]
            // bhae yeh jo neechay wali line hai yeh storage ka part hai aur jesay main ny upper likha jab node per kaam karain gy toh iski zarrorat nahi parhay gi issi liye issay samajna ho toh upper di hui video timeline say samajlena wesay main neechay thora bohot samjha deta hu
            // phelay jab hum refresh kartay thay toh jo bhi data store hota the todos state main woh gayb hojata tha toh is liye hum ny local storage main ussay ab safe kiya hai
            // dekho yeh local storage humain eik method provide karta hai setItem ka aur yeh setitem do parameter leta hai 
            // phelay parameter main ap key batatay ho means local storage main yeh data kissi key main hi safe karo gy na takay jab chahi ho toh hum us key ka naam likhain aur data nikal lein jesay k upper hum ny get method laga k bhi kiya hai toh yahan us key ko hum todos ka naam de rahay hain
            // dusray parameter main yeh sirg string accept karta hai aur jo hum newtodos ka data is main store karwa rahay hain woh toh eik array of object hai toh is liye hum ny stringify function yeh method keh lo us ka istemal kar k apnay array of object ko string main convert kardiya means JSON.stringify(newTodos) yeh cheez newtodos main say data nikalay gi aur stringify ussay string main convert karde gah 
            localStorage.setItem("todos", JSON.stringify(newTodos))
            return newTodos;
        })

        };
        const toggleTodoAsCompleted = (id:string)=>{
            setTodos((prev)=> {
                const newTodos = prev.map((task)=> {
                    if (task.id ==id){
                        return{...task, completed: !task.completed}
                    }
                    return task;
                })
                 //upper main ny essi same line likhi hai aur wahan iska maqsad bataya hai
                localStorage.setItem("todos", JSON.stringify(newTodos))
                return newTodos;
            })
        }
        const handleTodoDelete =(id:string)=> {
            setTodos((prev)=> {
                const newTodos = prev.filter((task)=> task.id !==id)
                //upper main ny essi same line likhi hai aur wahan iska maqsad bataya hai
                localStorage.setItem("todos", JSON.stringify(newTodos))
                return newTodos;
            })
        }
        
    
    return(
    <todosContext.Provider value={{todos, handleAddTodo, toggleTodoAsCompleted, handleTodoDelete}}>
        {children}
    </todosContext.Provider>
    );
}


// yeh ap ka custom hook hai aur hum ny react video 66 thapa main dekha tha k custom hooks main hum use ka word use kartay hain jesay yahan useTodos
// ab yeh hum ny is liye banaya kyu k agar yeh na hota toh humain her coommponent main phelay use context ko import karna parhta aur phir is component ko bhi import karna parhta jo k abhi bhi hum kartay hain 
// per neechay walay code ki madad say ab humain use context ko her component main import nahi karna parhta bus is store/todos.tsx k component ko import karna parhta hai 
// aur agar ap sochain k yeh hook kesay huwa toh jesay k ap ko pata hai hoook bhi eik function hi hota hai toh yeh bhi toh ap ny eik funcytion hi banaya hai
// aur issay nahi banatay toh humain kya nuksan hota woh upper bata diya lekin phir bhi na samaj aye toh TypeScript and React ki word file dekh lena warna video 66 dekh lena thapa ki

export function useTodos() {
    const todosContextValue = useContext(todosContext)
    if(!todosContextValue){
        throw new Error("USe Todos Use Outside of provider");
        
    }
    return todosContextValue;
}