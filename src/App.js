import React, { useState } from "react";
import "./App.css";

function App() {
  const [taskInput, setTaskInput] = useState("");
  const [toDoTasks, setToDoTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  // დავალების დამატება
  const addTask = () => {
    if (taskInput.trim()) {
      setToDoTasks([...toDoTasks, taskInput]);
      setTaskInput("");
    }
  };

  // დავალების დასრულება
  const completeTask = (task) => {
    setToDoTasks(toDoTasks.filter((t) => t !== task));
    setCompletedTasks([...completedTasks, task]);
  };

  // შესრულებული დავალების დაბრუნება
  const returnToToDo = (task) => {
    setCompletedTasks(completedTasks.filter((t) => t !== task));
    setToDoTasks([...toDoTasks, task]);
  };

  // დავალების წაშლა
  const deleteTask = (task) => {
    setCompletedTasks(completedTasks.filter((t) => t !== task));
  };

  return (
    <div className="container">
      <h1>To Do List</h1>
      <div className="input-section">
        <input
          type="text"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          placeholder="შეიყვანე ახალი დავალება..."
        />
        <button onClick={addTask}>დამატება</button>
      </div>
      <div className="columns">
        {/* შესასრულებელი დავალებების სვეტი */}
        <div className="column">
          <h2>შესასრულებელი დავალებები</h2>
          <ul>
            {toDoTasks.map((task, index) => (
              <li key={index}>
                {task}
                <button onClick={() => completeTask(task)}>დასრულება</button>
              </li>
            ))}
          </ul>
        </div>

        {/* შესრულებული დავალებების სვეტი */}
        <div className="column">
          <h2>შესრულებული დავალებები</h2>
          <ul>
            {completedTasks.map((task, index) => (
              <li key={index}>
                {task}
                <button onClick={() => returnToToDo(task)}>დაბრუნება</button>
                <button onClick={() => deleteTask(task)}>წაშლა</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
