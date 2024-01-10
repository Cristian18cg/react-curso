import React from "react";
import ReactDOM from "react-dom/client";
//import { Greeting, UserCard } from "./Greeting";
//import { Button } from "./Button";
import { TaskCard } from "./Task";
import { Saludar } from "./Saludar";
import { Posts } from "./Posts";
//import Product, { Navbar } from "./Product";

//FORMA 1
/*const rootElement = document.getElementById('root') llamamos el div de root de el index.html y guardamos en una constante
ReactDOM.createRoot(rootElement) elemento raiz de react*/
//FORMA 2

const root = ReactDOM.createRoot(document.getElementById("root")); //elemento raiz de react
/*
function Greeting() {
  const nombre = "Cristian Garcia";
  const casado = false;
  return (
    <div>
      <h1>Hola {nombre}</h1>
      <h2>Cristian tu {casado ? "estas casado" : "no estas casado"}</h2>
    </div>
  );
}*/


const handleChange = (e) => {
  console.log(e.target.value);
};


root.render(
  <>
    {/* <UserCard
      name="Cristian Garcia"
      amount={3000}
      married={true}
      points={[99, 33.3, 84.2]}
      address={{ street: "123 main", city: "New York " }}
      greet={function (){alert("HOlA");}}
    />
    <UserCard
      name="Sara"
      amount={2000}
      married={true}
      points={[84.2,100]}
      address={{ street: "124 main", city: "New York C " }}
      greet={function (){alert("HOlA");}}
    /> 
    <TaskCard ready={true} />
    <Saludar />

   <input onChange={handleChange}/> */}
    {/* <form
      onSubmit={(e) => {
        e.preventDefault(); // manejador de enventos 
        console.log("enviado");
      }}
    >
      <h1>titulo</h1>
      <button>click</button>
    </form> */}

    <Posts/>
  </>
); //renderiza la etiqueta





//FOR EN REACT 

const users = [
  {
    id: 1,
    name: "Ryan Ray",
    image: "https://robohash.org/user2",
  },
  {
    id: 2,
    name: "jose",
    image: "https://robohash.org/jose",
  },
  {
    id: 3,
    name: "marcos",
    image: "https://robohash.org/marcos",
  },
];
root.render(
  <>
    {users.map((user, i) => {
      return <div key={i}>
        <h1 >{user.name}</h1>
        <img  src={user.image}/>
      </div>
    })}
  </>
);







function Counter() {
  const [counter, setCounter] = useState(99);

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Sumar
      </button>

      <button
        onClick={() => {
          setCounter(counter - 1);
        }}
      >
        Restar
      </button>  
      <button
        onClick={() => {
          setCounter(counter);
        }}
      >
        Restart
      </button>  

    </div>
  );
}
root.render(
  <>
    {" "}
    <Counter />
  </>
);


// useState 
function Counter() {
  const [mensaje, setMensaje] = useState('');

  return (
    <div>
      <input onChange={e => setMensaje (e.target.value)}/>
      <button onClick={()=> alert(mensaje)}>
        Save
      </button>
      
    </div>
  );
}
root.render(
  <>
    {" "}
    <Counter />
  </>
);
