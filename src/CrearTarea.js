import React, { useState } from "react";

export default function CrearTarea(props) {
  console.log(props);
  const [nuevaTarea, setNuevaTarea] = useState("");

  return (
    <div>
      <input
        type="text"
        value={nuevaTarea}
        onChange={(ev) => {
          setNuevaTarea(ev.target.value);
        }}
      />
      <button
        onClick={() => {
          props.agregar(nuevaTarea);
        }}
      >
        Agregar nueva tarea
      </button>
    </div>
  );
}
