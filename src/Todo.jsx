import { useState } from "react";

function Todo({todoElement, todoList, setTodoList}) {

    const [todoElem, setTodoElem] = useState(todoElement)

    function deleteTodo() {
        const newArr = todoList.filter((item) => item.id !== todoElement.id)
        setTodoList(newArr)
    }

    function completedTodo(e) {
        setTodoElem({...todoElement, isCompleted : !(todoElem.isCompleted)})
        e.target.parentElement.style.backgroundColor == 'green' ?  e.target.parentElement.style.backgroundColor = '' : e.target.parentElement.style.backgroundColor = 'green'
    }

    return (
        <div>
            <p>{todoElement.title}</p>
            <button onClick={(e) => completedTodo(e)}>DONE</button>
            <button onClick={() => deleteTodo()}>DELETE</button>
        </div>
    )
}

export default Todo;