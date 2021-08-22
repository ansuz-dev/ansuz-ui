import React from "react";
import cls from "classnames";
import PropTypes from "prop-types";

import "./Loading.scss";

const Loading = ({color}) => {
  const containerClasses = cls({
    loadingContainer: true,
    [color]: true,
  });

  return (
    <div className={containerClasses}>
      <div className="loadingItem" />
      <div className="loadingItem delay-75" />
      <div className="loadingItem delay-150" />
    </div>
  );
};

Loading.defaultProps = {
  color: "primary",
};

Loading.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "white"]),
};

export default Loading;
