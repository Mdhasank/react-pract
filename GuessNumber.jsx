import React, { useState } from "react";

function GuessNumber() {
  const [targetNumber, setTargetNumber] = useState(() => Math.floor(Math.random() * 100) + 1);
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');
  const [guessCount, setGuessCount] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [difficulty, setDifficulty] = useState("easy");

  const resetGame = () => {
    setTargetNumber(Math.floor(Math.random() * 100) + 1);
    setGuess('');
    setMessage('');
    setGuessCount(0);
    setGameOver(false);
  };

  const handleGuess = (e) => {
    e.preventDefault();
    if (gameOver) return;

    const numGuess = parseInt(guess);

    if (isNaN(numGuess)) {
      setMessage("❌ Invalid input. Please enter a number between 1 and 100.");
      return;
    }

    if (numGuess < 1 || numGuess > 100) {
      setMessage("⚠️ Number out of range. Try between 1 and 100.");
      return;
    }

    const newGuessCount = guessCount + 1;
    setGuessCount(newGuessCount);

    if (numGuess === targetNumber) {
      setMessage(`🎉 Correct! You guessed it in ${newGuessCount} tries!`);
      setGameOver(true);
    } else if (difficulty === "hard" && newGuessCount >= 5) {
      setMessage(`❌ You lost! The number was ${targetNumber}.`);
      setGameOver(true);
    } else {
      setMessage(numGuess < targetNumber ? "📉 Too low!" : "📈 Too high!");
    }
  };

  return (
    <div style={{
      fontFamily: 'sans-serif',
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginTop: "50px",
      padding: "20px",
      borderRadius: "10px",
      backgroundColor: "#f9f9f9",
      boxShadow: "0 0 10px rgba(0,0,0,0.1)",
      width: "90%",
      maxWidth: "400px",
      margin: "50px auto"
    }}>
      <h2 style={{ marginBottom: "20px" }}>🎯 Guess the Number</h2>

      <label style={{ marginBottom: "15px", fontSize: "14px" }}>
        Difficulty:{" "}
        <select
          value={difficulty}
          onChange={(e) => {
            setDifficulty(e.target.value);
            resetGame(); 
          }}
          
          style={{ padding: "5px", borderRadius: "4px" }}
        >
          <option value="easy">Easy (∞ tries)</option>
          <option value="hard">Hard (5 tries)</option>
        </select>
      </label>

      <form onSubmit={handleGuess} style={{ width: "100%", textAlign: "center" }}>
        <input
          placeholder="Enter a number (1-100)"
          style={{
            width: "100%",
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            fontSize: "16px"
          }}
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
          disabled={gameOver}
        />
      </form>

      <p style={{ marginTop: "15px", fontWeight: "bold", minHeight: "24px", color: "#333" }}>{message}</p>
      <p style={{ margin: "5px 0", fontSize: "14px", color: "#555" }}>
        Guesses: {guessCount}{difficulty === "hard" && " / 5"}
      </p>

      <button
        onClick={resetGame}
        style={{
          marginTop: "15px",
          padding: "8px 16px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer"
        }}
      >
        🔁 Reset
      </button>
    </div>
  );
}

export default GuessNumber;
