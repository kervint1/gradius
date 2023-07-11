import type { EnemyModel } from '$/commonTypesWithClient/models';
import { gameIdParser } from '$/service/idParsers';
import { prismaClient } from '$/service/prismaClient';
import type { Enemy } from '@prisma/client';

const toModel = (prismaEnemy: Enemy): EnemyModel => ({
  id: prismaEnemy.id,
  x: prismaEnemy.x,
  y: prismaEnemy.y,
  health: prismaEnemy.health,
  score: prismaEnemy.score,
  gameId: gameIdParser.parse(prismaEnemy.gameId),
});

export const enemyRepository = {
  save: async (enemy: EnemyModel): Promise<void> => {
    await prismaClient.enemy.upsert({
      where: { id: enemy.id },
      update: {
        x: enemy.x,
        y: enemy.y,
        health: enemy.health,
      },
      create: {
        id: enemy.id,
        x: enemy.x,
        y: enemy.y,
        health: enemy.health,
        score: enemy.score,
        gameId: enemy.gameId,
      },
    });
  },
  readAll: async (gameId: string): Promise<EnemyModel[]> => {
    const enemy = await prismaClient.enemy.findMany({ where: { gameId } });
    return enemy.map(toModel);
  },
  read: async (enemyId: number): Promise<EnemyModel> => {
    const enemy = await prismaClient.enemy.findFirst({
      where: { id: enemyId },
    });
    if (!enemy) throw new Error("Enemy doesn't exist");
    return toModel(enemy);
  },
  delete: async (enemyId: number): Promise<void> => {
    await prismaClient.enemy.delete({
      where: { id: enemyId },
    });
  },
};
