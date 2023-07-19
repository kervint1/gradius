import type { PlayerModel } from '$/commonTypesWithClient/models';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { apiClient } from 'src/utils/apiClient';

const GamePage = () => {
  const router = useRouter();
  const { gameId } = router.query;
  const [player, setPlayer] = useState<PlayerModel>();
  const fetchPlayer = async () => {
    const playerResponse = await apiClient.player.get();
    if (playerResponse !== null) setPlayer(playerResponse.body);
  };

  // const move = async () => {
  //   await apiClient.player.movement.patch({ body: { keyEvent: 'UP' } });
  //   await fetchPlayer();
  // };

  useEffect(() => {
    fetchPlayer();
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
