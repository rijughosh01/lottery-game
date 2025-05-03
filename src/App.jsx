import "./App.css";
import Lottery from "./Lottery";

function App() {
  const winCondition = (ticket) => {
    return ticket.reduce((sum, num) => sum + num, 0) === 15;
  };

  return <Lottery n={3} winCondition={winCondition} />;
}

export default App;