import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div>
      Selectionnez le niveau de difficulté
      <Link to="/InGameEasy">
        <button>Facile</button>
      </Link>
      <Link to="/InGameHard">
        <button>Difficile</button>
      </Link>
    </div>
  );
};

export default Menu;
