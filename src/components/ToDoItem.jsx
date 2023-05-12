import React from 'react'
import '../styles/App.css'


export default function ToDoItem(props) {

  

  return (
    <>
      
      <li className='contItem'>
        <input type="checkbox"
          id="checkItem"
          onClick={props.onComplete}
          defaultChecked={props.completed}
        />
        <p
          className={` toDoCheck ${props.completed && 'toDoUndo'}`}
        >
          {props.text}
        </p>
        <span className='eraseItem' onClick={props.onDelete}>X</span>
      </li>
    </>
  );
}
