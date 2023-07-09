import { controllerUseCase } from '$/usecase/controllerUseCase';
import { defineController } from './$relay';

export default defineController(() => ({
  patch: ({ body, user }) => ({
    status: 204,
    body: controllerUseCase.movement(user.id, body.keyEvent),
  }),
}));
