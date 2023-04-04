import questions from '../data/questions.json';
import scoreboard from '../data/scoreboard.json';

const getQuestionById = (id) => {
    return questions.questions.find((question) => question.id === id);
}

const getMappedAnswers = (question) => {
    return question.answers.map((answer, index) => {
        const key = String.fromCharCode(65 + index);
        return {[key]: answer};
    });
}

const getScoreById = (id) => {
    return scoreboard.scores.find((score) => score.id === id);
}

export const questionScoreUtil = {
    getQuestionById,
    getMappedAnswers,
    getScoreById
}