import React from "react";
import { Link } from "react-router-dom";
import step11 from "./Pictures/step11.png";

const Looser = () => {
  return (
    <div>
      <img src={step11} alt="loose" />
      <br />
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
