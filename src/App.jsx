import { useEffect } from 'react'
import { useState } from 'react'
import './App.css'
import Task from './Task'
import Input from './Input'

function App() {
    const [tasks, setTasks] = useState(
        JSON.parse(window.localStorage.getItem('tasks')) ?? []
    )

    const handleDelete = (taskId) => {
        setTasks(
            tasks.filter((task) => {
                const { id } = task
                return taskId !== id
            })
        )
    }

    useEffect(() => {
        window.localStorage.setItem('tasks', JSON.stringify(tasks))
    }, [tasks])

    const handleAddTodo = (event) => {
        const input = document.querySelector('.todo__input')
        const { value } = input

        if (!value) return
        if (event.type === 'keyup' && event.key !== 'Enter') return

        const newTasks = [
            ...tasks,
            {
                name: value,
                id: tasks.length + Date.now(),
            },
        ]

        input.value = ''

        setTasks(newTasks)
    }

    const clearTasks = () => {
        setTasks([])
    }

    return (
        <>
            <h1>TODO App</h1>
            <div className="app">
                <Input onClick={handleAddTodo} />
                <ul className="todo__elements" onClick={handleDelete}>
                    {tasks.map((task) => {
                        const { name, id } = task

                        return (
                            <Task
                                name={name}
                                taskId={id}
                                key={id}
                                handler={handleDelete}
                            />
                        )
                    })}
                </ul>
                <button onClick={clearTasks} className="todo__delete">
                    Clear tasks
                </button>
            </div>
        </>
    )
}

export default App
