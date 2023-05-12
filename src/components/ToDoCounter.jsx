import React, { useContext } from "react";
import '../styles/App.css'
import { todoContext } from "../context/todoContext";

function ToDoCounter() {
    const {
        completedToDos,
        totalToDOs
    } = useContext(todoContext)


    const date = new Date();
    const day = date.getDate();
    const dayType = {weekday: 'short'}
    const dayName = date.toLocaleDateString('es-Es', dayType);
    const monthType = {month: 'short'}
    const monthName = date.toLocaleDateString('es-Es', monthType);

    
    return(
        <>
        <div className='counter'>
            <main className="mainHeader">
        <h1 className="coounterTitler">To Do </h1>
            <p className="count">Has completado {completedToDos} de {totalToDOs}</p>
            
            </main>
        <aside className="aside">
            <section className="date">
            <p className="month">{monthName}</p>
            <h3 className="dayname">{dayName}</h3>
            <h3 className="day">{day}</h3>
            </section>
        </aside>

        </div>
        </>
    );
}
export {ToDoCounter};