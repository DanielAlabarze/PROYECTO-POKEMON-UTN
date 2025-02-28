import { BrowserRouter, Routes, Route } from "react-router-dom";
import Tipo from "./Components/Tipo";
import Tipos from "./Pages/Tipos";
import { SearchPage } from "./Pages/SearchPage";
import { HomePage } from "./Pages/HomePage";
import { PokemonPage } from "./Pages/PokemonPage";
import { Nav } from "./Components/Nav";
import Error from "./Pages/Error";
function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Pages/PokemonPage" element={<PokemonPage />} />
          <Route path="/Pages/Tipos" element={<Tipos />}>
            <Route path="/Pages/Tipos/:tipo" element={<Tipo />} />
          </Route>
          <Route path="/Pages/SearchPage" element={<SearchPage />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
