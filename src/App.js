import React, { useState } from "react";
import "./styles.css";
import Tarea from "./Tarea";
import CrearTarea from "./CrearTarea";

export default function App() {
  let [tareas, setTareas] = useState(["Lavar", "Programar", "Poner Música"]);

  let agregarTarea = (miTarea) => {
    setTareas([...tareas, miTarea]);
  };

  return (
    <div className="App">
      <h1>To-do</h1>
      <ul>
        {tareas.map((item, i) => {
          return <Tarea key={i} laTarea={item} />;
        })}
      </ul>
      <CrearTarea agregar={agregarTarea} />
    </div>
  );
}
