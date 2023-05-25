import React from 'react'
import '../styles/App.css'

export default function ToDoButton({setOpenModal}) {
  
  const ClickModal = () => {
    setOpenModal(true)
  }
  return (
    <button className='addButton' title='Agregar'
      onClick={ClickModal}
    >
      +
    </button>
  )
}
