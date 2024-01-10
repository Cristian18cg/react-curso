import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { Posts } from "./Posts";

const root = ReactDOM.createRoot(document.getElementById("root")); //elemento raiz de react

function Counter() {
  const [mensaje, setMensaje] = useState("");
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("suma");
  }, [counter]); //se  ejecuta apenas se altera la pagina con el corchete cuadrado solo se ejecuta una vez

  return (
    <div>
      <input onChange={(e) => setMensaje(e.target.value)} />
      <button onClick={() => alert(mensaje)}>Save</button>
      <hr />

      <h1>Counter: {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>incrementar</button>
    </div>
  );
}
root.render(
  <>
    <Counter />


  </>
);
