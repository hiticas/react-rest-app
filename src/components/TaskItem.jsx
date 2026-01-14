export default function TaskItem({ task, onDelete, onToggle }) {
  return (
    <li onClick={() => onToggle(task.id)} style={{ cursor: "pointer" }}>
      {task.completed ? "✅" : "⬜"}
      <span 
        style={{
          textDecoration: task.completed ? "line-through" : "none",
        }}
      > {task.title} </span>
      <button
        onClick={(e) => {
          e.stopPropagation(); // prevent toggle when deleting
          onDelete(task.id);
        }}
      >
        ❌
      </button>
    </li>
  );
}
