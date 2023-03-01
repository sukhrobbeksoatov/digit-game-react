import React, { useState } from "react";
import "./DigitGame.scss";

export default function Game() {
  const [randomNumber, setRandomNumber] = useState(randommer());
  const [enteredNumber, setEnteredNumber] = useState(0);
  let [text, setText] = useState("Son kiriting!");
  let [textClassName, setTextClassName] = useState("");
  const [score, setScore] = useState(0);
  let scoreNum = 0;

  function handleSubmit(evt) {
    evt.preventDefault();

    if (randomNumber === enteredNumber) {
      setText((text = "Yutdingiz"));
      setRandomNumber(randommer());
      setTextClassName((textClassName = "digit-game__text--success"));
      scoreNum++;
      setScore(score + scoreNum);
    }

    if (randomNumber > enteredNumber) {
      setText((text = "Kattaroq son kitiring!"));
      setTextClassName((textClassName = "digit-game__text--danger"));
    }

    if (randomNumber < enteredNumber) {
      setText((text = "Kichikroq son kitiring!"));
      setTextClassName((textClassName = "digit-game__text--danger"));
    }
  }

  function handleChange(evt) {
    setText((text = "Son kiriting!"));
    setEnteredNumber(+evt.target.value);
    setTextClassName((textClassName = ""));
  }

  return (
    <div className="digit-game">
      <h2 className="digit-game__title">Son o'yini</h2>
      <form className="digit-game__form" onSubmit={(evt) => handleSubmit(evt)}>
        <input
          className="digit-game__input"
          onChange={(evt) => handleChange(evt)}
          type="number"
          value={enteredNumber}
        />
        <button className="digit-game__btn" type="submit">
          Tahmin qilish
        </button>
      </form>
      <div className="digit-game__text-wrapper">
        <p className={`digit-game__text ${textClassName}`}>{text}</p>
        <p className="digit-game__text">Score: {score}</p>
      </div>
    </div>
  );
}

function randommer() {
  return Math.trunc(Math.random() * 100);
}
