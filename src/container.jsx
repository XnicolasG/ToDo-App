import React, { useContext } from 'react'
import { ToDoCounter } from './components/ToDoCounter';
import ToDoButton from './components/ToDoButton';
import ToDoSearch from './components/ToDoSearch';
import ToDoList from './components/ToDoList';
import ToDoItem from './components/ToDoItem';
import { todoContext } from './context/todoContext';

const TodoContainer = () => {
    const {
        error,
        loading,
        searchedToDo,
        completeToDo,
        deleteToDo
    } = useContext(todoContext);

    return (
        <>
            <div className='container'>

                <ToDoCounter />
                        <ToDoList>
                            <ToDoSearch />
                            {error && <p>Se genero un error</p>}
                            {loading && <p>Cargando...</p>}
                            {(!loading && !searchedToDo) && <p>crea tu primer To Do</p>}

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
                <ToDoButton />
            </div>
        </>
    )
}

export { TodoContainer } 