import React, { useState } from 'react'
import './style.css'

function Header({todoList, setTodoList}) {
    const [newTodoStr, setNewTodoStr] = useState('')
    const [id, setId] = useState(1)


    function updateNewTodoStr() {
        setNewTodoStr(document.querySelector('input').value)
    }

    function btnClickAdd() {
      if (newTodoStr.length > 0) {
        setId(id + 1)
        if (newTodoStr.length >= 30) {
          setTodoList([...todoList, {id : id, title : newTodoStr.slice(0, 30)+ "...", isCompleted : false}])
        } else {
          setTodoList([...todoList, {id : id, title : newTodoStr, isCompleted : false}])
        }
        setNewTodoStr('')
      } else {
        alert('TO-DO Empty!')
      }
    }

  return (
    <div className='head'>
        <h1>Todo list app</h1>
        <div className='input-bloc'>
          <input type='text' value={newTodoStr} onChange={() => updateNewTodoStr()} className='inp'></input>
          <button className='btn' onClick={() => btnClickAdd()}>ADD TODO</button>
        </div>
    </div>
  )
}

export default Header