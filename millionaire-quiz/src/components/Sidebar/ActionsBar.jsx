import { Action } from '.';
import {actionConstants} from '../../constants';
import fiftyPurple from '../../assets/images/5050.jpg';
import askPurple from '../../assets/images/ata.jpg';
import phonePurple from '../../assets/images/paf.png';
import fiftyBlue from '../../assets/images/50502.png';
import askBlue from '../../assets/images/ata2.png';
import phoneBlue from '../../assets/images/paf2.png';
import { dialogConstants } from '../../constants';
import { useDialog } from '../../providers/DialogProvider';
import { useQuestion } from '../../providers/QuestionProvider';
import { actionsUtil } from '../../utils';
import styles from './Sidebar.module.css';

function ActionsBar() {
  const { open } = useDialog();
  const {currentQuestionObj, removeTwoWrongAnswers} = useQuestion();

  const handleFiftyFifty = () => {
    removeTwoWrongAnswers();
  }
  
  const handleAskTheAudience = () => {
    open(dialogConstants.dialogType.ACTION_DIALOG, {title: "Ask the audience", text: actionsUtil.askTheAudience(currentQuestionObj)});
  }

  const handlePhoneAFriend = () => {
    open(dialogConstants.dialogType.ACTION_DIALOG, {title: "Your friend says", text: actionsUtil.phoneAFriend(currentQuestionObj)});
  }

  return (
    <div className={styles.actionsWrapper}>
        <Action type={actionConstants.typeOfAction.FIFTY_FIFTY} icons={{default: fiftyPurple, hovered: fiftyBlue}} handleClick={handleFiftyFifty}/>
        <Action type={actionConstants.typeOfAction.ASK_THE_AUDIENCE} icons={{default: askPurple, hovered: askBlue}} handleClick={handleAskTheAudience}/>
        <Action type={actionConstants.typeOfAction.PHONE_A_FRIEND} icons={{default: phonePurple, hovered: phoneBlue}} handleClick={handlePhoneAFriend}/>
    </div>
  )
}

export {ActionsBar}