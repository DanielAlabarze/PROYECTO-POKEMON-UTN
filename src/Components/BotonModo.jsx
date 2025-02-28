

import { FaMoon, FaSun } from "react-icons/fa";
import "./BotonModo.css";

export const BotonModo = ({ cambiarTema, temaActual }) => {
  return (
    <div id='divModo' className={temaActual === 'dark' ? 'dark' : ''}>
      <button className='btnModo' onClick={cambiarTema}>
        {temaActual === 'dark' ? <FaSun size={"1.3rem"} /> : <FaMoon size={"1.2rem"} />}
      </button>
    </div>
  );
};