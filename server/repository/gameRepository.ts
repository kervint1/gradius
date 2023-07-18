import type { GameModel } from '$/commonTypesWithClient/models';
import { gameIdParser } from '$/service/idParsers';
import { prismaClient } from '$/service/prismaClient';
import type { Game } from '@prisma/client';
import { z } from 'zod';

const toModel = (prismaGame: Game): GameModel => ({
  id: gameIdParser.parse(prismaGame.id),
  status: z.enum(['WAITING', 'PLAYING', 'END']).parse(prismaGame.status),
  createdAt: prismaGame.createdAt.getTime(),
});

export const gameRepository = {
  create: async (game: GameModel): Promise<void> => {
    await prismaClient.game.create({
      data: {
        id: game.id,
        status: game.status,
        createdAt: new Date(game.createdAt),
      },
    });
  },
  read: async (gameId: string): Promise<GameModel> => {
    const game = await prismaClient.game.findFirst({
      where: { id: gameId },
    });
    if (!game) throw new Error("Game doesn't exist");
    return toModel(game);
  },
  readByUserId: async (userId: string): Promise<GameModel | null> => {
    const game = await prismaClient.game.findFirst({
      where: {
        player: {
          userId,
        },
      },
    });
    if (!game) return null;
    return toModel(game);
  },
  delete: async (gameId: string): Promise<void> => {
    await prismaClient.game.delete({
      where: { id: gameId },
    });
  },
};
