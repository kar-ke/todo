import React from 'react'
import SingleTodo from './SingleTodo'

const Todos = ({todo, setTodos}) => {

const handleDelete = (task) => {
    setTodos(todo.filter((val) => val.task !== task))
}
  return (
    <div className='flex flex-col gap-4  mt-10'>
        {todo.map((todo, index) => <SingleTodo task={todo.task} key={index}  handleDelete={handleDelete}/>)}
    </div>
  )
}

export default Todos