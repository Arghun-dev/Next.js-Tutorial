import { useRouter } from 'next/router'

export default function CarsList() {
  const { query } = useRouter();
  return (
    <h1>{query.vehicle}</h1>
  )
}