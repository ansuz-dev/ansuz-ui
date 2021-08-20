import React from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";

const Portal = React.forwardRef(({children}, ref) => ReactDOM.createPortal(
  <div ref={ref} className="absolute top-0 left-0 w-0 h-0">
    {children}
  </div>,
  document.querySelector("body"),
));

Portal.displayName = "Portal";

Portal.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Portal;
