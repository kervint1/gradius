import { bulletUseCase } from '$/usecase/bulletUseCase';
import { defineController } from './$relay';

export default defineController(() => ({
  get: async ({ params: { bulletId } }) => ({
    status: 200,
    body: await bulletUseCase.getBullet(bulletId),
  }),
}));
