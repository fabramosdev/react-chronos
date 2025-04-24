import { TimerIcon } from 'lucide-react';
import styles from './styles.module.css';

function Logo() {
  return (
    <>
      <a href='#' className={styles.logoLink}>
        <TimerIcon />
        <span>Chronos</span>
      </a>
    </>
  );
}

export { Logo };
