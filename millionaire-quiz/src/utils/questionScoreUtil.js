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

const getRandomWrongAnswer = (question) => {
    const { answers, correct_answer } = question;
    const wrongAnswers = answers.filter(answer => answer !== correct_answer);
    const randomIndex = Math.floor(Math.random() * wrongAnswers.length);
    return wrongAnswers[randomIndex];
}

const getAnswerLetter = (question, answer) => {
    const mappedAnswers = getMappedAnswers(question);
    const answerLetter = mappedAnswers.find((mappedAnswer) => {
        return Object.values(mappedAnswer)[0] === answer;
    });
    return Object.keys(answerLetter)[0];
}


export const questionScoreUtil = {
    getQuestionById,
    getMappedAnswers,
    getScoreById,
    getRandomWrongAnswer,
    getAnswerLetter
}