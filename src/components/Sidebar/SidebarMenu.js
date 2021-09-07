import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";
import cls from "classnames";

import "./Sidebar.scss";

const SidebarMenu = props => {
  const {
    align,
    children,
  } = props;

  const menuClasses = cls({
    sidebarMenu: true,
    [align]: true,
  });

  return (
    <div className={menuClasses}>
      {children}
    </div>
  );
};

SidebarMenu.defaultProps = {
  align: "top",
};

SidebarMenu.propTypes = {
  align: PropTypes.oneOf(["top", "center", "bottom"]),
  children: PropTypes.node.isRequired,
};

export default SidebarMenu;
