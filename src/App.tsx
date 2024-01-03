import Board from "./components/Board";

function game() {
  return(
    <div className="game">
      <div className="game-board">
        <Board/>
      </div>
      <div className="game-info">
        <ol>{/**/}</ol>
      </div>
    </div>
  );
}

export default game;