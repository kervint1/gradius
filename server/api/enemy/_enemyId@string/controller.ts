import { enemyUseCase } from '$/usecase/enemyUseCase';
import { defineController } from './$relay';

export default defineController(() => ({
  get: async ({ params: { enemyId } }) => ({
    status: 200,
    body: await enemyUseCase.getEnemy(enemyId),
  }),
  patch: async ({ params: { enemyId } }) => ({
    status: 200,
    body: await enemyUseCase.moveEnemy(enemyId),
  }),
  delete: async ({ params: { enemyId } }) => {
    await enemyUseCase.deleteEnemy(enemyId);
    return { status: 204 };
  },
}));
