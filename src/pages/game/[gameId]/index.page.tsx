import type { PlayerModel } from '$/commonTypesWithClient/models';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { apiClient } from 'src/utils/apiClient';

const GamePage = () => {
  const router = useRouter();
  const { gameId } = router.query;
  const [Player, setPlayer] = useState<PlayerModel>();
  const fetchTasks = async () => {
    const Player1 = await apiClient.player.get();
    if (Player1 !== null) setPlayer(Player);
  };

  // const move = async () => {
  //   await apiClient.player.movement.patch({ body: { keyEvent: 'UP' } });
  //   await fetchTasks();
  // };

  useEffect(() => {
    fetchTasks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h1>Game Page</h1>
      <p>User ID: {gameId}</p>
    </div>
  );
};

export default GamePage;
