import React from "react";
import { Link } from "react-router-dom";

const Winner = () => {
  return (
    <div>
      Felicitation ! Vous venez de terminer le niveau !<br />
      Pour revenir au Menu des niveaux,
      <Link to="/">
        <button>Cliquez Ici</button>
      </Link>
    </div>
  );
};

export default Winner;
