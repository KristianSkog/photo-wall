import { useState, useEffect, useMemo } from "react";
import PropTypes from "prop-types";

import TrailAnimation from "../components/TrailAnimation";
import styles from "./trailAnimationContainer.module.css";

export default function TrailAnimationContainer({ text }) {
  const [open, set] = useState(true);

  const textMemo = useMemo(() => {
    return text.split("");
  }, [text]);

  useEffect(() => {
    setTimeout(() => {
      set(!open);
    }, 2000);
  });

  return (
    <div className={styles.container}>
      <TrailAnimation isOpen={open}>
        {textMemo.map((letter, index) => (
          <span key={index}>{letter}</span>
        ))}
      </TrailAnimation>
    </div>
  );
}

TrailAnimationContainer.propTypes = {
  text: PropTypes.string.isRequired,
};
