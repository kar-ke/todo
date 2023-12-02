import React from 'react'
import SingleTodo from './SingleTodo'

const Todos = ({todo}) => {
  return (
    <div className='flex flex-col gap-4  mt-10'>
        {todo.map((todo, index) => <SingleTodo task={todo.task} key={index} />)}
    </div>
  )
}

export default Todos