import React from "react";
import {useState} from "react";


function Formulario({ agregarTarea }) {
    const [value, setState] = useState("");
  
    const Submit = (e) => {
      e.preventDefault();
      if (!value) return;
      agregarTarea(value);
      setState("");
    };
  
    return (
      <form onSubmit={Submit}>
        <input
          type="text"
          className="input"
          value={value}
          onChange={(e) => setState(e.target.value)}
        />
      </form>
    );
  }

  export default Formulario;