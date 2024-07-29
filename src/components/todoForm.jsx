import { useState } from "react";

export function TodoForm ({onAdd}){

  const [text, setText] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
     if (text.trim()) {
      onAdd(text.trim())
      setText('');
    }
  }

  return <div>
    <form onSubmit={handleSubmit}>
      <input type="text" 
      value={text}
      onChange={(e)=> setText(e.target.value)}
      placeholder="Entrer un tache"
      />
      <button type="submit">Ajouter</button>
    </form>
  </div>
} 