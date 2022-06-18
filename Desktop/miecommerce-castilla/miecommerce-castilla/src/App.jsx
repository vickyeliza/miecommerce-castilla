import ItemListContainer from "./Components/ItemListContainer";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting="Welcome to Mi Ecommerce" />
    </div>
  );
}

export default App;

//sedebe importar, tener una funcion y por ultimo exportar siempre
//el nombre de un componente debe siempre comenzar con mayuscula