import axios from "axios";
import { Link } from "react-router-dom";
import { IoSearchSharp } from "react-icons/io5";
import { FaArrowAltCircleDown } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Loader } from "../Components/Loader";

export default function Tipo() {
  const [pokeList, setPokeList] = useState([]);
  const [pokemonDetails, setPokemonDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const params = useParams();

  useEffect(() => {
    setLoading(true);
    axios(`https://pokeapi.co/api/v2/type/${params.tipo}/`).then((res) => {
      setPokeList(res.data.pokemon);
      setLoading(false);
    });
  }, [params.tipo]);

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      const details = {};
      for (const pokemon of pokeList) {
        setLoading(true);
        try {
          const res = await axios(pokemon.pokemon.url);
          details[pokemon.pokemon.name] = res.data;
        } catch (error) {
          console.error(`Error ${pokemon.pokemon.name}:`, error);
          details[pokemon.pokemon.name] = { sprites: { front_default: null } };
        } finally {
          setLoading(false);
        }
      }
      setPokemonDetails(details);
    };

    if (pokeList.length > 0) {
      fetchPokemonDetails();
    } else {
      setPokemonDetails({});
    }
  }, [pokeList]);

  return (
    <div className="containerTipo">
      <h2>
        Pokémons de Tipo <span className="spanTipo">{params.tipo}</span>
      </h2>
      <span>- Encontrá sus habilidades en el Buscador -</span>
      <br />
      <FaArrowAltCircleDown size={"1.5rem"} color={"red"} />
      <Link to={"/Pages/SearchPage"}>
        <button className="btnSearchTipo">
          <IoSearchSharp size={"1.5rem"} />
          Buscador
        </button>
      </Link>
      <div className="div2">
        {pokeList.length > 0 ? (
          pokeList.map((poke) => {
            const pokemonDetail = pokemonDetails[poke.pokemon.name];
            const imageUrl = pokemonDetail?.sprites?.front_default;
            const imageLoading = !imageUrl && loading;

            return (
              <li key={poke.pokemon.name} className="DivTipos2">
                <div className="containerImage">
                  {imageUrl && (
                    <img
                      src={imageUrl}
                      alt={poke.pokemon.name}
                      className="poke-imagen"
                    />
                  )}
                </div>

                <div className="contenedorTitulo">
                  {!imageUrl && !imageLoading && (
                    <p>- Imagen no disponible -</p>
                  )}
                  {imageLoading ? <Loader /> : poke.pokemon.name}
                </div>
              </li>
            );
          })
        ) : (
          <h1>- No hay datos para mostrarte -</h1>
        )}
      </div>
    </div>
  );
}
