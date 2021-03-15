import styles from '../../styles/todos.module.css'
import AddTodo from '../../components/AddTodo'

export default function Todos({ todos }) {
  return (
    <div className={styles.todos}>
      <AddTodo />
      {todos.map(item => (
        <div className={styles.todoItem}>
          {item.title}
        </div>
      ))}
    </div>
  )
}

Todos.getInitialProps = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  const todos = await response.json();

  return {
    todos
  }
}