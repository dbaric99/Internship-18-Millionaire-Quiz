import { useQuestion } from '../../providers/QuestionProvider';
import { questionScoreUtil } from '../../utils';
import styles from './Sidebar.module.css';

function PlayerScore() {
    const {currentQuestionId} = useQuestion();
  return (
    <div className={styles.playerScoreWrapper}>
        <h4 className={styles.playerScoreTitle}>Your Score</h4>
        <div className={styles.currentScoreWrapper}>
            <div className={styles.currentScore}>
                <span>$</span>
                {
                    (currentQuestionId > 1) 
                    ? questionScoreUtil.getScoreById(currentQuestionId - 1).amount
                    : 0
                }
            </div>
        </div>
    </div>
  )
}

export {PlayerScore}