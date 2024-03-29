import React from 'react'
import { fetchData } from '../mockData'
import Todos from '../components/todos'


const Ssg = async () => {
  const todos = await fetchData({ cache: 'force-cache' })
  const props = {
    todos: todos,
    renderingType: 'SSG'
  }
  return (
    <div>
      <Todos {...props} />
    </div>
  )
}

export default Ssg