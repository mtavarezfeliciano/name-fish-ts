import "./styles/final-score.css";
import { FinalScore } from "../../types";

export const FunctionalFinalScore = ({ totalCount, correctCount }: FinalScore) => (
  <div id="final-score">
    <h1>Your Final Score Was</h1>
    <div id="score">
      <p>{correctCount}</p>
      <hr />
      <p>{totalCount}</p>
    </div>
  </div>
);
