import React, { useState } from 'react'

function Header({oldTodo, addTodo}) {
    const [value, setValue] = useState('')
    const [count, setCount] = useState(1)


    function updateValue() {
        setValue(document.querySelector('input').value)
    }

    function btnClick() {
        setCount(count + 1)
        addTodo([...oldTodo, {id : count, title : value}])
    }

  return (
    <div>
        <h1>C'est moi</h1>
        <input type='text' value={value} onChange={() => updateValue()} className='inp'></input>
        <button className='btn' onClick={() => btnClick()}>ADD TODO</button>
    </div>
  )
}

export default Header