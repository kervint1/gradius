import type { GameId } from '$/commonTypesWithClient/branded';
import type { EnemyModel } from '$/commonTypesWithClient/models';

export type Methods = {
  get: {
    query: {
      gameId: GameId;
    };
    resBody: EnemyModel[];
  };
  post: {
    reqBody: {
      gameId: string;
      x: number;
      y: number;
    };
    resBody: EnemyModel;
  };
};
