import React, { useContext, useState } from 'react'
import { todoContext } from '../context/todoContext'

export const ToDoForm = () => {

    const {
        addToDo,
        setOpenModal
    } = useContext(todoContext)

    const [newTodoVal, setNewTodoVal] = useState('');

    const onChange = (e) => {
        setNewTodoVal(e.target.value);
    }

    const onCancel = () => {
        setOpenModal(false)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (newTodoVal === '') {
            return
        } else {
            addToDo(newTodoVal) // enviado estado a funcion addTodo
        }
        setOpenModal(false)
    }
    return (
        <div className='contForm'>
            <form className='mainForm' onSubmit={onSubmit}>
                <label className='formLabel'>Crea una nueva tarea</label>
                <textarea
                    cols="30" rows="8"
                    className='textForm'
                    value={newTodoVal}
                    onChange={onChange}
                    placeholder="ej: hacer mercado" />
                <p className='disable'>
                    Escribe alguna tarea para poder agregar
                </p>

                <button
                    className="btn btnCancel"
                    type="button"
                    onClick={onCancel}
                >
                    Cancelar
                </button>

                <button
                    className="btn btnAdd"
                    type='submit'
                >
                    Agregar
                </button>

            </form>
        </div>
    )
}
