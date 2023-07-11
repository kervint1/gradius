import { useRouter } from 'next/router';

const ControllerPage = () => {
  const router = useRouter();
  const { gameId } = router.query;
  console.log(router.query);

  return (
    <div>
      <h1>Controller Page</h1>
      <p>User ID: {gameId}</p>
    </div>
  );
};

export default ControllerPage;
