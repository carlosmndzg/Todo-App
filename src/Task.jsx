const Task = ({ name, taskId, handler }) => {
    const handleClick = (event) => {
        event.stopPropagation()
        handler(taskId)
    }

    return (
        <li key={taskId} className="todo__element">
            <span>{name}</span>
            <button className="todo__element-delete" onClick={handleClick}>
                Delete
            </button>
        </li>
    )
}

export default Task
