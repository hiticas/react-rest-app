export default function TaskItem({ task, onDelete }) {
  return (
    <li>
      {task.title}
      <button onClick={() => onDelete(task.id)}>❌</button>
    </li>
  );
}
