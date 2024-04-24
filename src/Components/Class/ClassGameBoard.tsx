import { Component, FormEvent, ChangeEvent } from "react";
import "./styles/game-board.css";
import { GameBoard } from "../../types";

export class ClassGameBoard extends Component<GameBoard> {
  state = {
    answer: "",
  };

  formSubmission = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.props.checkAnswer(this.state.answer.toLowerCase());
    this.setState({ answer: "" });
  };

  formChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ answer: e.target.value });
  };

  render() {
    const { fishInfo } = this.props;
    return (
      <div id="game-board">
        <div id="fish-container">
          <img src={fishInfo.url} alt={fishInfo.name} />
        </div>
        <form id="fish-guess-form" onSubmit={this.formSubmission}>
          <label htmlFor="fish-guess">What kind of fish is this?</label>
          <input
            type="text"
            name="fish-guess"
            value={this.state.answer}
            onChange={this.formChange}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}
