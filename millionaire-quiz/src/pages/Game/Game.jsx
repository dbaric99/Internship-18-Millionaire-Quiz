import { MainScreen, MainTitle, Sidebar } from '../../components';
import { SwitchDialog } from '../../components/Dialogs/SwitchDialog';
import styles from './Game.module.css';

function Game() {
  return (
    <div className={styles.gameWrapper}>
        <MainTitle />
        <div className={styles.gameContentWrapper}>
          <MainScreen />
          <Sidebar />
        </div>
        <SwitchDialog/>
    </div>
  )
}

export {Game}