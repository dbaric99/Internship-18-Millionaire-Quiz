import styles from './MainScreen.module.css';

function Answer({answer}) {
  const [key, value] = Object.entries(answer)[0];

  return (
    <div className={styles.answerWrapper}>
      <div className={styles.answerContainer}>
        <div className={styles.answerText}><span>{key}:</span>{value}</div>
        <div className={styles.borderEdgeLeft}></div>
        <div className={styles.borderEdgeRight}></div>
      </div>
    </div>
  )
}

export {Answer}