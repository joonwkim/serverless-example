import { getTodos } from '@/services/todoService'
import TodoItem from './components/TodoItem'
import NewTodo from './components/NewTodo'
import Link from 'next/link'

export default async function Home() {
  const { todos } = await getTodos()
  return (
    <section className='py-20'>
      <div>
        <h1>Api Test</h1>
        <div>
          <Link href='/api/users'>Server less Api with set timeout</Link>
        </div>
        <Link href='/api/usersWithCors'>Server less Api with cors</Link>
        <div>
          <Link href='/api/usersWithAction'>Server less Api with action server</Link>
        </div>
        <div>
          <Link href='/api/hello'>Cors Hello</Link>
        </div>
      </div>
      <div className="mt-3">
        <h1>Todos</h1>
        <NewTodo />
        <h2 className='text-xl font-semibold mt-10 border-b pb-2'>Previous todos:</h2>
        <ul className='list-group'>
          {todos?.map(todo => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </ul>
      </div>
    </section>
  )
}
