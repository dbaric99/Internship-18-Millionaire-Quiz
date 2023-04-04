import styles from './MainScreen.module.css';
import {Answer} from '.';
import {useQuestion} from '../../providers/QuestionProvider';
import { questionScoreUtil } from '../../utils';

function AnswersList() {
  const {currentQuestionObj} = useQuestion();

  return (
    <div className={styles.answersParent}>
      <div className={styles.firstRowLine}></div>
      <div className={styles.secondRowLine}></div>
      {
        questionScoreUtil.getMappedAnswers(currentQuestionObj).map((answer, index) => <Answer answer={answer} key={index}/>)
      }
    </div>
  )
}

export {AnswersList}