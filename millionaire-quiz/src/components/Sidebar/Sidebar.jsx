import { ActionsBar, PlayerScore, Scoreboard } from '.';
import styles from './Sidebar.module.css';

function Sidebar() {
  return (
    <div className={styles.wrapper}>
      <ActionsBar/>
      <PlayerScore/>
      <Scoreboard/>
    </div>
  )
}

export {Sidebar}