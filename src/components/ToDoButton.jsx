import React, { useContext } from 'react'
import '../styles/App.css'
import { todoContext } from '../context/todoContext';

export default function ToDoButton() {
  const {
    setOpenModal
  } = useContext(todoContext)
  
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
