import React, { memo } from "react";
import { animated } from "@react-spring/web";

import styles from "./trailAnimation.module.css";

const AnimatedDiv = ({ height, item, style }) => {
  return (
    <animated.div className={styles.trailsText} style={style}>
      <animated.div style={{ height }}>{item}</animated.div>
    </animated.div>
  );
};

const AnimatedDivMemo = memo(AnimatedDiv);

export default AnimatedDivMemo;
