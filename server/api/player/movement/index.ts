import type { KeyEvent } from '$/commonTypesWithClient/models';

export type Methods = {
  patch: {
    reqBody: {
      keyEvent: KeyEvent;
    };
  };
};
