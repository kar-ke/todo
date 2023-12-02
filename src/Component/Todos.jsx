import React from 'react'

const Todos = ({todo}) => {
  return (
    <div>
        {todo.map((todo) => <h5>{todo.task}</h5>)}
    </div>
  )
}

export default Todos