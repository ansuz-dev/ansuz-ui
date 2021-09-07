import React from "react";
import PropTypes from "prop-types";
import cls from "classnames";

import "./Input.scss";

const Input = React.forwardRef((props, ref) => {
  const {
    fullwidth,
    readOnly,
    error,
    size,
    startAdornment,
    endAdornment,
    hint,
    placeholder,
    ...rest
  } = props;

  const containerClasses = cls({
    inputContainer: true,
    "w-full": fullwidth,
    [size]: true,
    error,
  });

  const inputClasses = cls({
    input: true,
    "w-full": fullwidth,
    [size]: true,
    readOnly,
    error,
    hasStartAdornment: !!startAdornment,
    hasEndAdornment: !!endAdornment,
  });

  const StartAdornment = startAdornment
    ? React.cloneElement(startAdornment, {
      className: cls(startAdornment.props.className, "adornment"),
    })
    : null;

  const EndAdornment = endAdornment
    ? React.cloneElement(endAdornment, {
      className: cls(endAdornment.props.className, "adornment"),
    })
    : null;

  return (
    <div className={containerClasses}>
      {startAdornment && (
        <div className="startAdornment">
          {StartAdornment}
        </div>
      )}
      <input
        {...rest}
        ref={ref}
        placeholder={placeholder}
        readOnly={readOnly}
        className={inputClasses}
      />
      {endAdornment && (
        <div className="endAdornment">
          {EndAdornment}
        </div>
      )}
      <div className="hint">
        {hint || placeholder || "Default hint"}
      </div>
    </div>
  );
});

Input.defaultProps = {
  fullwidth: false,
  readOnly: false,
  error: false,
  size: "md",
  startAdornment: null,
  endAdornment: null,
  hint: null,
  placeholder: null,
};

Input.propTypes = {
  fullwidth: PropTypes.bool,
  readOnly: PropTypes.bool,
  error: PropTypes.bool,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  startAdornment: PropTypes.node,
  endAdornment: PropTypes.node,
  hint: PropTypes.string,
  placeholder: PropTypes.string,
};

export default Input;
