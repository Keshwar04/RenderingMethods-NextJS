import React from 'react'
import { fetchData } from '../mockData'
import Todos from '../components/todos'

const Ssr = async () => {
  const todos = await fetchData({ cache: 'no-store' })
  const props = {
    todos: todos,
    renderingType: 'SSR'
  }
  return (
    <div>
      <Todos {...props} />
    </div>
  )
}

export default Ssr