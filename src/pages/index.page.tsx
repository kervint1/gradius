import { useRouter } from 'next/router';

const Home = () => {
  const router = useRouter();

  // スタートボタンが押されたときの処理
  const handleStartButtonClick = () => {
    const slug = 'abc';

    router.push(`/game/${slug}`);
  };
  const handleControllerButtonClick = () => {
    const slug = 'abc';

    router.push(`/controller/${slug}`);
  };

  return (
    <div>
      <h1>Home</h1>
      <button onClick={handleStartButtonClick}>Start</button>
      <button onClick={handleControllerButtonClick}>Controller</button>
    </div>
  );
};

export default Home;
