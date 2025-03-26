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
            className="imageDetails"
            src={pokemon.imagen}
            alt={pokemon.nombre}
          />
          <section>
            <ul className="type-list">
              <p className="type">Tipo: </p>
              {pokemon.types.map((type) => (
                <li key={type}>
                  <span className="type">{type}</span>
                </li>
              ))}
            </ul>

            <p className="pokemon-habitat">
              <span className="value">Hábitat: {pokemon.habitat}</span>
            </p>

            <p className="pokemon-height">
              <span className="value"> Altura: {pokemon.altura} cm</span>
            </p>
            <p className="pokemon-weight">
              <span className="value">Peso: {pokemon.peso} Gramos</span>
            </p>
          </section>
        </div>
        <div className="dataContainer">
          <div className="dataContainerIdNombre">
            <p className="number">ID: {pokemon.id}</p>
            <h2 className="title">{pokemon.nombre}</h2>
          </div>
          <div className="containerDescription">
            <p className="titleSection">Descripción</p>
            <p className="valueDescription">{pokemon.description}</p>
          </div>

          <div className="abilitiesSection">
            <h4 className="titleSection">Habilidades</h4>
            <ul className="ability-list">
              {pokemon.abilities.map((ability) => (
                <li className="ability-item" key={ability}>
                  {ability}
                </li>
              ))}
            </ul>
          </div>

          <div className="stats">
            <div className="containerStats">
              <h4 className="titleSection ">Estadísticas</h4>
            </div>
            <div className="containerStatsUL">
              <ul className="stat-list">
                {pokemon.stats.map((stat) => (
                  <li className="stat-item" key={stat.name}>
                    <p className="stat-name">{stat.name}</p>{" "}
                    <p className="stat-base">{stat.base}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
