import { useState } from 'react'
import Todo from './Todo'
import Header from './Header'
import Todos from './Todos'

function App() {
  const [newTodo, setNewTodo] = useState([{id : 0, title : "blabla"}])

  return (
    <>
      <Header oldTodo={newTodo} addTodo={setNewTodo}></Header>
      <Todos todoToAdd={newTodo}></Todos>
    </>
  )
}

export default App
