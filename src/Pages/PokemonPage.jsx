import { ShowPokemons } from "../Components/ShowPokemons";

import "./PokemonPage.css";

export const PokemonPage = () => {
  return (
    <>
      <div className="containerPokemons">
        <ShowPokemons className="pokemons" />
      </div>
    </>
  );
};
