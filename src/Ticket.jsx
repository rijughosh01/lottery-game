import TicketNum from "./TicketNum";
import "./Ticket.css";
import PropTypes from 'prop-types';

export default function Ticket({ ticket }) {

  Ticket.propTypes = {
    ticket: PropTypes.arrayOf(PropTypes.number).isRequired,
  };

  return (
    <div className="Ticket">
      <p>Ticket</p>
      {Array.isArray(ticket) ? ticket.map((num, idx) => (
        <TicketNum num={num} key={idx} />
      )) : null}
    </div>
  );
}
