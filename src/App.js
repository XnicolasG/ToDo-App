import '../src/styles/App.css';
import './styles/App.css'
import { TodoProvider } from './context/todoContext';
import {TodoContainer} from './container'

// const defaultToDos = [
//   { text: 'Estudiar', completed: false },
//   { text: 'hacer almuerzo', completed: false },
//   { text: 'pasear perro', completed: false }
// ]



function App() {
  return (
    <TodoProvider>
      < TodoContainer/>
    </TodoProvider>

  );
}

export default App; 
