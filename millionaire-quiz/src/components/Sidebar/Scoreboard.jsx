import scoreboard from '../../data/scoreboard.json';
import { useQuestion } from '../../providers/QuestionProvider';
import styles from './Sidebar.module.css';

function Scoreboard() {
    const {currentQuestionId} = useQuestion();

  return (
    <div className={styles.scoreboardWrapper}>
        {
            scoreboard.scores.slice().reverse().map((score, index) => {
                return (
                    <div key={index} className={`${styles.scoreWrapper} ${score.id%5===0 ? styles.guaranteedScore : styles.normalScore} ${currentQuestionId===score.id ? styles.activeScore : ''}`}>
                        <span>{score.id}</span>
                        <span>{score.amount}</span>
                    </div>
                )
            })
        }
    </div>
  )
}

export {Scoreboard}