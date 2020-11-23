import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

const InGameHard = (props) => {
  const initialWord = [
    {
      letter: "M",
      display: false,
    },
    {
      letter: "O",
      display: false,
    },
    {
      letter: "U",
      display: false,
    },
    {
      letter: "S",
      display: false,
    },
    {
      letter: "T",
      display: false,
    },
    {
      letter: "A",
      display: false,
    },
    {
      letter: "C",
      display: false,
    },
    {
      letter: "H",
      display: false,
    },
    {
      letter: "E",
      display: false,
    },
  ];

  const [word, setWord] = useState(initialWord);
  const [number, setNumber] = useState(11);
  const [count, setCount] = useState(0);
  const [userLetter, setUserLetter] = useState("");
  const [displayMyButton, setDisplayMyButton] = useState(true);

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
    let letterFinded = false;
    if (userLetter.length < 1 || userLetter.length > 1) {
      toast.warn("Attention ! Veuillez saisir qu'une seule lettre !");
    } else {
      const newWord = word.map((letterObject) => {
        if (userLetter === letterObject.letter) {
          if (letterObject.display === true) {
            console.log("possibilité 2 : lettre identique mais alreadyUsed");
            letterAlreadyUsed = true;
            return letterObject;
          }

          wordHasBeenModified = true;
          console.log("possibilité 1 : lettre identique et modifiée");
          letterFinded = true;
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
      if (letterFinded === true) {
        const newCount = count + 1;
        setCount(newCount);
      }
      if (number === 1) {
        history.push("/Looser");
        window.location.reload();
      }
      if (count === 8) {
        history.push("/Winner");
        window.location.reload();
      }
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
      {displayMyButton === true && (
        <button onClick={onValidated}>Valider</button>
      )}
      {displayMyButton === false && (
        <button onClick={toReload}>Recommencer</button>
      )}
      <ToastContainer />
    </div>
  );
};

export default InGameHard;
