import { playerUseCase } from '$/usecase/playerUseCase';
import { defineController } from './$relay';

export default defineController(() => ({
  get: async ({ user }) => ({ status: 200, body: await playerUseCase.getCurrentPlayer(user.id) }),
}));
