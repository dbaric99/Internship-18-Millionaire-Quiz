import { useRef } from 'react';
import { useDialog } from '../../providers/DialogProvider';
import { dialogConstants } from '../../constants/dialogConstants';
import styles from './MainScreen.module.css';

function Answer({answer}) {
  const { open } = useDialog();
  const [key, value] = Object.entries(answer)[0];

  const answerBox = useRef(null);
  const leftBorder = useRef(null);
  const rightBorder = useRef(null);

  const handleAnswerClick = (e) => {
    open(dialogConstants.dialogType.CONFIRM_DIALOG, {onConfirm: () => console.log("CONFIRMED")});
  }

  return (
    <div className={styles.answerWrapper} onClick={(e) => handleAnswerClick(e)}>
      <div ref={answerBox} className={styles.answerContainer}>
        <div className={styles.answerText}><span>{key}:</span>{value}</div>
        <div ref={leftBorder} className={styles.borderEdgeLeft}></div>
        <div ref={rightBorder} className={styles.borderEdgeRight}></div>
      </div>
    </div>
  )
}

export {Answer}