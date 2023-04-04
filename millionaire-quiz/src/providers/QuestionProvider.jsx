import { createContext, useContext, useEffect, useState } from "react";
import { questionUtil } from "../utils";

const defaultContext = {
    currentQuestionId: 1,
    currentQuestionObj: questionUtil.getQuestion(1),
}

export const QuestionContext = createContext(defaultContext);

const QuestionProvider = ({ children }) => {
    const [currentQuestionId, setCurrentQuestionId] = useState(defaultContext.currentQuestionId);
    const [currentQuestionObj, setCurrentQuestionObj] = useState(defaultContext.currentQuestionObj);

    const nextQuestion = () => {
        setCurrentQuestionId(prev => prev + 1);
    }

    useEffect(() => {
        setCurrentQuestionObj(questionUtil.getQuestion(currentQuestionId));
    }, [currentQuestionId])

    return (
        <QuestionContext.Provider value={{ currentQuestionId, nextQuestion }}>
            {children}
        </QuestionContext.Provider>
    )
};

export const useQuestion = () => useContext(QuestionContext);

export default QuestionProvider;