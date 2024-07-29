export function TodoItem({task, onCheck, onDelete}) {
   return <div>
    <input type="checkbox"
    checked={task.checked}
    onChange={()=>onCheck(task.id)}
    />
    <span style={{ textDecoration: task.checked ? 'line-through' : 'none' }}>
       {task.text}
     </span>
    <button onClick={() => onDelete(task.id)}>Supprimer</button>
  </div>
}

