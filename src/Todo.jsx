function Todo({todoElement, todoList, setTodoList}) {

    function deleteTodo() {
        const newArr = todoList.filter((item) => item.id !== todoElement.id)
        setTodoList(newArr)
    }

    return (
        <div>
            <p>{todoElement.title}</p>
            <button>DONE</button>
            <button onClick={() => deleteTodo()}>DELETE</button>
        </div>
    )
}

export default Todo;