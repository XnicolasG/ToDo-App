import React, { useContext } from 'react'
import { ToDoCounter } from './components/ToDoCounter';
import ToDoButton from './components/ToDoButton';
import ToDoSearch from './components/ToDoSearch';
import ToDoList from './components/ToDoList';
import ToDoItem from './components/ToDoItem';
import { todoContext } from './context/todoContext';
import { Modal } from './components/Modal';
import { ToDoForm } from './components/ToDoForm';
import ToDoLoader from './components/ToDoLoader';
// import ToDoEmpty from './components/ToDoEmpty';


const TodoContainer = () => {
    const {
        error,
        loading,
        searchedToDo,
        completeToDo,
        deleteToDo,
        // totalToDOs,
        openModal
    } = useContext(todoContext);

    return (
        <>
            <div className='container'>

                <ToDoCounter />
                <ToDoList>
                    <ToDoSearch />
                    {error && <p>Se genero un error</p>}
                    {loading && 
                        Array.from({ length: 4 }).map((index) => (
                            <ToDoLoader key={index} />
                          ))
                        }

                    {searchedToDo.map(todo => (
                        <ToDoItem
                            key={todo.text}
                            text={todo.text}
                            completed={todo.completed}
                            onComplete={() => { completeToDo(todo.text) }}
                            onDelete={() => { deleteToDo(todo.text) }}
                        />
                    ))}
                </ToDoList>
                {openModal && (
                <Modal>
                    <ToDoForm />
                </Modal>
                )}        
                <ToDoButton />
            </div>
        </>
    )
}

export { TodoContainer } 