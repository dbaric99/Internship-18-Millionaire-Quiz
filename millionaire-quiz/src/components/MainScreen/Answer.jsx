import styles from './MainScreen.module.css';

function Answer() {
  return (
    <div className={styles.answerWrapper}>
      <div className={styles.answerContainer}>
        <div className={styles.answerText}><span>A:</span>Some answer</div>
        <div className={styles.borderEdgeLeft}></div>
        <div className={styles.borderEdgeRight}></div>
      </div>
    </div>
  )
}

export {Answer}