export function Greeting({ title, married }) {
  // Props para reutilizar codigo
  const user = {
    firstname: title,
    age: 23,
    casado: married,
  };
  return (
    <>
      <h1>{user.firstname}</h1>
      <h3>{user.age}</h3>
      <h3>{user.casado.toString()}</h3>
    </>
  );
} // para booleanos .toString()

export function UserCard({ name, amount, married, points, address, greet }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>💰{amount}</p>
      <p>{married ? "Esta casado" : "No esta casado"} </p>
      <ul>
        <li>city: {address.city}</li>
        <li>street: {address.street}</li>
      </ul>

    </div>
  );
}
