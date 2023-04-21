import React from "react";
import '../styles/App.css'

function ToDoCounter({total, completed}) {
    return(
        <>
        <div className="counter">
        <h1 className="coounterTitler">To Do List</h1>
        <p>Has completado {completed} de {total}</p>
        </div>
        </>
    );
}
export {ToDoCounter};