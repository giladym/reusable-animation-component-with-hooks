import React, { useLayoutEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Animated } from 'react-animated-css';

AnimatedVisibility.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  animationOutDuration: PropTypes.number,
  disappearOffset: PropTypes.number,
  visible: PropTypes.bool,
};

AnimatedVisibility.defaultProps = {
  animationOutDuration: 1000,
  disappearOffset: 350,
  visible: true,
};

function AnimatedVisibility({
                              visible,
                              children,
                              animationOutDuration,
                              disappearOffset,
                              ...rest
                            }) {
  const [show, setShow] = useState(visible);

  useLayoutEffect(() => {
      visible ?
        setShow(true) :
        setTimeout(() => setShow(false), animationOutDuration - disappearOffset);
    },
    [visible]);

  return (
    <Animated
      isVisible={visible}
      style={show ? null : { display: 'none' }} {...rest}>
      {children}
    </Animated>
  );
}

// HOC - generic Amination
function makeAnimated(
  Component,
  animationIn,
  animationOut,
  animationInDuration,
  animationOutDuration,
  disappearOffset
) {
  return function({ open, className, ...props }) {
    return (
      <AnimatedVisibility
        visible={open}
        animationIn={animationIn}
        animationOut={animationOut}
        animationInDuration={animationInDuration}
        animationOutDuration={animationOutDuration}
        disappearOffset={disappearOffset}
        className={className}
      >
        <Component {...props} />
      </AnimatedVisibility>
    );
  };
}

// HOC for handling the sideBar animation
export function makeAnimationSlideLeft(Component) {
  return makeAnimated(Component, "slideInLeft", "slideOutLeft", 400, 500, 200);
}
// HOC for handling the navBar animation
export function makeAnimationSlideUpDown(Component) {
  return makeAnimated(Component, "slideInDown", "slideOutUp", 400, 500, 200);
}// HOC for handling the box animation
export function makeAnimationBox(Component) {
  return makeAnimated(Component, "zoomIn", "zoomOut", 400, 500, 200);
}

export default AnimatedVisibility;
