import React, {useCallback, useRef, useState} from "react";
import PropTypes from "prop-types";

import Portal from "../../utils/Portal/Portal";

import "./Tooltip.scss";

const composeEventHandler = (handler, eventHandler) => event => {
  if (eventHandler) {
    eventHandler(event);
  }
  handler(event);
};

const Tooltip = React.forwardRef(({title, children}, ref) => {
  const [isShown, setIsShown] = useState(false);
  const [position, setPosition] = useState(null);

  const handleRef = useRef(ref);

  const onHoverin = useCallback(evt => {
    setIsShown(true);

    setPosition({
      top: evt.currentTarget.offsetTop + evt.currentTarget.offsetHeight + 8,
      left: evt.currentTarget.offsetLeft + (evt.currentTarget.offsetWidth / 2),
    });
  }, []);

  const onHoverOut = useCallback(() => setIsShown(false), []);

  const childrenProps = {
    ...children.props,
    ref: handleRef,
    onMouseOver: composeEventHandler(onHoverin, children.props.onMouseOver),
    onMouseLeave: composeEventHandler(onHoverOut, children.props.onMouseLeave),
    // onFocus: composeEventHandler(onHoverin, children.props.onFocus),
    // onBlur: composeEventHandler(onHoverOut, children.props.onBlur),
  };

  return (
    <>
      {React.cloneElement(children, childrenProps)}
      {
        (isShown && title) && (
          <Portal>
            <div className="tooltipContainer" style={position}>
              <div className="tooltip">
                {title}
              </div>
            </div>
          </Portal>
        )
      }
    </>
  );
});

Tooltip.displayName = "Tooltip";

Tooltip.propTypes = {
  title: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
};

export default Tooltip;
