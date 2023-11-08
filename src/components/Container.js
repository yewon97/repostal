import styles from './Container.module.scss';

export default function Container({ children }) {
  return (
    <section id="tab1" className={styles.cont_container}>
      {children}
    </section>
  );
}
