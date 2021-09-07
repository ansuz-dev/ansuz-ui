import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";
import cls from "classnames";

import "./Avatar.scss";

const useLoaded = ({
  crossOrigin, referrerPolicy, src, srcSet,
}) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!src && !srcSet) {
      return undefined;
    }

    setLoaded(false);

    let active = true;
    const image = new Image();
    image.onload = () => {
      if (!active) {
        return;
      }
      setLoaded("loaded");
    };
    image.onerror = () => {
      if (!active) {
        return;
      }
      setLoaded("error");
    };
    image.crossOrigin = crossOrigin;
    image.referrerPolicy = referrerPolicy;
    image.src = src;
    if (srcSet) {
      image.srcset = srcSet;
    }

    return () => {
      active = false;
    };
  }, [crossOrigin, referrerPolicy, src, srcSet]);

  return loaded;
};

const Avatar = props => {
  const {
    src, srcSet, alt, variant, size,
  } = props;

  const loaded = useLoaded({src, srcSet});
  const hasImg = src || srcSet;
  const hasImgNotFailing = hasImg && loaded === "loaded";

  const containerClasses = cls({
    avatarContainer: true,
    [size]: true,
    [variant]: true,
  });

  return (
    <div className={containerClasses}>
      {
        hasImgNotFailing && (
          <img
            src={src}
            srcSet={srcSet}
            alt={alt}
            className="w-full h-full text-center object-cover text-transparent"
          />
        )
      }
      {
        (!hasImgNotFailing && alt) && (
          <span className="avatarText">
            {alt[0]}
          </span>
        )
      }
    </div>
  );
};

Avatar.defaultProps = {
  srcSet: null,
  alt: null,
  size: "md",
  variant: "circle",
};

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  srcSet: PropTypes.string,
  alt: PropTypes.string,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  variant: PropTypes.oneOf(["circle", "rounded", "square"]),
};

export default Avatar;
