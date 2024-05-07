function Todo({todoName}) {

    function delteTodo() {
        //TODO
    }

    return (
        <div>
            <p>{todoName.title}</p>
            <button>DONE</button>
            <button onClick={() => console.log(todoName.id)}>DELETE</button>
        </div>
    )
}

export default Todo;