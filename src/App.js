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

  const toReload = () => {
    window.location.reload();
  };

  const onValidated = (props) => {
    console.log("début de la fonction onValidated");
    let wordHasBeenModified = false;
    let letterAlreadyUsed = false;
    const newWord = word.map((letterObject) => {
      if (userLetter === letterObject.letter) {
        if (letterObject.display === true) {
          console.log("possibilité 2 : lettre identique mais alreadyUsed");
          letterAlreadyUsed = true;
          return letterObject;
        }

        wordHasBeenModified = true;
        console.log("possibilité 1 : lettre identique et modifiée");
        return {
          letter: letterObject.letter,
          display: true,
        };
      }
      console.log(
        "possibilité 3 : lettre différente de celle de l'utilisateur"
      );

      return letterObject;
    });

    console.log("newWord = ", newWord);
    setWord(newWord);
    if (wordHasBeenModified === false || letterAlreadyUsed === true) {
      const newNumber = number - 1;
      setNumber(newNumber);
    }
  };

  return (
    <div>
      Tentatives restante : {number}
      <br></br>
      {word.map((letterObject) => {
        if (letterObject.display) {
          return <div>{letterObject.letter}</div>;
        } else {
          return <div>_</div>;
        }
      })}
      <br></br>
      <TextField
        label="Saisie :"
        onChange={handleChangeLetter}
        placeholder="Entrez une Lettre"
        value={userLetter}
      />
      <button onClick={onValidated}>Valider</button>
      <button onClick={toReload}>Recommencer</button>
    </div>
  );
};

export default App;
