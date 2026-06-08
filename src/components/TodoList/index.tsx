import { useContext } from "react";
import { themeConfig } from "../../contexts/theme";
import { ThemeContext } from "../../contexts/ThemeContext";
import type { Todo } from "../../hooks/useTodo";
import IconCheck from "../../assets/icon-check.svg"
interface TodoListProps {

  todoList: Todo[]
  toggleTodoCompleted: (id: number) => void
  setFilter:(filter: "all" | "active" | "completed") => void
  filter: "all" | "active" | "completed"
  clearCompleted: () => void
  removeTodo:(id:number)=>void
}





const TodoList = ({ todoList, toggleTodoCompleted, setFilter , filter, clearCompleted, removeTodo}: TodoListProps) => {
  const { theme } = useContext(ThemeContext)
  return (
    <div className={`${themeConfig[theme].todo.backgroundColor} rounded-md`}>
      <ul>
        {todoList.map((todo) => (
          <li className={`p-6 border-b ${themeConfig[theme].todo.borderColor}`} key={todo.id}>

            <div className='flex items-center gap-4 '>
              <span className="w-6 h-6 rounded-full hover:bg-[linear-gradient(to_right,hsl(192,100%,67%),hsl(280,87%,65%))] hover:p-px">
                <button onClick={() => toggleTodoCompleted(todo.id)} className={`w-full h-full rounded-full border ${themeConfig[theme].todo.borderColor} cursor-pointer ${themeConfig[theme].todo.backgroundColor} ${todo.completed ? 'bg-[linear-gradient(to_right,hsl(192,100%,67%),hsl(280,87%,65%))]' : ''}`}>
          
                   
                  <img src={IconCheck} alt="check icon" className={`mx-auto ${todo.completed ? 'block' : 'hidden'}`} />
                </button>
              </span>
              <p className={`${themeConfig[theme].todo.textColor} ${todo.completed ? 'line-through opacity-50' : ''}`}>{todo.text}</p>
              <button className="ml-auto cursor-pointer text-red-500 hover:text-red-700" onClick={() => removeTodo(todo.id)}>X</button>
            </div>
          </li>
        ))}
      </ul>
     
        <div className={`text-sm flex justify-between p-4 ${themeConfig[theme].todo.textColor}`}>
          <p>{todoList.length} Itens Total</p>
          <div className='hidden sm:flex gap-4'>
            <button className={`${filter === "all" ? "text-bright-blue" : ""} cursor-pointer`} onClick={() => setFilter("all")}>All</button>
            <button className={`${filter === "active" ? "text-bright-blue" : ""}  cursor-pointer`} onClick={() => setFilter("active")}>Active</button>
            <button className={`${filter === "completed" ? "text-bright-blue" : ""}  cursor-pointer`} onClick={() => setFilter("completed")}>Completed</button>
          </div>

          <button className="cursor-pointer" onClick={clearCompleted}>
            Clear Selected
          </button>
        </div>
    
     
        <div
          className={`${themeConfig[theme].todo.textColor} flex justify-center gap-5 py-4 rounded-md mt-4 sm:hidden`}>
          <button className={`${filter === "all" ? "text-bright-blue" : ""} cursor-pointer`} onClick={() => setFilter("all")}>All</button>
          <button className={`${filter === "active" ? "text-bright-blue" : ""}  cursor-pointer`} onClick={() => setFilter("active")}>Active</button>
          <button className={`${filter === "completed" ? "text-bright-blue" : ""}  cursor-pointer`} onClick={() => setFilter("completed")}>Completed</button>


        </div>
  
    </div>


  )
}
export default TodoList;