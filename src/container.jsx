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
import ToDoEmpty from './components/ToDoEmpty';
import ToDoHeader from './components/ToDoHeader';


const TodoContainer = () => {
    const {
        error,
        loading,
        searchedToDo,
        completeToDo,
        deleteToDo,
        totalToDOs,
        openModal,
        completedToDos,
        search,
        setSearch
    } = useContext(todoContext);

    return (
        <>
            <div className='container'>
                <ToDoHeader>
                    <ToDoCounter
                        totalToDOs={totalToDOs}
                        completedToDos={completedToDos}
                    />
                </ToDoHeader>
                <ToDoList>
                    <ToDoSearch
                        search={search}
                        setSearch={setSearch}
                    />
                    {error && <p>Se genero un error</p>}
                    {loading &&
                        Array.from({ length: 4 }).map((index) => (
                            <ToDoLoader key={index} />
                        ))
                    }
                    {(!loading && totalToDOs === 0) && <ToDoEmpty />}
                    {searchedToDo.map(todo => ( //iterar en cada elemento que este en searchedToDo y renderizarlos en forma de componente ToDoItem
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