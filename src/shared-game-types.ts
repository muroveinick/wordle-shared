// Simple shared game types for real-time word sharing

export interface SharedGame {
  gameId: string;
  word: string;
  players: SharedPlayer[];
  createdAt: Date;
  createdBy: string; // User ID who created the game
}

export interface SharedPlayer {
  userId: string;
  username: string;
  guesses: string[];
  results: string[][]; // Array of guess results
  isComplete: boolean;
  isWon: boolean;
  lastActivity: Date;
}

// Socket events for shared games
export interface SharedGameEvents {
  // Join a shared game by gameId
  'shared-game-join': (data: { gameId: string }) => void;
  
  // Broadcast a guess to all players in the game
  'shared-game-guess': (data: { 
    gameId: string; 
    guess: string; 
    result: string[];
    isComplete: boolean;
    isWon: boolean;
  }) => void;
  
  // Leave a shared game
  'shared-game-leave': (data: { gameId: string }) => void;
}

// Socket responses
export interface SharedGameResponses {
  // Sent when successfully joined a game
  'shared-game-joined': (data: { 
    game: SharedGame; 
    player: SharedPlayer;
  }) => void;
  
  // Sent when a player makes a guess
  'shared-game-player-guess': (data: {
    gameId: string;
    player: SharedPlayer;
    guess: string;
    result: string[];
  }) => void;
  
  // Sent when a player joins
  'shared-game-player-joined': (data: {
    gameId: string;
    player: SharedPlayer;
  }) => void;
  
  // Sent when a player leaves
  'shared-game-player-left': (data: {
    gameId: string;
    userId: string;
    username: string;
  }) => void;
  
  // Error handling
  'shared-game-error': (data: { message: string }) => void;
}