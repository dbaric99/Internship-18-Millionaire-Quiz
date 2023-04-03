import styles from './MainScreen.module.css';
import {Answer} from '.';

function AnswersList() {
  return (
    <div className={styles.answersParent}>
      <div className={styles.firstRowLine}></div>
      <div className={styles.secondRowLine}></div>
      <Answer />
      <Answer />
      <Answer />
      <Answer />
    </div>
  )
}

export {AnswersList}