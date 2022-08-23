import React, { memo } from "react";
import PropTypes from "prop-types";
import { useTrail } from "@react-spring/web";

import AnimatedDiv from "./AnimatedDiv";
import styles from "./trailAnimation.module.css";

const TrailAnimation = ({ isOpen, children }) => {
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: isOpen ? 1 : 0,
    x: isOpen ? 0 : 20,
    height: isOpen ? 110 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  });

  return (
    <div className={styles.container}>
      {trail.map(({ height, ...style }, index) => (
        <AnimatedDiv key={items[index].key} height={height} style={style}>
          {items[index]}
        </AnimatedDiv>
      ))}
    </div>
  );
};

TrailAnimation.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

const TrailAnimationMemo = memo(TrailAnimation);

export default TrailAnimationMemo;
