import styles from './index'

export default function Todos({ todos }) {
  return (
    <div>
      {todos.map(item => (
        <div className="todoItem">
          {item.title}
        </div>
      ))}

      <style>
        {`
          .todoItem {
            border: 1px solid #ddd;
            padding: 5px;
            margin: 20px;
            border-radius: 5px;
          }
        `}
      </style>
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