import React from "react";
import { useState, useEffect } from "react";
import DespliegeTarea from "./component/DespliegeTarea";
import Formulario from "./component/Formulario";

// Import css bootstrap and fontawesome
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

// Import JS bootstrap jquery and popper.js
import "bootstrap";
import "../styles/App.css";

function App() {
  const [state, setState] = useState([
    {
      label: "Tarea 1",
      done: false,
    },
  ]);

  useEffect(() => {
    getTareas();
  }, []);

  const getTareas = (index) => {
    fetch("https://assets.breatheco.de/apis/fake/todos/user/alesanchezr", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((respuesta) => respuesta.json())
      .then((data) => {
        setState(data);
      })

      .catch((error) => console.log(error));
  };

  const agregarTarea = (label) => {
    const newTarea = [...state, { label }];
    setState(newTarea);
  };

  const tareaOk = (index) => {
    const newTodos = [...state];
    newTodos[index].isCompleted = true;
    setState(newTodos);
  };

  const deleteTarea = (index) => {
    const newTarea = [...state];
    newTarea.splice(index, 1);
    setState(newTarea);
  };

  return (
    <div className="app">
      <div className="container listaCompleta">
        <Formulario agregarTarea={agregarTarea} getTareas={getTareas} />
        <br></br>
        {state.map((state, index) => (
          <DespliegeTarea
            key={index}
            index={index}
            state={state}
            tareaOk={tareaOk}
            deleteTarea={deleteTarea}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
