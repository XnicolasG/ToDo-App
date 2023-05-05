import React, { useContext } from 'react'
import '../styles/App.css'
import { todoContext } from '../context/todoContext';

export default function ToDoSearch() {

  const {
    search,
    setSearch
  } = useContext(todoContext);

  const OnSearch = (event) => {
    console.log(event.target.value);
    setSearch(event.target.value);
  }
  return (
    <div className='contSearch'>
      <input className='search'
        placeholder="Buscar tarea"
        value={search}
        onChange={OnSearch} />
    </div>
  );
}

