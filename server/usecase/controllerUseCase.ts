import type { KeyEvent } from '$/commonTypesWithClient/models';
import { playerRepository } from '$/repository/playerRepository';
import { playerUseCase } from './playerUseCase';

export const controllerUseCase = {
  movement: async (userId: string, keyEvent: KeyEvent): Promise<void> => {
    const player = await playerUseCase.getCurrentPlayer(userId);

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
};
