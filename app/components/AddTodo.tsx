import { useState } from 'react'

export default function AddTodo() {
  const [newTodo, setNewTodo] = useState<string>('')
  return (
    <form>
      <input type="text" value={newTodo} onChange={e => setNewTodo(e.target.value)} />
      <input type="submit" value="addTodo" />
    </form>
  )
}