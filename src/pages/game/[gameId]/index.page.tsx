import { useRouter } from 'next/router';

const GamePage = () => {
  const router = useRouter();
  const { gameId } = router.query;

  return (
    <div>
      <h1>Game Page</h1>
      <p>User ID: {gameId}</p>
    </div>
  );
};

export default GamePage;
