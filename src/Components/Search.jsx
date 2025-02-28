import { IoSearchSharp } from "react-icons/io5";
import { FaArrowAltCircleDown } from "react-icons/fa";
import "./Search.css";

export const Search = ({ searchTerm, setSearchTerm, handleSearch }) => {
  return (
    <div className="containerSearch">
      <form className="containerSearching" onSubmit={handleSearch}>
        <label htmlFor="searchTerm" className="label">
          Encontrá tu Pokémon
        </label>
        <FaArrowAltCircleDown size={"3rem"} color={"red"} />
        <input
          type="text"
          placeholder="Busca tu pokemon por Nombre Completo o Número"
          className="inputSearch"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="btnSearch" type="submit">
          <IoSearchSharp size={"1.5rem"} />
          Buscar
        </button>
      </form>
    </div>
  );
};
