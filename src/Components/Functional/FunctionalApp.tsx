import { FunctionalGameBoard } from "./FunctionalGameBoard";
import { FunctionalScoreBoard } from "./FunctionalScoreBoard";
import { FunctionalFinalScore } from "./FunctionalFinalScore";
import { useEffect, useState } from "react";
import { initialFishes } from "../../fishData";

export function FunctionalApp() {
  const [correctCount, setCorrectCount] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);
  const [gameCompleted, setGameCompleted] = useState(false);

  const questionCount = correctCount + incorrectCount;
  const currentFish = initialFishes[questionCount];
  const questionsRemaining = initialFishes
    .map((fish) => fish.name)
    .slice(questionCount);

  const checkAnswer = (fishName: string) => {
    fishName === currentFish.name
      ? setCorrectCount(correctCount + 1)
      : setIncorrectCount(incorrectCount + 1);
  };

  useEffect(() => {
    if (questionCount === 4 ) {
      setGameCompleted(true);
    }
  }, [questionCount]);

  return (
    <>
      <FunctionalScoreBoard incorrectCount={incorrectCount} correctCount={correctCount} answersLeft={questionsRemaining}
      />
      {questionCount !== 4 && (<FunctionalGameBoard fishInfo={currentFish} checkAnswer={checkAnswer} />) }
      {questionCount === 4 && (<FunctionalFinalScore totalCount={questionCount} correctCount={correctCount} />) }
    </>
  );
}
