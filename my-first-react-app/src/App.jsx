import { useState} from 'react'

function App() {
  const [tasks, setTasks] = useState([])
  const [input, setInput] = useState('')

  function addTask() {
    if (input === '') return
    setTasks([...tasks, input])
    setInput('')
  }
   function removeTask(index) {
    setTasks(tasks.filter((_, i) => i !== index))
  }
  return (
    <div>
      <h1>My Todo List</h1>
      <input
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Type a task..."
      />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => removeTask(index)}>Remove</button>
            </li>
        ))}
      </ul>
    </div>
  )
}
export default App