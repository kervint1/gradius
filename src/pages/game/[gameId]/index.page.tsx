import type { PlayerModel } from '$/commonTypesWithClient/models';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Layer, Rect, Stage } from 'react-konva';
import { apiClient } from 'src/utils/apiClient';

const GamePage = () => {
  const router = useRouter();
  const { gameId } = router.query;
  const [player, setPlayer] = useState<PlayerModel>();
  const fetchPlayer = async () => {
    const playerResponse = await apiClient.player.get();
    if (playerResponse !== null) setPlayer(playerResponse.body);
  };

  useEffect(() => {
    fetchPlayer();
  }, []);

  return (
    <div>
      <Stage width={500} height={500}>
        <Layer>
          {player && (
            <Rect
              Rect
              fill="red"
              stroke="black"
              strokeWidth={1}
              x={player.x}
              y={player.y}
              width={500}
              height={500}
            />
          )}
        </Layer>
      </Stage>
      <h1>Game Page</h1>
      <p>User ID: {gameId}</p>
    </div>
  );
};

export default GamePage;
