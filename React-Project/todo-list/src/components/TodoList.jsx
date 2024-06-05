import React, {useState} from 'react'
import TodoItem from './TodoItem'

var idx = 0

export default function TodoList() {
    const [tasks, setTasks] = useState([ // Gan gia tri ban dau cho bien
        {
            id: idx,
            text: 'go to doctor',
            completed: false
        },
    ])
    const [text, setText] = useState('')

    function addTask(text) {
        const newTask = {
            id: ++idx,
            text,
            completed: false
        }
        setTasks([...tasks, newTask])
        setText('')
    }

    function deleteTask(id) {
        setTasks(tasks.splice(id, 1))
    }

    function toggleCompleted(id) { // Chuyen doi trang thai
        setTasks(tasks[id].completed = !tasks[id].completed)
    }

    console.log(tasks)
    return (
        <div>
            {
                tasks.map(task => ( // moi 1 phan tu trong tasks duoc goi la task, se thuc hien render ra 1 TodoItem
                    <TodoItem
                        key={task.id}   // prop react yeu cau
                        task={task}     // task: ten cua prop, {task}: gia tri cua prop
                        deleteTask={deleteTask}
                        toggleCompleted={toggleCompleted}
                    />
                ))
            }
            <input value={text} onChange={e => setText(e.target.value)} />
            <button onClick={() => addTask(text)}>Add</button>
        </div>
    )
}


