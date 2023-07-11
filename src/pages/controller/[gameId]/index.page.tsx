import { useRouter } from 'next/router';
import styles from './index.module.css';

const ControllerPage = () => {
  const router = useRouter();
  const { gameId } = router.query;
  console.log(router.query);

  return (
    <>
      <div>
        <h1>Controller Page</h1>
        <p>User ID: {gameId}</p>
      </div>
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
    </>
  );
};

export default ControllerPage;
