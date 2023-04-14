import React from 'react'
import '../styles/App.css'

export default function ToDoItem(props) {
  const OnCompleteTask =()=>{
    alert('completaste ' + props.text)
  };
  const OnDeleteTask =()=>{
    alert('Borraste ' + props.text)
  }
  return (
    <li className='contItem'>
      <input type="checkbox" name="" id="checkItem" onClick={OnCompleteTask} />
      <p className={`toDoCheck ${props.completed && 'toDoUndo'}`} >{props.text}</p>
      <span className='eraseItem' onClick={OnDeleteTask}>X</span>
    </li>
  );
}
