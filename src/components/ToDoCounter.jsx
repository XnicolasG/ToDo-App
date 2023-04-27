import React, { useContext } from "react";
import '../styles/App.css'
import { todoContext } from "../context/todoContext";

function ToDoCounter() {
    const {
        completedToDos,
        totalToDOs
    } = useContext(todoContext)
    return(
        <>
        <div className="counter">
        <h1 className="coounterTitler">To Do List</h1>
        <p>Has completado {completedToDos} de {totalToDOs}</p>
        </div>
        </>
    );
}
export {ToDoCounter};