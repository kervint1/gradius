import styles from './index.module.css';

const Home = () => {
  return (
    <div className={styles.controller}>
      <div className={styles.cross}>
        <div className={styles.top} />
        <div className={styles.left} />
        <div className={styles.right} />
        <div className={styles.bottom} />
        <div className={styles.center} />
      </div>
      <div className={styles.btnone} />
      <div className={styles.btntwo} />
    </div>
  );
};

export default Home;
