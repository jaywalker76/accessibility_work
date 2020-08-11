import React from "react";
import PropTypes from "prop-types";

const Button = ({ id = "base-button", label = "Button Msg" }) => (
  <button class="deque-button" id={id}>
    {label}
  </button>
);

Button.propTypes = {
  /**
   * The id attributed to the button component
   */
  id: PropTypes.string,
  /**
   * The label to be presented in the button
   */
  label: PropTypes.string,
};

export default Button;
