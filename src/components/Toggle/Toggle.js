import React from "react";
import PropTypes from "prop-types";

import {ReactComponent as ToggleOn} from "./toggle_on.svg";
import {ReactComponent as ToggleOff} from "./toggle_off.svg";
import BaseToggle from "../BaseToggle/Toggle";

const Toggle = props => (
  <BaseToggle
    {...props}
    type="checkbox"
    toggleOn={ToggleOn}
    toggleOff={ToggleOff}
  />
);

Toggle.displayName = "Toggle";

Toggle.defaultProps = {
  fullwidth: false,
  size: "md",
  label: null,
};

Toggle.propTypes = {
  fullwidth: PropTypes.bool,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  label: PropTypes.string,
};

export default Toggle;
