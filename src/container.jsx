import React from 'react'
import { ToDoCounter } from './components/ToDoCounter';
import ToDoButton from './components/ToDoButton';
import ToDoSearch from './components/ToDoSearch';
import ToDoList from './components/ToDoList';
import ToDoItem from './components/ToDoItem';
import { todoContext } from './context/todoContext';

const TodoContainer = () => {
    return (
        <>
            <div className='container'>

                <ToDoCounter /> 

                <todoContext.Consumer> 
                    {({
                        error,
                        loading,
                        searchedToDo,
                        completeToDo,
                        deleteToDo
                    }) => (
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
                    )}
                </todoContext.Consumer>
                <ToDoButton />
            </div>
        </>
    )
}

export {TodoContainer} 