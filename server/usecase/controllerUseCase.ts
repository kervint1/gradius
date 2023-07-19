import type { BulletModel, KeyEvent } from '$/commonTypesWithClient/models';
import { bulletRepository } from '$/repository/bulletRepository';
import { playerRepository } from '$/repository/playerRepository';
import { bulletIdParser, gameIdParser } from '$/service/idParsers';
import { randomUUID } from 'crypto';

export const controllerUseCase = {
  movement: async (userId: string, keyEvent: KeyEvent): Promise<void> => {
    const player = await playerRepository.read(userId);

    switch (keyEvent) {
      case 'UP':
        player.y += player.speed;
        break;
      case 'DOWN':
        player.y -= player.speed;
        break;
      case 'LEFT':
        player.x -= player.speed;
        break;
      case 'RIGHT':
        player.x += player.speed;
        break;
      default:
        break;
    }
    await playerRepository.save(player);
  },
  shoot: async (gameId: string, userId: string): Promise<void> => {
    const player = await playerRepository.read(userId);

    const newBullet: BulletModel = {
      id: bulletIdParser.parse(randomUUID()),
      x: player.x,
      y: player.y,
      damage: 10,
      type: 'BULLET',
      isPlayerBullet: true,
      gameId: gameIdParser.parse(gameId),
    };
    await bulletRepository.save(newBullet);
  },
};
