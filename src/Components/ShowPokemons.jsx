import './ShowPokemons.css'
import { GetData } from './GetData'
import InfiniteScroll from 'react-infinite-scroll-component'
import { Loader } from './Loader'
import { DetailsPokemon } from './DetailsPokemon'
import { useState } from 'react'

function Pokemon({ id, nombre, imagen, seePokemon }) {
  return (
    <div className='pokeCard' onClick={seePokemon}>
      <img src={imagen} alt={nombre} className='pokeImage' />
      <p className='pokeTitle'>
        <span>N° {id}</span>
        <span>{nombre}</span>
      </p>
    </div>
  )
}

export const ShowPokemons = () => {
  const { pokemon, loadMorePokemons, hasMore } = GetData();
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  const handlePokemonClick = (pokemon) => {
    setSelectedPokemon(pokemon);
  };

  const handleCloseDetails = () => {
    setSelectedPokemon(null);
  };

  return (
    <>
      <InfiniteScroll
        dataLength={pokemon.length}
        next={loadMorePokemons}
        hasMore={hasMore}
        loader={<Loader />}
        endMessage={<div style={{width:"100%", textAlign:"center"}}><h3>-- No hay más pokémons --</h3></div>}
        className='pokeContainer'
      >
        {pokemon.map(pokemon => (
          <Pokemon key={pokemon.id} {...pokemon} seePokemon={() => handlePokemonClick(pokemon)} />
        ))}
      </InfiniteScroll>
      {selectedPokemon && <DetailsPokemon pokemon={selectedPokemon} close={handleCloseDetails} />}
    </>
  );
};
