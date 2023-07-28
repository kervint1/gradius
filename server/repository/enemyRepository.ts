import type { EnemyModel } from '$/commonTypesWithClient/models';
import { enemyIdParser, gameIdParser } from '$/service/idParsers';
import { prismaClient } from '$/service/prismaClient';
import type { Enemy } from '@prisma/client';

const toModel = (prismaEnemy: Enemy): EnemyModel => ({
  id: enemyIdParser.parse(prismaEnemy.id),
  x: prismaEnemy.x,
  y: prismaEnemy.y,
  health: prismaEnemy.health,
  score: prismaEnemy.score,
  gameId: gameIdParser.parse(prismaEnemy.gameId),
});

export const enemyRepository = {
  create: async (enemy: EnemyModel): Promise<EnemyModel> => {
    const newEnemy = await prismaClient.enemy.create({
      data: {
        id: enemy.id,
        x: enemy.x,
        y: enemy.y,
        health: enemy.health,
        score: enemy.score,
        gameId: enemy.gameId,
      },
    });
    return toModel(newEnemy);
  },
  readAll: async (gameId: string): Promise<EnemyModel[]> => {
    const enemy = await prismaClient.enemy.findMany({ where: { gameId } });
    return enemy.map(toModel);
  },
  read: async (enemyId: string): Promise<EnemyModel> => {
    const enemy = await prismaClient.enemy.findFirst({
      where: { id: enemyId },
    });
    if (!enemy) throw new Error("Enemy doesn't exist");
    return toModel(enemy);
  },
  update: async (enemy: EnemyModel): Promise<EnemyModel> => {
    const updatedEnemy = await prismaClient.enemy.update({
      where: { id: enemy.id },
      data: {
        x: enemy.x,
        y: enemy.y,
        health: enemy.health,
      },
    });
    return toModel(updatedEnemy);
  },
  delete: async (enemyId: string): Promise<void> => {
    await prismaClient.enemy.delete({
      where: { id: enemyId },
    });
  },
};
