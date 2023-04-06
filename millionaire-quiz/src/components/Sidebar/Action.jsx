import styles from "./Sidebar.module.css";
import { useAction } from "../../providers/ActionProvider";
import { useState } from "react";

function Action({ type, icons, handleClick }) {
  const [hovered, setHovered] = useState(false);
  const {activeJokers} = useAction();

  return (
    <div>
      <img
        src={hovered ? icons.hovered : icons.default}
        alt="action"
        className={`${styles.action} ${activeJokers[type] ? "" : styles.disabled}`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={handleClick}
      />
    </div>
  );
}

export { Action };
