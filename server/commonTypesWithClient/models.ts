import type { GameId, TaskId, UserId } from './branded';

export type UserModel = {
  id: UserId;
  email: string;
  displayName: string | undefined;
  photoURL: string | undefined;
};

export type TaskModel = {
  id: TaskId;
  label: string;
  done: boolean;
  created: number;
};

export type GameModel = {
  id: GameId;
  status: string;
  createdAt: number;
};

export type PlayerModel = {
  userId: UserId;
  life: number;
  score: number;
  speed: number;
  gameId: GameId;
};

export type BulletModel = {
  id: number;
  damage: number;
  type: string;
  isPlayerBullet: boolean;
  playerUserId?: UserId;
  enemyId?: number;
};

export type EnemyModel = {
  id: number;
  health: number;
  score: number;
  gameId: GameId;
};
