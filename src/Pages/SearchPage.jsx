import { useState } from "react";
import { Footer } from "../Components/Footer";
import { GetData } from "../Components/GetData";
import { DetailsPokemon } from "../Components/DetailsPokemon";
import { Search } from "../Components/Search";
import { Loader } from "../Components/Loader";
import "./SearchPage.css";

export const SearchPage = () => {
  const { searchPokemon, error } = GetData();
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();

    if (!searchTerm) return;

    setLoading(true);

    const pokemon = await searchPokemon(searchTerm);
    if (pokemon) {
      setSelectedPokemon(pokemon);
    } else {
      console.log("No se encontró el Pokémon");
    }
    setLoading(false);
  };

  const handleCloseDetails = () => {
    setSelectedPokemon(null);
    setSearchTerm("");
  };

  return (
    <>
      <div className="containerSearchPage">
        <Search
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          handleSearch={handleSearch}
        />
        <div className="containerLoaderError">
          {loading && <Loader />}
          {error && <p className="errorMessage">{error}</p>}
        </div>
      </div>
      {selectedPokemon && (
        <DetailsPokemon pokemon={selectedPokemon} close={handleCloseDetails} />
      )}

      <Footer />
    </>
  );
};
