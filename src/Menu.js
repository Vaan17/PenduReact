import React, { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import TextField from "@material-ui/core/TextField";

const Menu = (props) => {
  const history = useHistory();
  const [gameWord, setGameWord] = useState("");

  const handleChangeLetter = (event) => {
    setGameWord(event.target.value);
  };

  const gameStarting = (currentDifficulty) => {
    let tempWord = [];
    for (let letterSelected of Array.from(gameWord.toUpperCase())) {
      const newLetter = {
        letter: letterSelected,
        display: false,
      };

      tempWord = tempWord.concat([newLetter]);
    }
    if (currentDifficulty === "Easy") {
      tempWord[0].display = true;
      tempWord[tempWord.length - 1].display = true;
    }
    props.setInitialWord(tempWord);
    history.push("/InGame");
  };

  const difficultyEasy = () => {
    props.setDifficulty("Easy");
    gameStarting("Easy");
  };

  const difficultyHard = () => {
    props.setDifficulty("Hard");
    gameStarting("Hard");
  };

  return (
    <div>
      <TextField
        label="Choisissez un mot :"
        onChange={handleChangeLetter}
        placeholder="Entrez un mot"
        value={gameWord.toUpperCase()}
      />
      <br></br>
      Selectionnez le niveau de difficulté
      <button onClick={difficultyEasy}>Facile</button>
      <button onClick={difficultyHard}>Difficile</button>
    </div>
  );
};

export default Menu;
