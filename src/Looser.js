import React from "react";
import { Link } from "react-router-dom";

const Looser = () => {
  return (
    <div>
      Malheuresement ! Vous venez de tomber à cours de tentatives.
      <br />
      Pour revenir au Menu des niveaux,
      <Link to="/">
        <button>Cliquez Ici</button>
      </Link>
    </div>
  );
};

export default Looser;
