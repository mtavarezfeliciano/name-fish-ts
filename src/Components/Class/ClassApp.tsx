import { Component } from "react";
import { ClassScoreBoard } from "./ClassScoreBoard";
import { ClassGameBoard } from "./ClassGameBoard";
import { ClassFinalScore } from "./ClassFinalScore";
import { initialFishes } from "../../fishData";


export class ClassApp extends Component {
  state = {
    answersLeft: initialFishes.map((fish) => fish.name),
    questionIndex: 0,
    correctCount: 0,
    incorrectCount: 0
  };

  checkAnswer = (fishName: string) => {

    const { answersLeft, correctCount, incorrectCount, questionIndex } = this.state;

    const isCorrect = initialFishes[questionIndex].name === fishName;

    this.setState({ 
      correctCount: correctCount + (isCorrect ? 1 : 0),
      incorrectCount: incorrectCount + (isCorrect ? 0 : 1),
      questionIndex: questionIndex + 1,
      answersLeft: answersLeft.slice(1),
     })
  };

  render() {
    const { answersLeft, incorrectCount, correctCount, questionIndex } = this.state;

    const totalCount = incorrectCount + correctCount;

    return (
      <>
        {totalCount < 4 ? (
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
