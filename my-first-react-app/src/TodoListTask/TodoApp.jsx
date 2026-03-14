import React, { useState } from "react";
import toast from "react-hot-toast";

const TodoApp = () => {
  //! state for task
  let [task, setTask] = useState("");

  //! state for multiple tasks
  let [todos, setTodos] = useState([]);

  let handleInputChange = (e) => {
    setTask(e.target.value);
  };
  let handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() === "") {
      toast.error("Please add the task first");
      return;
    } else {
      toast.success("Task added successfully");
      setTodos([
        ...todos,
        { id: Date.now(), text: task.trim(), completed: false },
      ]);
      console.log(todos);
    }
    setTask("");
  };

  let toggleTask = (id) => {
    setTodos((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item,
      ),
    );
  };

  let deleteTask = (id) => {
    setTodos((prev) => prev.filter((item) => item.id !== id));
  };

  let completedTasks = todos.filter((item) => item.completed).length;
  let remaining = todos.length - completedTasks;

  //   console.log(Date.now());
  return (
    <div className="max-w-md mx-auto mt-10 rounded shadow-md p-3">
      <article className="w-full">
        <h1 className="text-2xl font-semibold font-sans mb-1">Todo App Task</h1>
        <p className="text-gray-500 text-sm mb-3">
          {remaining} remaining {remaining === 1 ? "task" : "tasks"}
        </p>
      </article>
      <form onSubmit={handleSubmit} className="w-full">
        <div className="w-full flex gap-3">
          <input
            type="text"
            placeholder="Enter a task here.."
            className="flex-1 outline-none border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:border-2 transition p-2 placeholder:text-sm"
            onChange={handleInputChange}
            value={task}
          />
          <button className="py-2 px-4 bg-blue-500 text-white rounded-lg cursor-pointer hover:bg-blue-600 transition">
            Add Task
          </button>
        </div>
      </form>
      <section className="mt-3">
        {todos.length > 0 ? (
          <ul className="w-full flex flex-col gap-2">
            {todos.map((taskItem) => {
              return (
                <li
                  key={taskItem.id}
                  className="flex items-center gap-2 border p-2 border-gray-400 rounded"
                >
                  <input
                    type="checkbox"
                    className="w-4 h-4 accent-blue-600"
                    checked={taskItem.completed}
                    onChange={() => toggleTask(taskItem.id)}
                  />
                  <span
                    className={` text-sm ${taskItem.completed ? "line-through text-gray-500" : "text-gray-800"}`}
                  >
                    {taskItem.text}
                  </span>
                  {/* It will only display when the task will be completed */}
                  {taskItem.completed && (
                    <span className="bg-green-100 text-green-600  py-1 px-3 text-xs rounded">
                      Done
                    </span>
                  )}
                  <span
                    className="text-gray-800 hover:text-red-600 cursor-pointer"
                    onClick={() => deleteTask(taskItem.id)}
                  >
                    x
                  </span>
                </li>
              );
            })}
          </ul>
        ) : (
          <div className="w-full h-20 border border-dashed border-gray-400 rounded-lg flex justify-center items-center text-gray-500">
            No tasks here. Add one above!
          </div>
        )}
      </section>
    </div>
  );
};

export default TodoApp;
