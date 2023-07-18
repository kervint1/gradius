import type { BulletModel } from '$/commonTypesWithClient/models';
import { bulletRepository } from '$/repository/bulletRepository';

export const bulletUseCase = {
  getBullet: async (bulletId: string): Promise<BulletModel> => {
    return await bulletRepository.read(bulletId);
  },
  getAllBullet: async (gameId: string): Promise<BulletModel[]> => {
    return await bulletRepository.readAll(gameId);
  },
  moveBullet: async (bulletId: string): Promise<BulletModel> => {
    const currentBullet = await bulletRepository.read(bulletId);

    // The value of x speed can be change later
    const movedBullet = {
      id: currentBullet.id,
      x: currentBullet.x + 20,
      y: currentBullet.y,
      damage: currentBullet.damage,
      type: currentBullet.type,
      isPlayerBullet: currentBullet.isPlayerBullet,
      gameId: currentBullet.gameId,
    };
    await bulletRepository.save(movedBullet);

    return movedBullet;
  },
};
