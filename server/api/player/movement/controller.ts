import { controllerUseCase } from '$/usecase/controllerUseCase';
import { defineController } from './$relay';

export default defineController(() => ({
  patch: async ({ body, user }) => {
    await controllerUseCase.movement(user.id, body.keyEvent);
    return { status: 204 };
  },
}));
