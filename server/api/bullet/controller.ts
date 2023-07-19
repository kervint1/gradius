import { bulletUseCase } from '$/usecase/bulletUseCase';
import { controllerUseCase } from '$/usecase/controllerUseCase';
import { defineController } from './$relay';

export default defineController(() => ({
  get: async ({ query: { gameId } }) => ({
    status: 200,
    body: await bulletUseCase.getAllBullet(gameId),
  }),
  post: async ({ query: { gameId }, user }) => {
    await controllerUseCase.shoot(gameId, user.id);
    return { status: 204 };
  },
}));
