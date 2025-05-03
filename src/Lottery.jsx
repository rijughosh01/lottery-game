import { useState } from "react";
import "./Lottery.css";
import { genTickte } from "./helper.js";
import Ticket from "./Ticket";
import Button from "./Button.jsx";
import Fireworks from "./Fireworks.jsx"; 
import PropTypes from "prop-types";

export default function Lottery({ n = 3, winCondition }) {
  const [currentTicket, setCurrentTicket] = useState(genTickte(n));
  const [winningHistory, setWinningHistory] = useState([]);
  const [isWinning, setIsWinning] = useState(false);

  const buyTicket = () => {
    const newTicket = genTickte(n);
    setCurrentTicket(newTicket);
    if (winCondition(newTicket)) {
      setWinningHistory([...winningHistory, newTicket]);
      setIsWinning(true);
      setTimeout(() => setIsWinning(false), 5000); 
    }
  };

  return (
    <div className="lottery">
      <h1>Lottery Game!</h1>
      {isWinning && (
        <>
          <h2>🎉 You won! 🎉</h2>
          <Fireworks />
          <div className="big-prize">
            🎉 Congratulations! You won 10,00,00,00,000$ 🎉
          </div>
        </>
      )}
      <div className="ticket-container">
        <Ticket ticket={currentTicket} />
      </div>
      <Button action={buyTicket} />
      <h2>
        {winningHistory.length > 0 &&
          `Winning History: ${winningHistory.map((t) => t.join(", ")).join(" | ")}`}
      </h2>
    </div>
  );
}

Lottery.propTypes = {
  n: PropTypes.number,
  winCondition: PropTypes.func.isRequired,
};