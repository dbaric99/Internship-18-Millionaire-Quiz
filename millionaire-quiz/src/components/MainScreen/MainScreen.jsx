import styles from './MainScreen.module.css'
import { AnswersList, Question } from '.'

function MainScreen() {
  return (
    <div className={styles.wrapper}>
      <Question />
      <AnswersList />
    </div>
  )
}

export {MainScreen}