import { FunctionalGameBoard } from "./FunctionalGameBoard";
import { FunctionalScoreBoard } from "./FunctionalScoreBoard";
import { FunctionalFinalScore } from "./FunctionalFinalScore";
import { useState } from "react";
import { initialFishes } from "../../fishData";

export function FunctionalApp() {
  const [correctCount, setCorrectCount] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);
  const questionCount = correctCount + incorrectCount;
  const currentFish = initialFishes[questionCount];
  const questionsRemaining = initialFishes
    .map((fish) => fish.name)
    .slice(questionCount);
  const gameCompleted = questionCount >= initialFishes.length;

  const checkAnswer = (fishName: string) => {
    fishName === currentFish.name
      ? setCorrectCount(correctCount + 1)
      : setIncorrectCount(incorrectCount + 1);
  };


  return (
    <>
      {!gameCompleted && (
        <>
          <FunctionalScoreBoard incorrectCount={incorrectCount} correctCount={correctCount} answersLeft={questionsRemaining} />
          <FunctionalGameBoard fishInfo={currentFish} checkAnswer={checkAnswer} /> 
          </> ) }
      {gameCompleted && (<FunctionalFinalScore totalCount={questionCount} correctCount={correctCount} />) }
    </>
  );
}
