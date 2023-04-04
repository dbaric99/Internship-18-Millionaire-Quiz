import { Action } from '.';
import {actionConstants} from '../../constants';
import fiftyPurple from '../../assets/images/5050.jpg';
import askPurple from '../../assets/images/ata.jpg';
import phonePurple from '../../assets/images/paf.png';
import fiftyBlue from '../../assets/images/50502.png';
import askBlue from '../../assets/images/ata2.png';
import phoneBlue from '../../assets/images/paf2.png';
import styles from './Sidebar.module.css';

function ActionsBar() {
  return (
    <div className={styles.actionsWrapper}>
        <Action type={actionConstants.FIFTY_FIFTY} icons={{default: fiftyPurple, hovered: fiftyBlue}}/>
        <Action type={actionConstants.ASK_THE_AUDIENCE} icons={{default: askPurple, hovered: askBlue}}/>
        <Action type={actionConstants.PHONE_A_FRIEND} icons={{default: phonePurple, hovered: phoneBlue}}/>
    </div>
  )
}

export {ActionsBar}