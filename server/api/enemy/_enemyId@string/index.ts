import type { EnemyModel } from '$/commonTypesWithClient/models';

export type Methods = {
  get: {
    resBody: EnemyModel;
  };
  patch: {
    resBody: EnemyModel;
  };
  delete: {
    status: 204;
  };
};
