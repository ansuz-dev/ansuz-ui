import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";
import cls from "classnames";

import "./Navbar.scss";

const NavbarItem = props => {
  const {
    label,
    component: Component,
    ...rest
  } = props;

  const itemClasses = cls({
    navbarItem: true,
  });

  return (
    <Component
      className={itemClasses}
      {...rest}
    >
      {label}
    </Component>
  );
};

NavbarItem.defaultProps = {
  component: "span",
};

NavbarItem.propTypes = {
  label: PropTypes.string.isRequired,
  component: PropTypes.node,
};

export default NavbarItem;
