import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";
import cls from "classnames";

import "./Navbar.scss";

const NavbarMenu = props => {
  const {
    align,
    children,
  } = props;

  const menuClasses = cls({
    navbarMenu: true,
    [align]: true,
  });

  return (
    <div className={menuClasses}>
      {children}
    </div>
  );
};

NavbarMenu.defaultProps = {
  align: "left",
};

NavbarMenu.propTypes = {
  align: PropTypes.oneOf(["left", "center", "right"]),
  children: PropTypes.node.isRequired,
};

export default NavbarMenu;
