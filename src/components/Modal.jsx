import React from 'react'
import ReactDOM from 'react-dom'

export const Modal = ({children}) => {
  return ReactDOM.createPortal (
    <div className="modalBackground">
    {children}
    </div>,
    document.getElementById('modal')
  )
}
