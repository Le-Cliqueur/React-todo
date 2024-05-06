import { useState } from 'react'
import Todo from './Todo'

function App() {
  const [todos, setTodos] = useState(["hello", "hel"])
  const [count, setCount] = useState(0)
  const [value, setValue] = useState('')

  function addCount() {
    setCount(count + 1);
  }

  function updateTodo() {
    setTodos([...todos, value]);
    setCount(count + 1);
    setValue('');
  }


  function updateValue(e) {
    const input = e.target.value;
    setValue(input);
  }

  return (
    <>
      <p>C'est moi</p>
      <h1>{count}</h1>
      <button onClick={() => addCount()}>Click here</button>

      <input type='text' value={value} className='inp' onChange={(e) => updateValue(e)}></input>
      <button onClick={(e) => updateTodo(e)}>ADD</button>
      <Todo/>
      <ul>
        {todos.map(item => (
          <li>{item}</li>
        ))}
      </ul>
    </>
  )
}

export default App
