import React from 'react'
import '../styles/App.css'

export default function ToDoButton() {
  const ClickModal = () => {
    console.warn('aca aprecera un modal');
  }
  return (
    <button className='addButton' title='Agregar'
      onClick={ClickModal}
    >
      +
    </button>
  )
}
