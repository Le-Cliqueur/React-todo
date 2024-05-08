import React from 'react'
import Todo from './Todo'

function Todos({todoList, setTodoList}) {
  return (
    <div>
        {todoList.map((item) => (
            <Todo key={item.id} todoElement={item} todoList={todoList} setTodoList={setTodoList}></Todo>
        ))}
    </div>
  )
}

export default Todos