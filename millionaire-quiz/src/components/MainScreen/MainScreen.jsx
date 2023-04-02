import styles from './MainScreen.module.css'
import { Question } from '.'

function MainScreen() {
  return (
    <div className={styles.wrapper}>
      <Question />
    </div>
  )
}

export {MainScreen}