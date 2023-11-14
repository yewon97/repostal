import styles from './SubHeader.module.scss';

export default function SubHeader({ title }) {
  return (
    <div className={styles.cont_title_wrap}>
      <h2 className={styles.cont_title}>{title}</h2>
    </div>
  );
}
