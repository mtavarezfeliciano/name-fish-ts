import { Component } from "react";
import { ClassScoreBoard } from "./ClassScoreBoard";
import { ClassGameBoard } from "./ClassGameBoard";
import { ClassFinalScore } from "./ClassFinalScore";
import { initialFishes } from "../../fishData";

export class ClassApp extends Component {
  state = {
    correctCount: 0,
    incorrectCount: 0,
  };

  checkAnswer = (fishName: string) => {
    const { correctCount, incorrectCount } = this.state;
    const currentFishIndex = correctCount + incorrectCount;

    const updateStateProperty = initialFishes[currentFishIndex].name === fishName
      ? 'correctCount'
      : 'incorrectCount';

    this.setState((curState: typeof this.state) => ({
      [updateStateProperty] : curState[updateStateProperty] + 1
    }));
  };

  render() {
    const { incorrectCount, correctCount } = this.state;

    const totalCount = initialFishes.length;
    const questionIndex = correctCount + incorrectCount;
    const answersLeft = initialFishes
      .map((fish) => fish.name)
      .slice(questionIndex);
    const gameOver = questionIndex >= totalCount;

    return (
      <>
        {!gameOver ? (
          <>
            <ClassScoreBoard
              incorrectCount={incorrectCount}
              correctCount={correctCount}
              answersLeft={answersLeft}
            />
            <ClassGameBoard
              fishInfo={initialFishes[questionIndex]}
              checkAnswer={this.checkAnswer}
            />
          </>
        ) : (
          <ClassFinalScore
            correctCount={correctCount}
            totalCount={totalCount}
          />
        )}
      </>
    );
  }
}
