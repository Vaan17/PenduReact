import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";

const App = (props) => {
  const initialWord = [
    {
      letter: "T",
      display: true,
    },
    {
      letter: "E",
      display: false,
    },
    {
      letter: "L",
      display: false,
    },
    {
      letter: "E",
      display: false,
    },
    {
      letter: "V",
      display: false,
    },
    {
      letter: "I",
      display: false,
    },
    {
      letter: "S",
      display: false,
    },
    {
      letter: "I",
      display: false,
    },
    {
      letter: "O",
      display: false,
    },
    {
      letter: "N",
      display: true,
    },
  ];

  const [word, setWord] = useState(initialWord);
  const [number, setNumber] = useState(11);
  const [userLetter, setUserLetter] = useState("");

  const handleChangeLetter = (event) => {
    setUserLetter(event.target.value);
  };

  const onValidated = (props) => {
    console.log("début de la fonction onValidated");
    const newWord = word.map((letterObject) => {
      if (letterObject.letter === userLetter) {
        return {
          letter: letterObject.letter,
          display: true,
        };
      }
      return letterObject;
    });
    console.log("newWord = ", newWord);
    setWord(newWord);
  };

  return (
    <div>
      Tentatives restante : {number}
      <TextField
        label="Saisie :"
        onChange={handleChangeLetter}
        placeholder="Entrez une Lettre"
        value={userLetter}
      />
      <button onClick={onValidated}>Valider</button>
    </div>
  );
};

export default App;
