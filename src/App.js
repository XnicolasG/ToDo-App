import '../src/styles/App.css';
import { ToDoCounter } from './components/ToDoCounter';
import ToDoButton from './components/ToDoButton';
import ToDoSearch from './components/ToDoSearch';
import ToDoList from './components/ToDoList';
import ToDoItem from './components/ToDoItem';
import './styles/App.css'


const ToDos = [
  { text: 'estudiar', completed: false },
  { text: 'hacer almuerzo', completed: true },
  { text: 'pasear perro', completed: false }
]

function App() {
  return (
    <>
      <div className='container'>
        <ToDoCounter />
        <ToDoSearch />
        <ToDoList>
          {ToDos.map(todo => (
            <ToDoItem key={todo.text} text={todo.text} />
          ))}
        </ToDoList>
        <ToDoButton />
      </div>
    </>

  );
}

export default App;
