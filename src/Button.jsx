import "./Button.css";
import PropTypes from "prop-types";

export default function Button({ action }) {
  return <button className="custom-button" onClick={action}>Buy Ticket</button>;
}

Button.propTypes = {
  action: PropTypes.func.isRequired,
};