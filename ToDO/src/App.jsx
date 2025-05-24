import React from 'react';
import { useState } from 'react';

const App = () => {
  
    const [tasks, setTasks] = useState([]);
    const [newTask,setNewTask] = useState('')
    const [taskDone,setTaskDone] = useState(false)
   
  
    
  const handleAddTask = () => {
   
    const existTask = tasks.indexOf(newTask)     
    if(existTask === -1 )setTasks([...tasks, newTask])  
    setNewTask('')
    
    }
 
  const handleDoneTask = (event) => {
    setTaskDone(event.target.checked)
  }

  return(
  <main className="main-todo">
    <section className="section-todo">
      <div>
       <div>
        <input type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)} className="input-task-todo"/>
        <button type="button" onClick={handleAddTask}>Añadir</button>
       </div>
      </div>
      <div className="container-add-todo">

      {tasks.map(task => {
       return(
       <div key={task}>
        <input type='checkbox'  onChange={handleDoneTask}/>
        <p>{task}</p>
       </div>
      )}
      )}
      </div>
      <div className="conatiner-list-todo">
      <button type="button">Eliminar completados</button>
      </div>
    </section>
  </main>
 )
  
}

export default App
