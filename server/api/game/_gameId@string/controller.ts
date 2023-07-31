import { gameUseCase } from '$/usecase/gameUseCase';
import { defineController } from './$relay';
//display
export default defineController(() => ({
  get: async ({ params: { gameId } }) => ({ status: 200, body: await gameUseCase.getGame(gameId) }),
}));
