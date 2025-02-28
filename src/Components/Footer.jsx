import "./Footer.css";
import logo from "../assets/Logo-Pokemon.png";
export const Footer = () => {
  return (
 
      <footer className="footer">
        <div className="marquee">
          <div className="marquee__inner">
            <span>
              — Pokémon — Pokémon — Pokémon — Pokémon — Pokémon — Pokémon
            </span>
            <span>
              — Pokémon — Pokémon — Pokémon — Pokémon — Pokémon — Pokémon
            </span>
            <span>
              — Pokémon — Pokémon — Pokémon — Pokémon — Pokémon — Pokémon
            </span>
            <span>
              — Pokémon — Pokémon — Pokémon — Pokémon — Pokémon — Pokémon
            </span>
            <span>
              — Pokémon — Pokémon — Pokémon — Pokémon — Pokémon — Pokémon
            </span>
            <span>
              — Pokémon — Pokémon — Pokémon — Pokémon — Pokémon — Pokémon
            </span>
            <span>
              — Pokémon — Pokémon — Pokémon — Pokémon — Pokémon — Pokémon
            </span>
            <span>
              — Pokémon — Pokémon — Pokémon — Pokémon — Pokémon — Pokémon
            </span>
          </div>
        </div>
        <div className="containerFooter">
          <img src={logo} alt="Logo Pokémon" className="logoImage" />

          <p>
            <small className="">Copyright © Pokémon 2025</small>
          </p>

          <p>
            <small className="">
              Desarrollado por <span className=""><i>Daniel Alabarze</i></span>
            </small>
          </p>
        </div>
      </footer>
 
  );
};
