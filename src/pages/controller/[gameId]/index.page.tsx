import type { KeyEvent } from '$/commonTypesWithClient/models';
import { useRouter } from 'next/router';
import { apiClient } from 'src/utils/apiClient';
import styles from './index.module.css';

const initKey: KeyEvent[] = ['UP', 'DOWN', 'LEFT', 'RIGHT'];

const ControllerPage = () => {
  const router = useRouter();
  const { gameId } = router.query;
  console.log(router.query);
  const keyEvent = async (keyType: KeyEvent) => {
    await apiClient.player.movement.patch({ body: { keyEvent: keyType } });
  };
  return (
    <>
      <div>
        <h1>Controller Page</h1>
        <p>User ID: {gameId}</p>
      </div>
      <div className={styles.controller}>
        <div className={styles.cross}>
          <div className={styles.top} onClick={() => keyEvent(initKey[1])} />
          <div className={styles.left} onClick={() => keyEvent(initKey[2])} />
          <div className={styles.right} onClick={() => keyEvent(initKey[3])} />
          <div className={styles.bottom} onClick={() => keyEvent(initKey[0])} />
          <div className={styles.center} />
        </div>
        <div className={styles.button}>
          <div className={styles.btnone} />
          <div className={styles.btntwo} />
        </div>
      </div>
    </>
  );
};

export default ControllerPage;
