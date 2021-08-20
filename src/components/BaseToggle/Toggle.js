/* eslint-disable jsx-a11y/mouse-events-have-key-events */
/* eslint-disable react/forbid-prop-types */
import React, {useMemo} from "react";
import PropTypes from "prop-types";
import cls from "classnames";

import "./Toggle.scss";

const BaseToggle = React.forwardRef((props, ref) => {
  const id = useMemo(() => `tgl_${Math.random().toString().replace(/0\./, "")}`, []);
  const {
    label,
    fullwidth,
    labelFirst,
    size,
    direction,
    toggleOn: ToggleOn,
    toggleOff: ToggleOff,
    onMouseOver,
    onMouseLeave,
    ...rest
  } = props;

  const containerClasses = cls({
    toggleContainer: true,
    reverse: labelFirst,
    "w-full": fullwidth,
    [size]: true,
    [direction]: true,
  });

  const inputClasses = cls({
    toggle: true,
  });

  const labelClasses = cls({
    label: true,
  });

  return (
    <label
      htmlFor={id}
      className={containerClasses}
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
    >
      <div className={inputClasses}>
        <input {...rest} id={id} ref={ref} />
        <ToggleOff className="toggleOff" />
        <ToggleOn className="toggleOn" />
      </div>
      {
        label && (
          <div className={labelClasses}>
            {label}
          </div>
        )
      }
    </label>
  );
});

BaseToggle.displayName = "BaseToggle";

BaseToggle.defaultProps = {
  fullwidth: false,
  labelFirst: false,
  size: "md",
  direction: "horz",
  label: null,
  onMouseOver: undefined,
  onMouseLeave: undefined,
};

BaseToggle.propTypes = {
  fullwidth: PropTypes.bool,
  labelFirst: PropTypes.bool,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  direction: PropTypes.oneOf(["horz", "vert"]),
  label: PropTypes.string,
  toggleOn: PropTypes.any.isRequired,
  toggleOff: PropTypes.any.isRequired,
  onMouseOver: PropTypes.func,
  onMouseLeave: PropTypes.func,
};

export default BaseToggle;
