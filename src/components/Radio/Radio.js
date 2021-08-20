import React from "react";
import PropTypes from "prop-types";

import {ReactComponent as RadioOn} from "./radio_on.svg";
import {ReactComponent as RadioOff} from "./radio_off.svg";
import BaseToggle from "../BaseToggle/Toggle";

const Radio = React.forwardRef((props, ref) => (
  <BaseToggle
    {...props}
    ref={ref}
    type="radio"
    toggleOn={RadioOn}
    toggleOff={RadioOff}
  />
));

Radio.displayName = "Radio";

Radio.defaultProps = {
  fullwidth: false,
  size: "md",
  label: null,
};

Radio.propTypes = {
  fullwidth: PropTypes.bool,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  label: PropTypes.string,
};

export default Radio;
