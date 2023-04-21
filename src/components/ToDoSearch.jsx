import React from 'react'
import '../styles/App.css'

export default function ToDoSearch({ search, setSearch }) {

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
