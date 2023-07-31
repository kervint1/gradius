import { enemyUseCase } from '$/usecase/enemyUseCase';
import { defineController } from './$relay';

export default defineController(() => ({
  get: async ({ query: { gameId } }) => ({
    status: 200,
    body: await enemyUseCase.getAllEnemy(gameId),
  }),
  post: async ({ body }) => ({
    status: 201,
    body: await enemyUseCase.createEnemy(body.gameId, body.x, body.y),
  }),
}));
