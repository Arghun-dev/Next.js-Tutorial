# Next.js-Tutorial

## Dynamic Route

`pages/[vehicle]/[person].js`

now the `vehicle` and `person` are dynamic routes.

**look at this amazing example**

```js
import Link from 'next/link';

const people = [
  { vehicle: 'car', name: 'arghun' },
  { vehicle: 'bike', name: 'sahand' },
  { vehicle: 'airplane', name: 'shahla' }
]

export default function Index() {
  return (
    <div>
      {people.map(item => (
        <div>
          <Link as={`/${item.name}/${item.vehicle}`} href="/[vehicle]/[person]">
            <a>Navigate to {item.name}'s {item.vehicle}</a>
          </Link>
        </div>
      ))}
    </div>
  )
}
```
