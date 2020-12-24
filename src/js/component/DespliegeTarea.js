import React from "react";

function DespliegeTarea({ state, index, tareaOk ,deleteTarea }) {
    return (
      <div className="container tarjeta" style={{ textDecoration: state.isCompleted ? "line-through" : "" }}>
        {state.label}
        <div>
        <button
            type="button"
            className="btn-ok"
            onClick={() => tareaOk(index)}
          >
            <span aria-hidden="true">&radic;</span>
          </button>
          ||
          <button
            type="button"
            className="btn-close btn-close-black"
            aria-label="Close"
            onClick={() => deleteTarea(index)}
          >
            <span aria-hidden="true">&times;</span>
          </button>
          
        </div>
      </div>
    );
  }

  export default DespliegeTarea;