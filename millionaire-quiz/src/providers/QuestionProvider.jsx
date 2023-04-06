import { createContext, useContext, useEffect, useState } from "react";
import { questionScoreUtil } from "../utils";

const defaultContext = {
  currentQuestionId: 1,
  currentQuestionObj: questionScoreUtil.getQuestionById(1),
};

export const QuestionContext = createContext(defaultContext);

const QuestionProvider = ({ children }) => {
  const [currentQuestionId, setCurrentQuestionId] = useState(
    defaultContext.currentQuestionId
  );
  const [currentQuestionObj, setCurrentQuestionObj] = useState(
    defaultContext.currentQuestionObj
  );
  const [remainingAnswers, setRemainingAnswers] = useState(
    currentQuestionObj.answers
  );

  const nextQuestion = () => {
    setCurrentQuestionId((prev) => prev + 1);
  };

  const removeTwoWrongAnswers = () => {
    let question = Object.assign({}, currentQuestionObj);

    const correctIndex = question.answers.indexOf(question.correct_answer);

    const indexesToRemove = [...Array(question.answers.length).keys()].filter(
      (i) => i !== correctIndex
    );
    indexesToRemove.sort(() => Math.random() - 0.5);
    indexesToRemove.splice(2);

    indexesToRemove.forEach((index) => (question.answers[index] = null));
    setCurrentQuestionObj(question);
  };

  useEffect(() => {
    setCurrentQuestionObj(questionScoreUtil.getQuestionById(currentQuestionId));
  }, [currentQuestionId]);

  useEffect(() => {
    setRemainingAnswers(currentQuestionObj.answers);
  }, [currentQuestionObj]);

  return (
    <QuestionContext.Provider
      value={{
        currentQuestionId,
        currentQuestionObj,
        nextQuestion,
        removeTwoWrongAnswers,
        remainingAnswers,
      }}
    >
      {children}
    </QuestionContext.Provider>
  );
};

export const useQuestion = () => useContext(QuestionContext);

export default QuestionProvider;
