import {TodoItem} from './todoItem'

export function TodoList({tasks, onCheck, onDelete}){
  const element = tasks.map((task) => <TodoItem key={task.id} task={task} onCheck={onCheck} onDelete={onDelete}/>)

return <div>
  {element}
</div>
}


