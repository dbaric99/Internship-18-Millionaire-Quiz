import styles from './MainScreen.module.css';
import {Answer} from '.';

function AnswersList() {
  return (
    <div className={styles.answersParent}>
      <Answer />
      <Answer />
      <Answer />
      <Answer />
    </div>
  )
}

export {AnswersList}