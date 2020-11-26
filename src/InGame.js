import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useHistory } from "react-router-dom";
import steps from "./steps";

const InGame = (props) => {
  const [allUsedLetters, setAllUsedLetters] = useState([]);

  const history = useHistory();

  const [word, setWord] = useState(props.initialWord);
  const [number, setNumber] = useState(11);
  const [count, setCount] = useState(0);
  const [userLetter, setUserLetter] = useState("");

  const handleChangeLetter = (event) => {
    setUserLetter(event.target.value);
  };

  const onValidated = () => {
    console.log("début de la fonction onValidated");
    let wordHasBeenModified = false;
    let letterAlreadyUsed = false;
    let letterFinded = false;

    if (userLetter.length < 1 || userLetter.length > 1) {
      toast.warn("Attention ! Veuillez saisir qu'une seule lettre !");
    } else if (allUsedLetters.includes(userLetter.toUpperCase())) {
      toast.error("Vous avez déja saisie cette lettre !");
    } else {
      const newAllLetters = allUsedLetters.concat([userLetter.toUpperCase()]);
      setAllUsedLetters(newAllLetters);

      const newWord = word.map((letterObject) => {
        if (userLetter.toUpperCase() === letterObject.letter) {
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
      setUserLetter("");

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
      }
      // debugger;
      // for (let letters of props.initialWord) {
      //   if (letters.display === true) {
      //     setCount(count + 1);
      //   }
      // }
      // if (count === word.length) {
      //   history.push("/Winner");
      // } else {
      //   setCount(0);
      // }
    }
  };

  return (
    <div>
      Difficulté choisie : {props.difficulty}
      <br></br>
      Tentatives restante : {number}
      <img src={steps[number]} alt="wrong" />
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
        value={userLetter.toUpperCase()}
      />
      <button onClick={onValidated}>Valider</button>
      <br />
      Lettre déja saisie : {allUsedLetters}
      <ToastContainer />
    </div>
  );
};

export default InGame;
