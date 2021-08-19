import React from "react";
import PropTypes from "prop-types";

import {ReactComponent as CheckboxOn} from "./checkbox_on.svg";
import {ReactComponent as CheckboxOff} from "./checkbox_off.svg";
import BaseToggle from "../BaseToggle/Toggle";

const Checkbox = props => (
  <BaseToggle
    {...props}
    type="checkbox"
    toggleOn={CheckboxOn}
    toggleOff={CheckboxOff}
  />
);

Checkbox.displayName = "Checkbox";

Checkbox.defaultProps = {
  fullwidth: false,
  size: "md",
  label: null,
};

Checkbox.propTypes = {
  fullwidth: PropTypes.bool,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  label: PropTypes.string,
};

export default Checkbox;
