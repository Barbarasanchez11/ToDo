import React from 'react';
import { useState} from 'react';
import './App.css'

const App = () => {
  
  const [tasks, setTasks] = useState([]);
  const [newTask,setNewTask] = useState('')
  const [taskDone,setTaskDone] = useState([])
   
  
    
  const handleAddTask = () => {
   
    const existTask = tasks.indexOf(newTask)     
    if(existTask === -1 )setTasks([...tasks, newTask])  
    setNewTask('')
  }
 
  const handleDeleteDone = (task) => {
    const isDoneTask = taskDone.indexOf(task)
    isDoneTask === -1 ? setTaskDone([...taskDone, task]) : setTaskDone(taskDone.filter(t => t !== task))   
    };

  const deleteTasks = () => {
    const taskFiltered = tasks.filter(task => !taskDone.includes(task))
    setTasks(taskFiltered)
    setTaskDone([])
  }  
    
  return(
  <main className="main-todo">
    <section className="section-todo">
      <div className='background-addtask-todo'>
       <div className='addtask-container-todo'>
        <input type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)} className="input-task-todo"/>
        <button type="button" onClick={handleAddTask} className='button-addtask-todo'>Añadir</button>
       </div>
      </div>
      <div className="container-add-todo">

      {tasks.map(task => {
        const isDone= taskDone.includes(task)
       return(
       <div key={task} className='task-container-todo'>
        <input type='checkbox' className="checkbox-todo" onClick={(e) => {handleDeleteDone(e.target.id)}} 
        id={task} 
        checked={isDone}/>
        <p className={isDone ? 'task-done' : ''}>{task}</p>
       </div>
      )}
      )}
      <div className="container-list-todo">
      <button type="button" onClick={deleteTasks} className='button-delete-todo' >Eliminar completados</button>
      </div>
      </div>
    </section>
  </main>
 )
  
}

export default App
