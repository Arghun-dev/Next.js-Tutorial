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
          <Link href="/[vehicle]/[person]">
            <a>Navigate to {item.name}'s {item.vehicle}</a>
          </Link>
        </div>
      ))}
    </div>
  )
}
```


## Some changes of Next.js Router

1. Next Router is now case sensitive, so if you create a file in your `pages` folder and that file is all `uppercase` that bit of the `url` where that file represents will have to be all uppercase as well. otherwise, Next will return a `404` page.

2. You probably remember, I created `link` and then i put `href` and then `as` property in that component, well you no longer need the `as` property at all. those are the two big changes in `Next.js`


## Example

`pages/[country]/[person].js`

```js
import { useRouter } from 'next/router';

export default function Home() {
  const { query } = useRouter();
  return <div>{JSON.stringify(query)}</div>
}
```


## Data Fetching with getInitialProps

```js
import { useRouter } from 'next/router';

export default function List({ ownersList }) {
const router = useRouter();
  return <pre>{JSON.stringify(ownersList, null, 4)}</pre>
}

List.getInitialProps = async () => {
  const response = await fetch('http://localhost:4001/vehicles');
  const ownerList = await response.json();
  return {ownersList: ownerList}
}
```

this is server side rendering and that is exactly what we want in the first place.
