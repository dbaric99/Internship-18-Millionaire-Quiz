import styles from './MainScreen.module.css';
import {Answer} from '.';
import {useQuestion} from '../../providers/QuestionProvider';
import { questionScoreUtil } from '../../utils';
import { useState } from 'react';

function AnswersList() {
  const {currentQuestionObj} = useQuestion();
  const [choiceMade, setChoiceMade] = useState(false);

  return (
    <div className={styles.answersParent}>
      <div className={styles.firstRowLine}></div>
      <div className={styles.secondRowLine}></div>
      {
        questionScoreUtil.getMappedAnswers(currentQuestionObj).map((answer, index) => <Answer answer={answer} key={index} wrongAnswer={(val) => setChoiceMade(val)} selectedAnswer={choiceMade}/>)
      }
    </div>
  )
}

export {AnswersList}