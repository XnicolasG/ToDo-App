import React from 'react'
import '../styles/App.css'

export default function ToDoItem(props) {
  return (
    <li className='contItem'>
      <input type="checkbox" name="" id="checkItem"  />
      <p >{props.text}</p>
      <span className='eraseItem' >X</span>
    </li>
  );
}
