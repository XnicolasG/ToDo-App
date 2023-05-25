import {useState } from 'react'
import { useLocalStorage } from './useLocalStorage'

/* createContext() crear 'un estado' que contiene dos elmentos. 
uno en el que cargamos informacion y otro en el que la entregamos*/

// const todoContext /*{provider , consumer}*/ = createContext();

function useTodos(props) {
    const { item, saveItem, loading, error } = useLocalStorage('TODOS_V1', []);

    const [openModal, setOpenModal] = useState(false);
    const [search, setSearch] = useState('');

    // al utilizar ! se niega (false), al utilizar !! se niega la negación (true)
    // contar cuantos ToDos han sido completados
    const completedToDos = item.filter(todo => !!todo.completed).length;
    const totalToDOs = item.length

    let searchedToDo = [];

    // si search NO es mayor a 1 generara funcion para filtrar y mostrar en especifico una tarea
    if (!search.length >= 1) {
        // mostrara todos los todo guardados en estado item
        searchedToDo = item
    } else {
        searchedToDo = item.filter(todo => {
            // pasar string la lista de ToDos a minuscula
            const todoText = todo.text.toLowerCase();
            // pasar a minuscula el string en el input de busqueda
            const searchText = search.toLowerCase();
            // devolver el valor DENTRO del array de Todos que incluya alguna coincidencia con la busqueda 
            return todoText.includes(searchText)
        })
    }


    const addToDo = (text)=>{
        const newToDo = [...item]
        newToDo.push({
            completed: false,
            text,
        })
        saveItem(newToDo);
    }


    // Marcar como completado un item
    const completeToDo = (text) => {
        // buscar el index en array todo, iterado uno a uno hasta que coincida con parametro text
        const toDoIndex = item.findIndex(todo => todo.text === text);

        // Clonación de array todos, sin modificar nada
        const newToDo = [...item]

        // Si este item es diferente a True, entonces se asignara true
        if (!newToDo[toDoIndex].completed === true) {
            // Actualizando nuevo array con elemento con atributo completed true y no false
            newToDo[toDoIndex].completed = true;

            // acutualizar estado
            saveItem(newToDo);
            // si es true, si asignara False
        } else {
            newToDo[toDoIndex].completed = false;
            saveItem(newToDo);
        }
    }

    const deleteToDo = (text) => {
        const toDoIndex = item.findIndex(todo => todo.text === text);
        const newToDo = [...item];
        newToDo.splice(toDoIndex, 1)
        saveItem(newToDo);
    }
    return ({
            loading,
            error,
            search,
            setSearch,
            completedToDos,
            totalToDOs,
            searchedToDo,
            completeToDo,
            deleteToDo,
            openModal,
            setOpenModal,
            addToDo
        })
}
export { useTodos };