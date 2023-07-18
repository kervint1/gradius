import type { BulletId, EnemyId, GameId, TaskId, UserId } from './branded';

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
  status: 'WAITING' | 'PLAYING' | 'END';
  createdAt: number;
};

export type PlayerModel = {
  userId: UserId;
  x: number;
  y: number;
  life: number;
  score: number;
  speed: number;
  gameId: GameId;
};

export type BulletModel = {
  id: BulletId;
  x: number;
  y: number;
  damage: number;
  type: 'BULLET' | 'MISSILE' | 'LASER';
  isPlayerBullet: boolean;
  gameId: GameId;
};

export type EnemyModel = {
  id: EnemyId;
  x: number;
  y: number;
  health: number;
  score: number;
  gameId: GameId;
};

export type KeyEvent = 'UP' | 'DOWN' | 'LEFT' | 'RIGHT';
