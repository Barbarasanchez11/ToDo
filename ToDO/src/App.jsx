import React from 'react';
import { useState } from 'react';

const App = () => {
  
    const [tasks, setTasks] = useState([]);
    const [newTask,setNewTask] = useState('')
   
  
    
    const handleAddTask = () => {
    setTasks([...tasks, newTask])
    setNewTask('')
    
    }
 


  return(
  <main className="main-todo">
    <section className="section-todo">
      <div className="container-add-todo">
      <input type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)} className="input-task-todo"/>
      <button type="button" onClick={handleAddTask}>Añadir</button>
      </div>
      <div className="conatiner-list-todo">
      <button type="button">Eliminar completados</button>
      </div>
    </section>
  </main>
 )
  
}

export default App
