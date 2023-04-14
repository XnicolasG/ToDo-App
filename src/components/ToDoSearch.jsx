import React, {useState} from 'react'
import '../styles/App.css'

export default function ToDoSearch() {
const [search, setSearch] = useState('');

 const OnSearch = (e) =>{
  setSearch(e.target.value);
  }
  return (
    <>
    <div className='contSearch'>
      <input className='search' 
      placeholder="Buscar tarea"
      value={search}
      onChange={OnSearch} />
    </div>
    <p>
      {search}
    </p>
      </>
  );
}
