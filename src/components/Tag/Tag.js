import React from "react";
import PropTypes from "prop-types";
import cls from "classnames";

import "./Tag.scss";

const NavbarMenu = props => {
  const {
    variant,
    color,
    size,
    label,
  } = props;

  const tagClasses = cls({
    tag: true,
    [variant]: true,
    [color]: true,
    [size]: true,
  });

  return (
    <div className={tagClasses}>
      {label}
    </div>
  );
};

NavbarMenu.defaultProps = {
  variant: "filled",
  color: "primary",
  size: "md",
};

NavbarMenu.propTypes = {
  variant: PropTypes.oneOf(["filled", "outlined"]),
  color: PropTypes.oneOf(["primary", "secondary"]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  label: PropTypes.string.isRequired,
};

export default NavbarMenu;
