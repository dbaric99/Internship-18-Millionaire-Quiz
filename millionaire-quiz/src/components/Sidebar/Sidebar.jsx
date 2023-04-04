import { ActionsBar, PlayerScore } from '.';
import styles from './Sidebar.module.css';

function Sidebar() {
  return (
    <div className={styles.wrapper}>
      <ActionsBar/>
      <PlayerScore/>
    </div>
  )
}

export {Sidebar}