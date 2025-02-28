import { Link } from "react-router-dom";
import { IoSearchSharp } from "react-icons/io5";
import { Fecha } from "../Components/Fecha";
import { Footer } from "../Components/Footer";

import "./HomePage.css";

import logo from "../assets/Logo-Pokemon.png";

export const HomePage = () => {
  return (
    <>
      <div className="containerPokemons ">
        <div className="main-container">
          <Fecha />
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg"
            alt="pikachu"
            className="imagePikachu"
            style={{ height: "4rem", width: "auto" }}
          />
          <h1 className="main-title">¡ Bienvenido a la Página de Pokémon !</h1>
          <img className="pokemon-logo" src={logo} alt="Logo de Pokémon" />
          <Link to={"./Pages/SearchPage"}>
            <button className="btnSearchMain">
              <IoSearchSharp size={"1.5rem"} />
              Busca tu Pokémon
            </button>
          </Link>
          <p className="main-text">
            ¡ Explora el maravilloso mundo de los Pokémon y descubre sus
            habilidades y características !
          </p>
          <p className="main-text">
            Diviértete explorando los diferentes tipos de Pokémon.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};
