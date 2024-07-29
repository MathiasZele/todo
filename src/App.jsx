import React, { useState } from 'react';
import { TodoForm } from "./components/todoForm"
import { TodoList } from "./components/todoList"



function App(){
  
   const TodoListCheck = ({ showCheckedTasks, onToggleShowCheckedTasks }) => {
    return (
      <div>
        <input
          type="checkbox"
          checked={showCheckedTasks}
          onChange={onToggleShowCheckedTasks}
          id="id"
        />
        <label htmlFor="id">
          Montrer les tâches cochées
        </label>
      </div>
    )
  }
  const [showCheckedTasks, setShowCheckedTasks] = useState(true);
  const toggleShowCheckedTasks = () => {
    setShowCheckedTasks(!showCheckedTasks);
  }

 const [tasks, setTasks] = useState([])

const addTask = (text) => {
  setTasks([...tasks, { id: Math.random(), text, checked: false }]);
}
  const checkedTask = (id) => {
    setTasks(tasks.map((task) =>
        task.id === id ? { ...task, checked: !task.checked } : task
      )
    )
  }

  const deleteTask = (id) => {
    const newTasks = []
    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i].id !== id) {
        newTasks.push(tasks[i])
      }
    }
    setTasks(newTasks)
  }

  return (
    <div className="mb-3"  style={{justifyContent: 'center', marginBottom : '1rem'}}>
      <h1>Todo List</h1>
      <TodoForm onAdd={addTask}/>
      <TodoList tasks={tasks.filter(task => showCheckedTasks || !task.checked)} onCheck={checkedTask} onDelete={deleteTask} />
      <TodoListCheck showCheckedTasks={showCheckedTasks} onToggleShowCheckedTasks={toggleShowCheckedTasks} /> 
    </div>
  )
  


}

export default App;