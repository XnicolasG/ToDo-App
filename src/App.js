import '../src/styles/App.css';
import { ToDoCounter } from './components/ToDoCounter';
import ToDoButton from './components/ToDoButton';
import ToDoSearch from './components/ToDoSearch';
import ToDoList from './components/ToDoList';
import ToDoItem from './components/ToDoItem';
import './styles/App.css'
import { useEffect, useState } from 'react';



const defaultToDos = [
  { text: 'Estudiar', completed: false },
  { text: 'hacer almuerzo', completed: false },
  { text: 'pasear perro', completed: false }
]

function useLocalStorage(itemName, InitValue) {
  const [error, setError] = useState(false);

  const [loading, setLoading] = useState(true);

  const [item, setItem] = useState(InitValue);
  
  useEffect(()=>{
    setTimeout(()=>{
      try {
        const localStorageItem = localStorage.getItem(itemName);
      let ParsedItem;
      
      
      if (!localStorageItem) {
        localStorage.setItem(itemName, JSON.stringify(InitValue));
        ParsedItem =[];
      }else{
        ParsedItem=JSON.parse(localStorageItem)
      }
      setItem(ParsedItem)
      setLoading(false)
      } catch (error) {
        setError(error)
      }
    }, 3000)
  });



  const saveItem =(newToDo)=>{
   try {
     // infomración que sera pasada a localStorage
     const toString = JSON.stringify(newToDo);
     localStorage.setItem(itemName, toString)
     // Información que DEBE ser actualizada en el estado
     setItem(newToDo)
   } catch (error) {
    setError(error)
   }
  };
return {
  item,
  saveItem,
  loading,
  error
}

}

function App() {
  const {item, saveItem, loading, error} = useLocalStorage('TODOS_V1', []);
  
  
  const [search, setSearch] = useState('');

  // al utilizar ! se niega (false), al utilizar !! se niega la negación (true)
  // contar cuantos ToDos han sido completados
  const completedToDos = item.filter(todo => !!todo.completed).length;
  const totalToDOs = item.length

  let searchedToDo =[];

  // si search NO es mayor a 1 genrara funcion para filtrar y mostrar en especifico una tarea
  if (!search.length >=1) {
    searchedToDo = item
  }else{
    searchedToDo = item.filter(todo =>{
      // pasar string la lista de ToDos a minuscula
      const todoText = todo.text.toLowerCase();
      // pasar a minuscula el string en el input de busqueda
      const searchText = search.toLowerCase();
      // devolver el valor DENTRO del array de Todos que incluya alguna coincidencia con la busqueda 
      return todoText.includes(searchText)
    })
  }



  // Marcar como completado un item
  const completeToDo =(text)=>{
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
    }else{
      newToDo[toDoIndex].completed = false;
      saveItem(newToDo);
    }
  }

  const deleteToDo = (text)=>{
    const toDoIndex = item.findIndex(todo => todo.text === text);
    const newToDo = [...item];
    newToDo.splice(toDoIndex, 1)
    saveItem(newToDo);

  }

  
  return (
    <>
      <div className='container'>
        <ToDoCounter
        total={totalToDOs}
        completed={completedToDos}
        />
        <ToDoList>


          <ToDoSearch
            search={search}
            setSearch={setSearch}
            />
            {error && <p>Se genero un error</p>}
            {loading && <p>Cargando...</p>}
            {(!loading && !searchedToDo) && <p>crea tu primer To Do</p>}
            
          {searchedToDo.map(todo => (
            <ToDoItem 
            key={todo.text} 
            text={todo.text} 
            completed={todo.completed}
            onComplete={()=>{completeToDo(todo.text)}}
            onDelete={()=>{deleteToDo(todo.text)}}
            />
          ))}
        </ToDoList>
        <ToDoButton />
      </div>
    </>

  );
}

export default App; 
