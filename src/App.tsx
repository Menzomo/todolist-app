
import TodoForm from './components/todoForm'
import TodoHeader from './components/todoHeader'
import TodoList from './components/TodoList'
import { themeConfig } from './contexts/theme'
import { useContext } from 'react'
import { ThemeContext } from './contexts/themeContexts'

function App() {
  const { theme } = useContext(ThemeContext)
  return (

    <main className={`${themeConfig[theme].layout.backgroundColor} h-screen`}>

      <div className={themeConfig[theme].layout.heroClass}>
        <div className='max-w-175 m-auto p-8'>
          <TodoHeader />
          <TodoForm />
       <TodoList />


        </div>
      </div>

    </main>
  )
}

export default App
