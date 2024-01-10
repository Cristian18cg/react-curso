import { MdAcUnit } from "react-icons/md";


export const Posts = () => {
  return (
    <button
      onClick={() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
             .then(response => response.json())// se convierte a json 
             .then(data => console.log(data))// se muestran en consola los datos 
             .catch(error => console.error)
        console.log("Obteniendo datos...");
      }}>
        <MdAcUnit />
      Traer datos
    </button>
  );
};
