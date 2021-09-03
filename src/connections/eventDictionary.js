// An event dicitonary that contains all of the game connection events.

const eventDictionary = {
  CONNECTION: 'connection',
  ENTER_GAME: 'enterGame',
  READY_TO_START: 'readyToStart',
  PLAYER_CONNECTED: 'playerConnected',
  GET_PLAYERS: 'getPlayers',
  GET_PELLETS: 'getPellets',
  PLAYER_MOVED: 'playerMoved',
  PELLET_DELETED: 'pelletDeleted',
  PLAYER_COLLISION: 'playerCollision',
  UPDATE_HEALTH: 'updateHealth',
  UPDATE_SIZE: 'updateSize',
  PLAYER_KILLED: 'playerKilled',
  GAME_OVER: 'gameOver',
  START_TIMER: 'startTimer',
  UPDATE_TIMER: 'updateTimer',
  TIME_UP: 'timeUp',
  PLAYER_JOINED: 'playerJoined',
  UPDATE_GAME_OVER: 'updateGameOver',
  UPDATE_SCOREBOARD: 'updateScoreboard',
  JOIN_ROOM: 'joinRoom',
  UPDATE_ROOMS: 'updateRooms',
  UPDATE_MAX_CAPACITY: 'updateMaxCapacity',
  UPDATE_TIME_UP: 'updateTimeUp',
  DISCONNECT: 'disconnect',
  PLAYER_DISCONNECTED: 'playerDisconnected',
  LEAVE_ROOM: 'leaveRoom',
};

export default eventDictionary;
