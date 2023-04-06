import styles from "./Sidebar.module.css";
import { useState } from "react";

function Action({ type, icons, handleClick }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div>
      <img
        src={hovered ? icons.hovered : icons.default}
        alt="action"
        className={styles.action}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={handleClick}
      />
    </div>
  );
}

export { Action };
