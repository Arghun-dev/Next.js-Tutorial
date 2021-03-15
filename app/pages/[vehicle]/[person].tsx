import { useRouter } from 'next/router'

export default function Person() {
  const { query } = useRouter();
  return (
    <h1>{query.person}'s {query.vehicle}</h1>
  )
}