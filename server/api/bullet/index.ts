import type { GameId } from '$/commonTypesWithClient/branded';
import type { BulletModel } from '$/commonTypesWithClient/models';

// ここではGameIdの型を使うのかstringなのかを迷った
export type Methods = {
  get: {
    query: {
      gameId: GameId;
    };
    resBody: BulletModel[];
  };
  post: {
    query: {
      gameId: GameId;
    };
  };
};
