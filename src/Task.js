import "./Task.css";

export function TaskCard({ ready }) {
  /*  const cardStyles ={background :'#202020', color: '#fff', padding:'20px'} forma de estilos */

  return (
    <div className="card">
      <h1> Mi primer tarea</h1>
      {/*
       Forma 1 de estilizar
       <span style={ready ? { background:"green" } : { background: "red" }}> Forma 1 de estilizar 
       */}
      <span className={ready ? "bg_green" : "bg_red"}>
        {ready ? "Tarea realizada" : "Tarea pendiente"}
      </span>
    </div>
  );
}
