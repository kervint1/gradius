import type { PlayerModel } from '$/commonTypesWithClient/models';
import { playerRepository } from '$/repository/playerRepository';
import { UserIdParser, gameIdParser } from '$/service/idParsers';

export const playerUseCase = {
  createNewPlayer: async (gameId: string, userId: string): Promise<PlayerModel> => {
    const newPlayer: PlayerModel = {
      userId: UserIdParser.parse(userId),
      x: 0,
      y: 0,
      life: 3,
      score: 0,
      speed: 1,
      gameId: gameIdParser.parse(gameId),
    };
    await playerRepository.save(newPlayer);
    return newPlayer;
  },
  getCurrentPlayer: async (userId: string): Promise<PlayerModel> => {
    return playerRepository.read(userId);
  },
};
