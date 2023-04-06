import { generalUtil } from "./generalUtil";
import { questionScoreUtil } from "./questionScoreUtil";

const getAnswer = (shouldGetCorrect, question) => {
    return shouldGetCorrect 
    ? questionScoreUtil.getAnswerLetter(question, question.correct_answer)
    : questionScoreUtil.getAnswerLetter(question, questionScoreUtil.getRandomWrongAnswer(question));
}

const askTheAudience = (question) => {
    let shouldDisplayCorrect = generalUtil.getWithPercentChance(80);

    let probablyCorrectAnswer = getAnswer(shouldDisplayCorrect, question);

    return `80% of the audience answered ${probablyCorrectAnswer}`;
}

const phoneAFriend = (question) => {
    let shouldDisplayCorrect = generalUtil.getWithPercentChance(90);

    let probablyCorrectAnswer = getAnswer(shouldDisplayCorrect, question);
    
    return `Your friend answered: I think the answer is ${probablyCorrectAnswer}`;
}

export const actionsUtil = {
    askTheAudience,
    phoneAFriend
}