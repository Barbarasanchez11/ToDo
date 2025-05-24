import React from 'react';
import { useState } from 'react';

const App = () => {
  
    const [tasks, setTasks] = useState([]);
    const [newTask,setNewTask] = useState('')
   
  
    
  const handleAddTask = () => {
   
    const existTask = tasks.indexOf(newTask)     
    if(existTask === -1 )setTasks([...tasks, newTask])  
    setNewTask('')
    
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
       <>
        <input type='checkbox'/>
        <div key={task}>{task}</div>
       </>
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
