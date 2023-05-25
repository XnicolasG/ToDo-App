import { useContext } from 'react';
import '../src/styles/App.css';
import './styles/App.css'
// import {TodoContainer} from './container'
import { ToDoCounter } from './components/ToDoCounter';
import ToDoButton from './components/ToDoButton';
import ToDoSearch from './components/ToDoSearch';
import ToDoList from './components/ToDoList';
import ToDoItem from './components/ToDoItem';
import { useTodos } from './Hooks/useTodos';
import { Modal } from './components/Modal';
import { ToDoForm } from './components/ToDoForm';
import ToDoLoader from './components/ToDoLoader';
import ToDoEmpty from './components/ToDoEmpty';
import ToDoHeader from './components/ToDoHeader';

function App() {
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
    setSearch,
    addToDo,
    setOpenModal
} = useTodos();
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
                        <ToDoForm 
                        addToDo={addToDo}
                        setOpenModal={setOpenModal}
                        />
                    </Modal>
                )}
                <ToDoButton 
                setOpenModal={setOpenModal}
                />
            </div>
    </>
  );
}

export default App; 

//--------- Ejemplo de composición de componentes
// function App() {
//   const [state, setState] = useState('Estado compartido');
//   return (
//     <>
//       <ToDoCounter />
      
//       <ToDoList>
//         <ToDoSearch />
//         <ToDoItem state={state} />
//       </ToDoList>
//     </>
//   );
// }

// function ToDoCounter() {
//   return (
//     <>
//       <p>ToDoCounter</p>
//     </>
//   );
// }

// function ToDoList({ children }) {
//   return (
//     <>
//       {children}
//     </>
//   );
// }
// function ToDoSearch() {
//   return (
//     <>
//       <p>ToDoSearch</p>
//     </>
//   );
// }
// function ToDoItem({state}) {
//   return (
//     <>
//       <p>ToDoItem: {state}</p>
//     </>
//   );
// }