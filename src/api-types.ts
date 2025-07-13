export interface StartGameRequest {
  playerId: string;
}

export interface StartGameResponse {
  gameId: string;
  guesses: string[];
}

export interface MakeGuessRequest {
  gameId: string;
  guess: string;
}

export interface MakeGuessResponse {
  guess: string;
  result: string[];
  isComplete: boolean;
  isWon: boolean;
  word?: string;
}

export interface GetStatsRequest {
  playerId: string;
}

export interface GetStatsResponse {
  totalGames: number;
  wonGames: number;
  winRate: number;
}

export interface GetGameRequest {
  gameId: string;
}

export interface GetGameResponse {
  gameId: string;
  guesses: string[];
  results: string[][];
  isComplete: boolean;
  isWon: boolean;
  word?: string;
}

export interface RegisterRequest {
  username: string;
  email: string;
  password: string;
}

export interface LoginRequest {
  username: string;
  password: string;
}

export interface AuthResponse {
  token: string;
  user: {
    id: string;
    username: string;
    email: string;
  };
}

export interface User {
  id: string;
  username: string;
  email: string;
  createdAt: Date;
}