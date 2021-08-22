import React from "react";
import PropTypes from "prop-types";
import cls from "classnames";

import "./Button.scss";

import Loading from "../Loading/Loading";

const Button = props => {
  const {
    size,
    color,
    variant,
    fullwidth,
    disabled,
    loading,
    isSubmit,
    children,
    ...rest
  } = props;

  const buttonClasses = cls({
    button: true,
    [color]: true,
    [size]: true,
    [variant]: true,
    disabled,
    loading,
    "w-full": fullwidth,
  });

  return (
    <button
      {...rest}
      type={isSubmit ? "submit" : "button"}
      disabled={disabled}
      className={buttonClasses}
    >
      {
        loading && (
          <div className="absolute w-full h-full top-0 left-0 flex items-center justify-center">
            <Loading color={variant === "filled" ? "white" : color} />
          </div>
        )
      }
      <div className={loading ? "opacity-0" : ""}>
        {children}
      </div>
    </button>
  );
};

Button.defaultProps = {
  size: "md",
  variant: "filled",
  color: "primary",
  fullwidth: false,
  disabled: false,
  loading: false,
  isSubmit: false,
};

Button.propTypes = {
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  variant: PropTypes.oneOf(["filled", "outlined"]),
  color: PropTypes.oneOf(["primary", "secondary", "white"]),
  fullwidth: PropTypes.bool,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  isSubmit: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default Button;
