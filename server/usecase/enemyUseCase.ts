import type { EnemyModel } from '$/commonTypesWithClient/models';
import { enemyRepository } from '$/repository/enemyRepository';
import { enemyIdParser, gameIdParser } from '$/service/idParsers';
import { randomUUID } from 'crypto';

export const enemyUseCase = {
  getEnemy: async (enemyId: string): Promise<EnemyModel> => {
    return await enemyRepository.read(enemyId);
  },
  getAllEnemy: async (gameId: string): Promise<EnemyModel[]> => {
    return await enemyRepository.readAll(gameId);
  },
  createEnemy: async (gameId: string, x: number, y: number): Promise<EnemyModel> => {
    // 体力、スコアは敵によって変更していい
    const newEnemy: EnemyModel = {
      id: enemyIdParser.parse(randomUUID()),
      x,
      y,
      health: 10,
      score: 10,
      gameId: gameIdParser.parse(gameId),
    };
    await enemyRepository.create(newEnemy);

    return newEnemy;
  },
  moveBullet: async (enemyId: string): Promise<EnemyModel> => {
    const currentEnemy = await enemyRepository.read(enemyId);

    // xは現在ずっと左の方に行くようにする
    const movedEnemy = {
      id: currentEnemy.id,
      x: currentEnemy.x - 20,
      y: currentEnemy.y,
      health: currentEnemy.health,
      score: currentEnemy.score,
      gameId: currentEnemy.gameId,
    };
    await enemyRepository.update(movedEnemy);

    return movedEnemy;
  },
  deleteEnemy: async (enemyId: string): Promise<void> => {
    await enemyRepository.delete(enemyId);
  },
};
