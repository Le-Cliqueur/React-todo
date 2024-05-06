import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  function addCount() {
    setCount(count + 1);
  }

  return (
    <>
      <p>C'est moi</p>
      <h1>{count}</h1>
      <button onClick={() => addCount()}>Click here</button>
    </>
  )
}

export default App
