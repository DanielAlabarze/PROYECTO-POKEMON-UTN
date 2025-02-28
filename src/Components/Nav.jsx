import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";
import { BotonModo } from "./BotonModo";
import { useState, useEffect } from "react";
import "./Nav.css";

export const Nav = () => {
  const [mostrarMenu, setMostrarMenu] = useState(false);
  const [tema, setTema] = useState(localStorage.getItem("tema") || "light");

  useEffect(() => {
    localStorage.setItem("tema", tema);
    document.body.classList.toggle("dark-theme", tema === "dark");
  }, [tema]);

  const handleToggleMenu = () => {
    setMostrarMenu(!mostrarMenu);
  };

  const cambiarTema = () => {
    setTema(tema === "light" ? "dark" : "light");
  };

  return (
    <header className="navBar">
      <div className="navLogo">
        <img
          src={"/logoPokemon.ico"}
          className="logo"
          alt="imagen logo Pokémon"
        />
      </div>

      <button
        className={`navToggle ${mostrarMenu && "open"}`}
        onClick={handleToggleMenu}
      >
        {mostrarMenu ? (
          <IoCloseOutline size={"2rem"} />
        ) : (
          <RxHamburgerMenu size={"2rem"} />
        )}
      </button>

      <nav
        className={`navItems ${mostrarMenu && "open"}`}
        onMouseLeave={() => setMostrarMenu(false)}
        id="navItems"
      >
        <ul className="menu-list">
          <li>
            <Link
              to={"/"}
              className="link"
              onClick={() => setMostrarMenu(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to={"./Pages/PokemonPage"}
              className="link"
              onClick={() => setMostrarMenu(false)}
            >
              Pokémons
            </Link>
          </li>
          <li>
            <Link
              to={"./Pages/Tipos"}
              className="link"
              onClick={() => setMostrarMenu(false)}
            >
              Tipos
            </Link>
          </li>
          <li>
            <Link
              to={"./Pages/SearchPage"}
              className="link"
              onClick={() => setMostrarMenu(false)}
            >
              Buscador
            </Link>
          </li>
          <li>
            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg"
              alt="pikachu"
              className="imagePikachuNav"
            />
          </li>
        </ul>
      </nav>

      <div className="BotonModo">
        <BotonModo cambiarTema={cambiarTema} temaActual={tema} />
      </div>
    </header>
  );
};
