import React, {useCallback, useEffect, useState} from "react";
import PropTypes from "prop-types";
import cls from "classnames";

import "./Navbar.scss";

import {ReactComponent as MenuIcon} from "./menu.svg";
import {ReactComponent as CloseIcon} from "./close.svg";

const Navbar = props => {
  const {
    position,
    children,
  } = props;

  const [isOpened, setIsOpened] = useState(false);

  const handleMenuClick = useCallback(() => {
    setIsOpened(!isOpened);
  }, [isOpened]);

  const BurgerIcon = isOpened ? CloseIcon : MenuIcon;

  const navbarClasses = cls({
    navbarRoot: true,
    [position]: true,
    isOpened,
  });

  return (
    <div className={navbarClasses}>
      <div className="navbarContainer">
        {children}
      </div>
      <BurgerIcon
        className="navbarBurger"
        onClick={handleMenuClick}
      />
    </div>
  );
};

Navbar.defaultProps = {
  position: null,
};

Navbar.propTypes = {
  position: PropTypes.oneOf(["top"]),
  children: PropTypes.node.isRequired,
};

export default Navbar;
