import React from 'react'
import Todo from './Todo'

function Todos({todoList, setTodoList}) {

  const reverseTodoList = todoList.slice(0).reverse();

  return (
    <div className='todo-bloc'>
        {reverseTodoList.map((item) => (
            <Todo key={item.id} todoElement={item} todoList={todoList} setTodoList={setTodoList}></Todo>
        ))}
    </div>
  )
}

export default Todos