import React from "react";

const ShortCircuit = () => {
  const todoList = [
    { id: 1, task: "Initialize the project", completed: true },
    { id: 2, task: "Install dependencies", completed: true },
    { id: 3, task: "Create the Array structure", completed: true },
    { id: 4, task: "Build the UI Layout", completed: false },
    { id: 5, task: "Implement the Add Task function", completed: false },
    { id: 6, task: "Add Delete functionality", completed: false },
    { id: 7, task: "Filter completed tasks", completed: false },
    { id: 8, task: "Style with CSS/Tailwind", completed: false },
    { id: 9, task: "Test on mobile devices", completed: false },
    { id: 10, task: "Deploy to production", completed: false },
  ];
  return (
    <div>
      <h1>Conditional Rendering Demo By Using Short Circuit Opertaor (&&)</h1>
      {/* condition ?? right-side-code */}
      {todoList.length > 0 && (
        <ul>
          {todoList.map((todo) => {
            return <li key={todo.id}>{todo.task}</li>;
          })}
        </ul>
      )}
    </div>
  );
};

export default ShortCircuit;
