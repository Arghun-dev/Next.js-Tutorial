export interface ITodoItem {
  id: number;
  title: string;
  completed: boolean;
}

export default function TodoItem(props: ITodoItem) {
  return (
    <div key={props.id}>
      <p>{props.title}</p>
    </div>
  )
}