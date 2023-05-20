// import { useState } from 'react';
import '../src/styles/App.css';
import './styles/App.css'
import { TodoProvider } from './context/todoContext';
import {TodoContainer} from './container'
// import { ToDoCounter } from './components/ToDoCounter';
// import ToDoSearch from './components/ToDoSearch';
// import ToDoList from './components/ToDoList';
// import ToDoItem from './components/ToDoItem';


function App() {
  return (
    <TodoProvider>
      < TodoContainer/>
    </TodoProvider>

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