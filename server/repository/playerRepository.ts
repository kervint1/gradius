import type { PlayerModel } from '$/commonTypesWithClient/models';
import { UserIdParser, gameIdParser } from '$/service/idParsers';
import { prismaClient } from '$/service/prismaClient';
import type { Player } from '@prisma/client';

const toModel = (prismaPlayer: Player): PlayerModel => ({
  userId: UserIdParser.parse(prismaPlayer.userId),
  x: prismaPlayer.x,
  y: prismaPlayer.y,
  life: prismaPlayer.life,
  score: prismaPlayer.score,
  speed: prismaPlayer.speed,
  gameId: gameIdParser.parse(prismaPlayer.gameId),
});

export const PlayerRepository = {
  save: async (player: PlayerModel): Promise<void> => {
    await prismaClient.player.upsert({
      where: { userId: player.userId },
      update: {
        x: player.x,
        y: player.y,
        life: player.life,
        score: player.score,
        speed: player.speed,
      },
      create: {
        userId: player.userId,
        x: player.x,
        y: player.y,
        life: player.life,
        score: player.score,
        speed: player.speed,
        gameId: player.gameId,
      },
    });
  },
  read: async (userId: string): Promise<PlayerModel> => {
    const player = await prismaClient.player.findFirst({
      where: { userId },
    });
    if (!player) throw new Error("Player doesn't exist");
    return toModel(player);
  },
  delete: async (userId: string): Promise<void> => {
    await prismaClient.player.delete({
      where: { userId },
    });
  },
};
