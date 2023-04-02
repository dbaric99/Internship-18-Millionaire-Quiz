import styles from './Game.module.css';

function Game() {
  return (
    <div>
        <div className={styles.titleWrapper}>
            <h2 className={styles.smallTitle}>Who</h2>
            <h2 className={styles.smallTitle}>Wants</h2>
            <h2 className={styles.smallTitle}>to</h2>
            <h2 className={styles.smallTitle}>Win</h2>
            <h2 className={styles.smallTitle}>a</h2>
            <h1 className={styles.title}>Million</h1>
        </div>
    </div>
  )
}

export {Game}