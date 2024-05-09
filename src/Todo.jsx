import { useState } from "react";

function Todo({todoElement, todoList, setTodoList}) {

    const [todoElem, setTodoElem] = useState(todoElement)

    function deleteTodo() {
        const newArr = todoList.filter((item) => item.id !== todoElement.id)
        setTodoList(newArr)
    }

    function completedTodo(e) {
        setTodoElem({...todoElement, isCompleted : !(todoElem.isCompleted)})
        if (e.target.parentElement.parentElement.style.backgroundColor == '') {
            e.target.parentElement.parentElement.style.backgroundColor = 'olive'
        } else {
            e.target.parentElement.parentElement.style.backgroundColor = ''
        }
    }

    return (
        <div className="one-todo">
            <p className="title">{todoElement.title}</p>
            <div className="btns">
                <button className="btn-done" onClick={(e) => completedTodo(e)}>DONE</button>
                <button className="btn-delete" onClick={() => deleteTodo()}>DELETE</button>
            </div>
        </div>
    )
}

export default Todo;