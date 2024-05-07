import React from 'react'
import Todo from './Todo'

function Todos({todoToAdd}) {
  return (
    <div>
        {todoToAdd.map((item) => (
            <Todo key={item.id} todoName={item}></Todo>
        ))}
    </div>
  )
}

export default Todos