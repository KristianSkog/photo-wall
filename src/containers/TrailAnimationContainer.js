import { useState, useEffect } from "react";

import TrailAnimation from "../components/TrailAnimation";
import styles from "./trailAnimationContainer.module.css";

export default function TrailAnimationContainer() {
  const [open, set] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      set(!open);
    }, 2000);
  });

  return (
    <div className={styles.container}>
      <TrailAnimation isOpen={open}>
        <span key="L">L</span>
        <span key="O">O</span>
        <span key="A">A</span>
        <span key="D">D</span>
        <span key="I">I</span>
        <span key="N">N</span>
        <span key="G">G</span>
        <span key="DOT1" className={styles.dots}>
          .
        </span>
        <span key="DOT2" className={styles.dots}>
          .
        </span>
        <span key="DOT3" className={styles.dots}>
          .
        </span>
      </TrailAnimation>
    </div>
  );
}
