import { gameUseCase } from '$/usecase/gameUseCase';
import { defineController } from './$relay';

export default defineController(() => ({
  post: async ({ user }) => ({ status: 201, body: await gameUseCase.createNewGame(user.id) }),
}));
