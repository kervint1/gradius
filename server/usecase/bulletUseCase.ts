import type { BulletModel } from '$/commonTypesWithClient/models';
import { bulletRepository } from '$/repository/bulletRepository';

export const bulletUseCase = {
  getBullet: async (bulletId: number): Promise<BulletModel> => {
    return await bulletRepository.read(bulletId);
  },
  getAllBullet: async (gameId: string): Promise<BulletModel[]> => {
    return await bulletRepository.readAll(gameId);
  },
};
