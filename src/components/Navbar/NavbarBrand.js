import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";
import cls from "classnames";

import "./Navbar.scss";

const NavbarBrand = props => {
  const {
    logo,
    showName,
    name,
  } = props;

  const brandClasses = cls({
    navbarBrand: true,
  });

  return (
    <div className={brandClasses}>
      {
        logo && (
          <img
            className="brandLogo"
            src={logo}
            alt={name}
          />
        )
      }
      {
        (showName || !logo) && (
          <span className="brandName">
            {name}
          </span>
        )
      }
    </div>
  );
};

NavbarBrand.defaultProps = {
  logo: undefined,
  showName: false,
};

NavbarBrand.propTypes = {
  logo: PropTypes.string,
  showName: PropTypes.bool,
  name: PropTypes.string.isRequired,
};

export default NavbarBrand;
