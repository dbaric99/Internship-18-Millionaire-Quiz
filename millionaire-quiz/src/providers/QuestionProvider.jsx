import { createContext, useContext, useState } from "react";

const defaultContext = {
    currentQuestionId: 1
}

export const QuestionContext = createContext(defaultContext);

const QuestionProvider = ({ children }) => {
    const [currentQuestionId, setCurrentQuestionId] = useState(defaultContext.currentQuestionId);

    const nextQuestion = () => {
        setCurrentQuestionId(prev => prev + 1);
    }

    return (
        <QuestionContext.Provider value={{ currentQuestionId, nextQuestion }}>
            {children}
        </QuestionContext.Provider>
    )
};

export const useQuestion = () => useContext(QuestionContext);

export default QuestionProvider;