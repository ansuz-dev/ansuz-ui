import React from "react";
import PropTypes from "prop-types";

import "./Box.scss";

const Box = props => {
  const {children} = props;

  return (
    <div className="boxContainer">
      {children}
    </div>
  );
};

Box.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Box;
