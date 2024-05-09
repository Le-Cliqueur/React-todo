import { useState } from 'react'
import Header from './Header'
import Todos from './Todos'

function App() {
  const [todoList, setTodoList] = useState([{id : 0, title : "blabla", isCompleted : false}])

  return (
    <>
    <div className='all'>
      <Header todoList={todoList} setTodoList={setTodoList}></Header>
      <Todos todoList={todoList} setTodoList={setTodoList}></Todos>
    </div>
    </>
  )
}

export default App
