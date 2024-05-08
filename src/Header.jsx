import React, { useState } from 'react'

function Header({todoList, setTodoList}) {
    const [newTodoStr, setNewTodoStr] = useState('')
    const [id, setId] = useState(1)


    function updateNewTodoStr() {
        setNewTodoStr(document.querySelector('input').value)
    }

    function btnClickAdd() {
        setId(id + 1)
        setTodoList([...todoList, {id : id, title : newTodoStr, isCompleted : false}])
        setNewTodoStr('')
    }

  return (
    <div>
        <h1>C'est moi</h1>
        <input type='text' value={newTodoStr} onChange={() => updateNewTodoStr()} className='inp'></input>
        <button className='btn' onClick={() => btnClickAdd()}>ADD TODO</button>
    </div>
  )
}

export default Header