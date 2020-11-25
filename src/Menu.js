import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Menu = (props) => {
  const history = useHistory();

  const difficultyEasy = () => {
    props.setDifficulty("Easy");
    history.push("/InGame");
  };

  const difficultyHard = () => {
    props.setDifficulty("Hard");
    history.push("/InGame");
  };

  return (
    <div>
      Selectionnez le niveau de difficulté
      <button onClick={difficultyEasy}>Facile</button>
      <button onClick={difficultyHard}>Difficile</button>
    </div>
  );
};

export default Menu;
