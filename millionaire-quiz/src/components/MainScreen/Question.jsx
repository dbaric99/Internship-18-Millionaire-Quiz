import styles from './MainScreen.module.css';
import {useQuestion} from '../../providers/QuestionProvider';

function Question() {
  const { currentQuestionObj} = useQuestion();

  return (
    <div className={styles.questionWrapper}>
        <div className={styles.questionText}>{currentQuestionObj.question}</div>
    </div>
  )
}

export {Question}