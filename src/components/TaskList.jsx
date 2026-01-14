import TaskItem from "./TaskItem";

export default function TaskList({ tasks, onDelete, onToggle  }) {
  return (
    <ul className="list">
      {tasks.map((task) => (
        <TaskItem 
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </ul>
  );
}
