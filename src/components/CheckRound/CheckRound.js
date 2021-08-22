import React from "react";
import PropTypes from "prop-types";

import {ReactComponent as CheckRoundOn} from "./checkround_on.svg";
import {ReactComponent as CheckRoundOff} from "./checkround_off.svg";
import BaseToggle from "../BaseToggle/BaseToggle";

const CheckRound = React.forwardRef((props, ref) => (
  <BaseToggle
    {...props}
    ref={ref}
    type="checkbox"
    toggleOn={CheckRoundOn}
    toggleOff={CheckRoundOff}
  />
));

CheckRound.displayName = "CheckRound";

CheckRound.defaultProps = {
  fullwidth: false,
  size: "md",
  label: null,
};

CheckRound.propTypes = {
  fullwidth: PropTypes.bool,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  label: PropTypes.string,
};

export default CheckRound;
