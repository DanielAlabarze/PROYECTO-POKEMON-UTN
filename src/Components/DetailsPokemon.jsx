import "./DetailsPokemon.css";

export const DetailsPokemon = ({ pokemon, close }) => {
  if (!pokemon) {
    return null;
  }

  return (
    <div className="modalContainer" onClick={close}>
      <section className="modalBody">
        <div className="imageContainer">
          <img
            src={pokemon.imagen}
            alt={pokemon.nombre}
            className="imageDetails"
          />
          <section>
            {pokemon.types?.map((type, index) => (
              <span className="type" key={index}>
                {type}
              </span>
            ))}
          </section>
        </div>
        <div className="dataContainer">
          <h3 className="number">N°: {pokemon.id}</h3>
          <h2 className="title">{pokemon.nombre}</h2>

          <div className="abilitiesSection">
            <h3 className="titleSection">Habilidades</h3>
            {pokemon.abilities?.map((ability, index) => (
              <span key={index} className="titleSectionSpan">
                {ability}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
