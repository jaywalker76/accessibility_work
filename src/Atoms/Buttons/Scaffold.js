import React from "react";
import PropTypes from "prop-types";

const Scaffold = ({ id, role, onClickAction, label = "default" }) => (
  <span class="deque-button deque-button-aria" id={id} onClick={onClickAction}>
    {label}
  </span>
);

Scaffold.propTypes = {
  /**
   * The component id
   */
  id: PropTypes.string,
  /**
   * The role to be attributed to the scaffold
   */
  role: PropTypes.string,
  /**
   * The message to be rendered within the scaffold
   */
  label: PropTypes.string,
  /**
   * The action assigned to the on click event
   */
  onClickAction: PropTypes.func,
};

export default Scaffold;
