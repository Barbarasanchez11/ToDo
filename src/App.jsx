import React from 'react';
import { useState } from 'react';
import InputText from './components/Input/InputText';
import InputCheckbox from './components/Input/InputCheckbox';
import Button from './components/Button/Button';
import './styles/reset.css';
import './styles/App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [taskDone, setTaskDone] = useState([]);

  const handleAddTask = () => {
    if (!newTask.trim()) return;

    const existTaskIndex = tasks.findIndex(task => task.text === newTask.trim());
    if (existTaskIndex === -1) {
      setTasks([...tasks, { id: Date.now(), text: newTask.trim() }]);
    }
    setNewTask('');
  };

  const handleDeleteDone = (taskId) => {
    const isDoneTask = taskDone.indexOf(taskId);
    if (isDoneTask === -1) {
      setTaskDone([...taskDone, taskId]);
    } else {
      setTaskDone(taskDone.filter(id => id !== taskId));
    }
  };

  const deleteTasks = () => {
    const taskFiltered = tasks.filter(task => !taskDone.includes(task.id));
    setTasks(taskFiltered);
    setTaskDone([]);
  };

  return (
    <main className="main-todo">
      <section className="section-todo">
        <div className="background-addtask-todo">
          <div className="addtask-container-todo">
            <InputText
              value={newTask}
              onChange={(event) => setNewTask(event.target.value)}
              className="input-task-todo"
            />
            <Button type="primary" onClick={handleAddTask}>Añadir</Button>
          </div>
        </div>
        <div className="container-add-todo">
          {tasks.map((task) => {
            const isDone = taskDone.includes(task.id);
            return (
              <div key={task.id} className="task-container-todo">
                <label className="custom-checkbox">
                  <InputCheckbox
                    type="checkbox"
                    onClick={() => handleDeleteDone(task.id)}
                    id={task.id.toString()}
                    checked={isDone}
                  />
                  <span></span>
                </label>

                <p id={isDone ? 'task-done' : ''} className={isDone ? 'task-done' : ''}>
                  {task.text}
                </p>
              </div>
            );
          })}
          <div className="container-list-todo">
            <Button type="delete" onClick={deleteTasks}>Eliminar completados</Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default App;

