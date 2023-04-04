import questions from '../data/questions.json';

const getQuestionById = (id) => {
    return questions.questions.find((question) => question.id === id);
}

const getMappedAnswers = (question) => {
    return question.answers.map((answer, index) => {
        const key = String.fromCharCode(65 + index);
        return {[key]: answer};
    });
}

export const questionUtil = {
    getQuestionById,
    getMappedAnswers
}