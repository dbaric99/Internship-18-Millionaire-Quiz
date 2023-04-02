import styles from './MainScreen.module.css';

function Question() {
  return (
    <div className={styles.questionWrapper}>
        <div className={styles.questionText}>This is some test question?</div>
    </div>
  )
}

export {Question}