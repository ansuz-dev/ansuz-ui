import React from "react";
import PropTypes from "prop-types";

import {ReactComponent as ToggleOn} from "./toggle_on.svg";
import {ReactComponent as ToggleOff} from "./toggle_off.svg";
import BaseToggle from "../BaseToggle/BaseToggle";

const StarToggle = React.forwardRef((props, ref) => (
  <BaseToggle
    {...props}
    ref={ref}
    type="checkbox"
    toggleOn={ToggleOn}
    toggleOff={ToggleOff}
  />
));

StarToggle.displayName = "Toggle";

StarToggle.defaultProps = {
  fullwidth: false,
  size: "md",
  label: null,
};

StarToggle.propTypes = {
  fullwidth: PropTypes.bool,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  label: PropTypes.string,
};

export default StarToggle;
