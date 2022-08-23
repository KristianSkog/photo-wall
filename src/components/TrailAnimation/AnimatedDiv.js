import React, { memo } from "react";
import { animated } from "@react-spring/web";
import PropTypes from "prop-types";

import styles from "./trailAnimation.module.css";

const AnimatedDiv = ({ height, children, style }) => {
  return (
    <animated.div className={styles.trailsText} style={style}>
      <animated.div style={{ height }}>{children}</animated.div>
    </animated.div>
  );
};

AnimatedDiv.propTypes = {
  height: PropTypes.object,
  children: PropTypes.node,
  style: PropTypes.object,
};

const AnimatedDivMemo = memo(AnimatedDiv);

export default AnimatedDivMemo;
