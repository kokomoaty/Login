import React, { useState } from 'react';
import { nanoid } from 'nanoid';
const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      const task={
        id:nanoid(),
        text:newTask
      }
      setTasks([...tasks, task]);
      setNewTask('');
    }
  };

  const handleRemoveTask = (id) => {
    setTasks(tasks.filter(task=>task.id!==id));
  };

  return (
    <div className="todo-container">
      <h2>To-Do List</h2>
      <div className="todo-form">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task"
          className="input-field"
        />
        <button onClick={handleAddTask} className="add-button">
          Add Task
        </button>
      </div>
      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task.id}>
            {task.text}
            <button onClick={() => handleRemoveTask(task.id)} className="remove-button">
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
