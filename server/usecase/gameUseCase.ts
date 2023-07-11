import type { GameModel } from '$/commonTypesWithClient/models';
import { gameRepository } from '$/repository/gameRepository';
import { playerRepository } from '$/repository/playerRepository';
import { gameIdParser } from '$/service/idParsers';
import { randomUUID } from 'crypto';
import { playerUseCase } from './playerUseCase';

export const gameUseCase = {
  createNewGame: async (userId: string): Promise<GameModel> => {
    if (await playerRepository.read(userId))
      throw new Error('Player already existed in another game');

    // Create new player the same time game is created
    const newGame: GameModel = {
      id: gameIdParser.parse(randomUUID()),
      status: 'PLAYING',
      createdAt: Date.now(),
    };
    await gameRepository.create(newGame);
    await playerUseCase.createNewPlayer(newGame.id, userId);

    return newGame;
  },
  getGame: async (gameId: string): Promise<GameModel> => {
    return await gameRepository.read(gameId);
  },
};
