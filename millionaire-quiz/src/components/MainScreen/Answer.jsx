import { useEffect, useRef, useState } from "react";
import { useDialog } from "../../providers/DialogProvider";
import { useQuestion } from "../../providers/QuestionProvider";
import { dialogConstants } from "../../constants/dialogConstants";
import { useDebounce } from "../../hooks/useDebounce";
import styles from "./MainScreen.module.css";

function Answer({ answer, selectedAnswer, wrongAnswer }) {
  const { open } = useDialog();
  const { currentQuestionId, currentQuestionObj, nextQuestion, restartQuiz } =
    useQuestion();
  const [isClicked, setIsClicked] = useState(false);
  const [answerClass, setAnswerClass] = useState(null);
  const [key, value] = Object.entries(answer)[0];

  const answerBox = useRef(null);
  const leftBorder = useRef(null);
  const rightBorder = useRef(null);

  const debouncedNextQuestion = useDebounce(nextQuestion, 3000);
  const debouncedRestartQuiz = useDebounce(() => {
    restartQuiz();
    setAnswerClass(null);
    wrongAnswer(false);
  }, 3000);
  const debounceInfoDialog = useDebounce(
    () =>
      open(dialogConstants.dialogType.INFO_DIALOG, { onRestart: restartQuiz }),
    3000
  );

  const handleAnswer = () => {
    if (currentQuestionObj.correct_answer === value) {
      setAnswerClass(styles.answerContainerCorrect);
      if (currentQuestionId < 15) {
        debouncedNextQuestion();
        return;
      } else {
        debounceInfoDialog();
        return;
      }
    }
    setIsClicked(true);
    setAnswerClass(styles.answerContainerWrong);
    wrongAnswer(true);
    debouncedRestartQuiz();
  };

  const handleAnswerClick = (e) => {
    open(dialogConstants.dialogType.CONFIRM_DIALOG, {
      onConfirm: handleAnswer,
    });
  };

  useEffect(() => {
    setAnswerClass(null);
  }, [answer]);

  useEffect(() => {
    if (selectedAnswer && currentQuestionObj.correct_answer === value)
      setAnswerClass(styles.answerContainerCorrect);
    else if (
      selectedAnswer &&
      currentQuestionObj.correct_answer !== value &&
      isClicked
    )
      setAnswerClass(styles.answerContainerWrong);
  }, [selectedAnswer]);

  return (
    <div className={styles.answerWrapper} onClick={(e) => handleAnswerClick(e)}>
      <div
        ref={answerBox}
        className={`${styles.answerContainer} ${answerClass}`}
      >
        <div className={styles.answerText}>
          <span>{key}:</span>
          {value}
        </div>
        <div ref={leftBorder} className={styles.borderEdgeLeft}></div>
        <div ref={rightBorder} className={styles.borderEdgeRight}></div>
      </div>
    </div>
  );
}

export { Answer };
