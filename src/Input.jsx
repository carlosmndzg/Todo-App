const Input = ({ onClick }) => {
    return (
        <div className="input__container">
            <input type="text" className="todo__input" onKeyUp={onClick} />
            <button className="todo__add" onClick={onClick}>
                Add
            </button>
        </div>
    )
}

export default Input
