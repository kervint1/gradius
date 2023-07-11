import type { BulletModel } from '$/commonTypesWithClient/models';
import { gameIdParser } from '$/service/idParsers';
import { prismaClient } from '$/service/prismaClient';
import type { Bullet } from '@prisma/client';
import { z } from 'zod';

const toModel = (prismaBullet: Bullet): BulletModel => ({
  id: prismaBullet.id,
  x: prismaBullet.x,
  y: prismaBullet.y,
  damage: prismaBullet.damage,
  type: z.enum(['BULLET', 'MISSILE', 'LASER']).parse(prismaBullet.type),
  isPlayerBullet: prismaBullet.isPlayerBullet,
  gameId: gameIdParser.parse(prismaBullet.gameId),
});

export const bulletRepository = {
  save: async (bullet: BulletModel): Promise<void> => {
    await prismaClient.bullet.upsert({
      where: { id: bullet.id },
      update: {
        x: bullet.x,
        y: bullet.y,
      },
      create: {
        id: bullet.id,
        x: bullet.x,
        y: bullet.y,
        damage: bullet.damage,
        type: bullet.type,
        isPlayerBullet: bullet.isPlayerBullet,
        gameId: bullet.gameId,
      },
    });
  },
  readAll: async (gameId: string): Promise<BulletModel[]> => {
    const bullet = await prismaClient.bullet.findMany({ where: { gameId } });
    return bullet.map(toModel);
  },
  read: async (bulletId: number): Promise<BulletModel> => {
    const bullet = await prismaClient.bullet.findFirst({
      where: { id: bulletId },
    });
    if (!bullet) throw new Error("bullet doesn't exist");
    return toModel(bullet);
  },
  delete: async (bulletId: number): Promise<void> => {
    await prismaClient.bullet.delete({
      where: { id: bulletId },
    });
  },
};
