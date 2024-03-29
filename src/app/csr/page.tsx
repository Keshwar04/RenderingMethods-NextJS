"use client"
import React, { useEffect, useState } from 'react'
import Todos from '../components/todos'
import { fetchData } from '../mockData'

const Csr = () => {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    fetchMockDatas()
  }, [])

  const fetchMockDatas = async () => {
    const todosData = await fetchData({})
    setTodos(todosData.filter((e: { id: number }) => e.id <= 100))
  }

  const props = {
    todos: todos,
    renderingType: 'CSR'
  }
  return (
    <div>
      <Todos {...props} />
    </div>
  )
}

export default Csr