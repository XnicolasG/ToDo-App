import React from 'react'
import '../styles/App.css'

function ToDoList(props) {
  return (
    <section className='contList'>
      <ul>
        {props.children}
      </ul>
    </section>
  )
}

export default ToDoList