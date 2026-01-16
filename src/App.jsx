import { useEffect, useState } from "react";
import { getTasks, addTask, deleteTask, toggleTask  } from "./api/api";
import TaskList from "./components/TaskList";
import AddTask from "./components/AddTask";

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");
  const [loading, setLoading] = useState(true);

  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true; // "all"
  });

  useEffect(() => {
    getTasks()
      .then((res) => setTasks(res.data))
      .finally(() => setLoading(false));
  }, []);

  const handleAddTask = async (title) => {
    const res = await addTask({ title, completed: false });
    setTasks([res.data, ...tasks]);
  };

  const handleDeleteTask = async (id) => {
    await deleteTask(id);
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleToggle = async (id) => {
    const task = tasks.find((t) => t.id === id);
    const updatedCompleted = !task.completed;

    await toggleTask(id, updatedCompleted);

    setTasks((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, completed: updatedCompleted } : t
      )
    );
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>📝 Task Manager</h1>
      <AddTask onAdd={handleAddTask} />
      <TaskList 
        tasks={filteredTasks}
        onDelete={handleDeleteTask}
        onToggle={handleToggle} 
      />
      <div style={{ marginTop: "1rem" }}>
        <button onClick={() => setFilter("all")}>
          All
        </button>
        <button onClick={() => setFilter("active")}>
          Active
        </button>
        <button onClick={() => setFilter("completed")}>
          Completed
        </button>
      </div>
    </div>
  );
}

export default App;
