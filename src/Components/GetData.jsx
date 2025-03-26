import { useEffect, useState } from "react";

const URL = "https://pokeapi.co/api/v2/pokemon?limit=50&offset=0";
const URLINFO = "https://pokeapi.co/api/v2/pokemon/";

export const GetData = () => {
  const [pokemon, setPokemon] = useState([]);
  const [nextUrl, setNextUrl] = useState("");
  const [hasMore, setHasMore] = useState(true);
  const [error, setError] = useState(null);

  const fetchPokemon = async (url) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const infoPokemon = await response.json();

      const speciesResponse = await fetch(infoPokemon.species.url);
      const speciesData = await speciesResponse.json();

      const spanishFlavorText = speciesData.flavor_text_entries.find(
        (entry) => entry.language.name === "es"
      );
      const description = spanishFlavorText
        ? spanishFlavorText.flavor_text
        : "Descripción no disponible";

      const habitat = speciesData.habitat
        ? speciesData.habitat.name
        : "No disponible";

      const abilities = infoPokemon.abilities.map((a) => a.ability.name);
      const stats = infoPokemon.stats.map((s) => ({
        name: s.stat.name,
        base: s.base_stat,
      }));
      const types = infoPokemon.types.map((t) => t.type.name);

      return {
        id: infoPokemon.id.toString().padStart(5, "0"),
        nombre: infoPokemon.name,
        imagen:
          infoPokemon.sprites.other.dream_world.front_default ||
          infoPokemon.sprites.front_default,
        abilities,
        stats,
        types,
        description,
        habitat,
        altura: infoPokemon.height,
        peso: infoPokemon.weight,
      };
    } catch (error) {
      console.error("Error Pokemon data:", error);
      setError(error.message);
      throw error;
    }
  };

  const getPokemons = async (url = URL) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error status: ${response.status}`);
      }
      const listPokemons = await response.json();
      const { next, results } = listPokemons;

      const newData = await Promise.all(
        results.map((pokemon) => fetchPokemon(pokemon.url))
      );

      return { next, newData };
    } catch (error) {
      console.error("Error:", error);
      setError(error.message);
      throw error;
    }
  };

  const loadPokemons = async () => {
    try {
      const { next, newData } = await getPokemons();
      setPokemon(newData);
      setNextUrl(next);
      setHasMore(!!next);
      setError(null);
    } catch (error) {
      console.error(error);
    }
  };

  const loadMorePokemons = async () => {
    try {
      if (nextUrl) {
        const { next, newData } = await getPokemons(nextUrl);
        setPokemon((prev) => [...prev, ...newData]);
        setNextUrl(next);
        setHasMore(!!next);
        setError(null);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const searchPokemon = async (searchTerm) => {
    try {
      const url = `${URLINFO}${searchTerm.toLocaleLowerCase()}`;
      const data = await fetchPokemon(url);
      setError(null);
      return data;
    } catch (error) {
      setError("No se encontró el Pokémon");
      return null;
    }
  };

  useEffect(() => {
    loadPokemons();
  }, []);

  return { pokemon, loadMorePokemons, hasMore, searchPokemon, error };
};
