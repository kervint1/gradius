import { useAtom } from 'jotai';
import { useRouter } from 'next/router';
import { userAtom } from 'src/atoms/user';
import { apiClient } from 'src/utils/apiClient';

const Home = () => {
  const router = useRouter();
  const [user] = useAtom(userAtom);
  // スタートボタンが押されたときの処理
  const handleStartButtonClick = async () => {
    console.log('Before post request');
    try {
      const response = await apiClient.game.post();
      const gameId = response.body.id;
      router.push(`/game/${gameId}`);
    } catch (error) {
      console.error('Post request failed', error); // エラーハンドリング
    }
  };

  const handleControllerButtonClick = async () => {
    try {
      await apiClient.game.post(); // 正しい関数呼び出し
      const response = await apiClient.game.post();
      const gameId = response.body.id;
      router.push(`/controller/${gameId}`);
    } catch (error) {
      console.error('Post request failed', error); // エラーハンドリング
    }
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
