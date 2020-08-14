import React from "react";
import PropTypes from "prop-types";

const ImageButton = ({ id = "base-button", label = "Button Msg" }) => (
  <button class="deque-button" id={id}>
    <svg aria-hidden="true" viewBox="0 0 10 10"><path d="M7 9L5 8 3 9V6L1 4h3l1-3 1 3h3L7 6z"/></svg>
    {label}
  </button>

);

ImageButton.propTypes = {
  /**
   * The id attributed to the button component
   */
  id: PropTypes.string,
  /**
   * The label to be presented in the button
   */
  label: PropTypes.string,
};

export default ImageButton;


