import React, {useCallback, useState} from "react";
import PropTypes from "prop-types";
import cls from "classnames";

import "./Sidebar.scss";

import {ReactComponent as MenuIcon} from "./menu.svg";
import {ReactComponent as CloseIcon} from "./close.svg";

const Sidebar = props => {
  const {
    active,
    position,
    children,
  } = props;

  const [isOpened, setIsOpened] = useState(false);

  const handleMenuClick = useCallback(() => {
    setIsOpened(!isOpened);
  }, [isOpened]);

  const BurgerIcon = isOpened ? CloseIcon : MenuIcon;

  const sidebarClasses = cls({
    sidebarRoot: true,
    [position]: true,
    isOpened: active || isOpened,
  });

  return (
    <div className={sidebarClasses}>
      <div className="sidebarContainer">
        {children}
      </div>
      {
        !active && (
          <BurgerIcon
            className="sidebarBurger"
            onClick={handleMenuClick}
          />
        )
      }
    </div>
  );
};

Sidebar.defaultProps = {
  active: false,
  position: "left",
};

Sidebar.propTypes = {
  active: PropTypes.bool,
  position: PropTypes.oneOf(["left", "right"]),
  children: PropTypes.node.isRequired,
};

export default Sidebar;
