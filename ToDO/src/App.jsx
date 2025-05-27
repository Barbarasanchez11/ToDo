import React from 'react';
import { useState} from 'react';
import Inputs from './components/Inputs';
import Button from './components/Buttons';
import './styles/reset.css'
import './styles/App.css'

const App = () => {
  
  const [tasks, setTasks] = useState([]);
  const [newTask,setNewTask] = useState('')
  const [taskDone,setTaskDone] = useState([])
    
  const handleAddTask = () => {
    const existTask = tasks.indexOf(newTask)     
    if(existTask === -1 ) {
      setTasks([...tasks, newTask])  
    }
    setNewTask('')
  }
 
  const handleDeleteDone = (task) => {
    const isDoneTask = taskDone.indexOf(task)
    isDoneTask === -1 ? setTaskDone([...taskDone, task]) : setTaskDone(taskDone.filter(task => task !== task))   
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
        <Inputs  value={newTask} onChange={(event) => setNewTask(event.target.value)} className="input-task-todo" />
        <Button onClick={handleAddTask} className="button-addtask-todo">
              Añadir
        </Button>
       </div>
      </div>
      <div className="container-add-todo">

      {tasks.map(task => {
        const isDone = taskDone.includes(task)
       return(
       <div key={task} className='task-container-todo'>
        <label className="custom-checkbox">
         <Inputs type="checkbox" onClick={(event) => handleDeleteDone(event.target.id)} id={task} checked={isDone} />
         <span></span>
        </label>

        <p id={isDone ? 'task-done' : ''} className={isDone ? 'task-done' : ''}>{task}</p>
       </div>
      )}
      )}
      <div className="container-list-todo">
      <Button onClick={deleteTasks} className="button-delete-todo">
              Eliminar completados
      </Button>
      </div>
      </div>
    </section>
  </main>
 )
  
}

export default App
