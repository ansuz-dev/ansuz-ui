import React from "react";
import PropTypes from "prop-types";

import {ReactComponent as CheckBoxOn} from "./checkbox_on.svg";
import {ReactComponent as CheckBoxOff} from "./checkbox_off.svg";
import BaseToggle from "../BaseToggle/BaseToggle";

const CheckBox = React.forwardRef((props, ref) => (
  <BaseToggle
    {...props}
    ref={ref}
    type="checkbox"
    toggleOn={CheckBoxOn}
    toggleOff={CheckBoxOff}
  />
));

CheckBox.displayName = "Checkbox";

CheckBox.defaultProps = {
  fullwidth: false,
  size: "md",
  label: null,
};

CheckBox.propTypes = {
  fullwidth: PropTypes.bool,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  label: PropTypes.string,
};

export default CheckBox;
