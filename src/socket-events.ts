export interface GameStartedData {
  gameId: string;
  guesses: string[];
  results: string[][];
}

export interface GuessResultData {
  guess: string;
  result: string[];
  isComplete: boolean;
  isWon: boolean;
  word?: string;
}

export interface ErrorData {
  message: string;
}

export interface InvalidWordData {
  guess: string;
  message: string;
}

export interface JoinedRoomData {
  roomId: string;
  playerCount: number;
}

export interface PlayerJoinedData {
  playerId: string;
  playerCount: number;
}

export interface PlayerLeftData {
  playerId: string;
  playerCount: number;
}

export interface PlayerGuessData {
  playerId: string;
  guess: string;
  result: string[];
  isComplete: boolean;
  isWon: boolean;
  word?: string;
}

export interface JoinGameData {
  playerId: string;
  roomId?: string;
}

export interface StartGameData {
  playerId: string;
}

export interface MakeGuessData {
  gameId: string;
  guess: string;
}

export interface SharedGamePlayer {
  userId: string;
  username: string;
  guesses: string[];
  results: string[][];
  isComplete: boolean;
  isWon: boolean;
}

export interface SharedGameCreatedData {
  gameId: string;
  word?: string;
  players: SharedGamePlayer[];
}

export interface SharedGameJoinedData {
  gameId: string;
  players: SharedGamePlayer[];
  currentPlayer: SharedGamePlayer;
}

export interface SharedGamePlayerJoinedData {
  gameId: string;
  player: SharedGamePlayer;
}

export interface SharedGamePlayerLeftData {
  gameId: string;
  userId: string;
  username: string;
}

export interface SharedGamePlayerGuessData {
  gameId: string;
  player: SharedGamePlayer;
  guess: string;
  result: string[];
}

export interface SharedGameLeftData {
  gameId: string;
}

export interface SharedGameJoinData {
  gameId: string;
}

export interface SharedGameGuessData {
  gameId: string;
  guess: string;
}

export interface SharedGameLeaveData {
  gameId: string;
}

export interface ServerToClientEvents {
  // Single Player Events
  'game-started': (data: GameStartedData) => void;
  'guess-result': (data: GuessResultData) => void;
  'invalid-word': (data: InvalidWordData) => void;
  'error': (data: ErrorData) => void;
  'joined-room': (data: JoinedRoomData) => void;
  'player-joined': (data: PlayerJoinedData) => void;
  'player-left': (data: PlayerLeftData) => void;
  'player-guess': (data: PlayerGuessData) => void;
  'game-started-by-player': (data: GameStartedData) => void;
  
  // Shared Game Events
  'shared-game-created': (data: SharedGameCreatedData) => void;
  'shared-game-joined': (data: SharedGameJoinedData) => void;
  'shared-game-player-joined': (data: SharedGamePlayerJoinedData) => void;
  'shared-game-player-left': (data: SharedGamePlayerLeftData) => void;
  'shared-game-guess-result': (data: GuessResultData) => void;
  'shared-game-player-guess': (data: SharedGamePlayerGuessData) => void;
  'shared-game-left': (data: SharedGameLeftData) => void;
  'shared-game-error': (data: ErrorData) => void;
}

export interface ClientToServerEvents {
  // Single Player Events
  'join-game': (data: JoinGameData) => void;
  'start-game': (data: StartGameData) => void;
  'make-guess': (data: MakeGuessData) => void;
  
  // Shared Game Events
  'shared-game-create': () => void;
  'shared-game-join': (data: SharedGameJoinData) => void;
  'shared-game-guess': (data: SharedGameGuessData) => void;
  'shared-game-leave': (data: SharedGameLeaveData) => void;
}