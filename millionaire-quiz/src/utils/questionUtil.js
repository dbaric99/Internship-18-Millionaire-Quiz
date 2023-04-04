import questions from '../data/questions.json';

const getQuestionById = (id) => {
    return questions.find((question) => question.id === id);
}

export const questionUtil = {

}