import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";
import cls from "classnames";

import "./Sidebar.scss";

const SidebarItem = props => {
  const {
    icon: Icon,
    label,
    component: Component,
    ...rest
  } = props;

  const itemClasses = cls({
    sidebarItem: true,
  });

  return (
    <Component className={itemClasses} {...rest}>
      <div className="sidebarItemIconContainer">
        {
          Icon
            ? <Icon className="sidebarItemIcon" />
            : <span>{label.charAt(0).toUpperCase()}</span>
        }
      </div>
      <span className="sidebarItemLabel">
        {label}
      </span>
    </Component>
  );
};

SidebarItem.defaultProps = {
  component: "div",
  icon: null,
};

SidebarItem.propTypes = {
  component: PropTypes.node,
  icon: PropTypes.node,
  label: PropTypes.string.isRequired,
};

export default SidebarItem;
