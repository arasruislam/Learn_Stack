import { useState } from "react";

function Square({ value, onSquareClick }) {
  return (
    <button
      className="
        h-16 w-16 m-2 rounded-2xl
        border border-white/30
        bg-white/10
        shadow-lg shadow-black/40
        backdrop-blur-xl
        flex items-center justify-center
        text-2xl font-semibold text-white
        transition
        hover:bg-white/20 hover:-translate-y-0.5 hover:shadow-xl
        active:scale-95
      "
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}

function Board({ xIsNext, squares, onPlay }) {
  const winner = calculateWinner(squares);
  let status;

  if (winner) {
    status = `Winner: ${winner}`;
  } else {
    status = `Next Player: ${xIsNext ? "X" : "O"}`;
  }

  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }

    const nextSquare = squares.slice();
    if (xIsNext) {
      nextSquare[i] = "X";
    } else {
      nextSquare[i] = "O";
    }
    onPlay(nextSquare);
  }

  return (
    <div className="flex flex-col items-center gap-6">
      <div
        className="
          px-4 py-2 rounded-full
          bg-white/10 border border-white/20
          backdrop-blur-xl
          shadow-inner shadow-black/40
          text-sm font-medium text-slate-100
        "
      >
        {status}
      </div>

      <div
        className="
          p-4 rounded-3xl
          bg-white/10 border border-white/20
          backdrop-blur-2xl
          shadow-xl shadow-black/40
        "
      >
        <div className="flex justify-center">
          <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
          <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
          <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
        </div>
        <div className="flex justify-center">
          <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
          <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
          <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
        </div>
        <div className="flex justify-center">
          <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
          <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
          <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
        </div>
      </div>
    </div>
  );
}

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [xIsNext, setXIsNext] = useState(true);
  const [currentMove, setCurrentMove] = useState(0);

  const currentSquare = history[currentMove];

  function handlePlay(nextSquares) {
    setXIsNext(!xIsNext);
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function moveTo(move) {
    setCurrentMove(move);
    setXIsNext(move % 2 === 0);
  }

  const move = history.map((squares, move) => {
    let description;

    if (move > 0) {
      description = `Go to move #${move}`;
    } else {
      description = `Start a new game`;
    }

    return (
      <li key={move} className="mb-2">
        <button
          onClick={() => moveTo(move)}
          className="
            w-full text-left text-sm
            px-3 py-2 rounded-2xl
            bg-white/5 border border-white/10
            text-slate-100
            hover:bg-white/15 hover:border-white/30
            transition
          "
        >
          {description}
        </button>
      </li>
    );
  });

  return (
    <div
      className="
        min-h-screen w-full
        bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950
        flex items-center justify-center
        text-white
        px-4
      "
    >
      <div
        className="
          max-w-5xl w-full
          flex flex-col lg:flex-row
          items-center justify-center
          gap-10
        "
      >
        {/* Game Card */}
        <div
          className="
            w-full lg:w-2/3
            rounded-[2rem]
            bg-white/10
            border border-white/15
            backdrop-blur-3xl
            shadow-[0_20px_80px_rgba(0,0,0,0.6)]
            p-8 lg:p-10
            relative overflow-hidden
          "
        >
          {/* Glow accents */}
          <div className="pointer-events-none absolute -top-24 -left-24 h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-purple-500/20 blur-3xl" />

          <div className="relative">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1
                  className="
                  px-4 py-2 rounded-full
                  bg-black/30 border border-white/15
                  text-xs uppercase tracking-[0.2em] text-slate-200
                "
                >
                  Tic-Tac-Toe
                </h1>
              </div>
            </div>

            <Board
              xIsNext={xIsNext}
              squares={currentSquare}
              onPlay={handlePlay}
            />
          </div>
        </div>

        {/* History / Sidebar */}
        <div
          className="
            w-full lg:w-1/3
            rounded-3xl
            bg-white/5
            border border-white/10
            backdrop-blur-2xl
            shadow-lg shadow-black/40
            p-6
          "
        >
          <h2 className="text-lg font-medium mb-2">Game History</h2>
          <p className="text-xs text-slate-300 mb-4">
            Jump back to any move and explore different outcomes.
          </p>
          <ul className="max-h-72 overflow-y-auto pr-1 custom-scrollbar">
            {move}
          </ul>
        </div>
      </div>
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
