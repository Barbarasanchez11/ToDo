import React from 'react';
import { useState} from 'react';

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
        <input type='checkbox'  onClick={(e) => {handleDeleteDone(e.target.id)}} id={task}/>
        <p>{task}</p>
       </div>
      )}
      )}
      </div>
      <div className="conatiner-list-todo">
      <button type="button" onClick={deleteTasks} >Eliminar completados</button>
      </div>
    </section>
  </main>
 )
  
}

export default App
