import React from 'react'
import '../styles/App.css'

function ToDoList({children}) {
  return (
    <section className='contList'>
      <ul>
        {children}
      </ul>
    </section>
  )
}

export default ToDoList