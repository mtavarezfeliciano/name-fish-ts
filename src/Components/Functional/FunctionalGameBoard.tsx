import "./styles/game-board.css";
import { GameBoard } from "../../types";
import { ChangeEvent, useState, FormEvent } from "react";

export function FunctionalGameBoard({ checkAnswer, fishInfo }: GameBoard) {
  const [answer, setAnswer] = useState("");

  const formSubmission = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    checkAnswer(answer.toLowerCase());
    setAnswer("");
  };

  const formChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAnswer(e.target.value);
  };

  return (
    <div id="game-board">
      <div id="fish-container">
        <img src={fishInfo.url} alt={fishInfo.name} />
      </div>
      <form id="fish-guess-form" onSubmit={formSubmission}>
        <label htmlFor="fish-guess">What kind of fish is this?</label>
        <input
          type="text"
          name="fish-guess"
          value={answer}
          onChange={formChange}
        />
        <input type="submit" />
      </form>
    </div>
  );
}
