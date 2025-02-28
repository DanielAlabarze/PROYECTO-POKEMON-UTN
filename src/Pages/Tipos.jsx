import axios from "axios";
import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "./Tipos.css";

export default function Tipos() {
  const [tiposList, setTiposList] = useState([]);

  useEffect(() => {
    axios("https://pokeapi.co/api/v2/type/").then((res) =>
      setTiposList(res.data.results)
    );
  }, []);

  console.log()

  return (
    <div className="containerTipos">
      <h1>Tipos de Pokémons</h1>

      <div className="div1">
        {tiposList.map((tipo, index) => (
          <li key={index} className="DivTipos1">
            <Link to={tipo.name}>{tipo.name}</Link>
          </li>
        ))}
      </div>
      <Outlet />
    </div>
  );
}
