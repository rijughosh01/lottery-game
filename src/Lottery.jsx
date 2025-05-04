import { useState } from "react";
import "./Lottery.css";
import { genTickte } from "./helper.js";
import Ticket from "./Ticket";
import Button from "./Button.jsx";
import Fireworks from "./Fireworks.jsx";
import PropTypes from "prop-types";
import Confetti from "react-confetti";

export default function Lottery({ n = 3, winCondition }) {
  const [currentTicket, setCurrentTicket] = useState(genTickte(n));
  const [winningHistory, setWinningHistory] = useState([]);
  const [isWinning, setIsWinning] = useState(false);
  const [tapCount, setTapCount] = useState(0);
  const [winCount, setWinCount] = useState(0);
  const [winningTicket, setWinningTicket] = useState(null);

  const buyTicket = () => {
    setTapCount(tapCount + 1);
    const newTicket = genTickte(n);
    setCurrentTicket(newTicket);
    if (winCondition(newTicket)) {
      setWinningHistory([...winningHistory, newTicket]);
      setWinCount(winCount + 1);
      setWinningTicket(newTicket);
      setIsWinning(true);
      setTimeout(() => {
        setIsWinning(false);
        setWinningTicket(null);
      }, 5000);
    }
  };

  return (
    <div className="lottery">
      <h3 className="gradient-text">Win the Game by Matching a SUM of 15!</h3>
      <h1>Lottery Game!</h1>
      {isWinning && (
        <>
          <Confetti />
          <h2>🎉 You won! 🎉</h2>
          <Fireworks />
          <div className="big-prize">
            🎉 Congratulations! You won 10,00,00,00,000$ 🎉
          </div>
          <h3>Winning Ticket: {winningTicket && winningTicket.join(", ")}</h3>
        </>
      )}
      <div className="ticket-container">
        <Ticket ticket={currentTicket} />
      </div>
      <Button action={buyTicket} />
      <h2>Total Taps: {tapCount}</h2>
      <h2>Total Wins: {winCount}</h2>
      <h2>
        {winningHistory.length > 0 &&
          `Winning History: ${winningHistory
            .map((t) => t.join(", "))
            .join(" | ")}`}
      </h2>
    </div>
  );
}

Lottery.propTypes = {
  n: PropTypes.number,
  winCondition: PropTypes.func.isRequired,
};
