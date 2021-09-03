import collidePlayers from './collidePlayers';

// Event dictionary:

import eventDictionary from '../../connections/eventDictionary';

// Socket connection events:

const { PLAYER_COLLISION } = eventDictionary;

function checkCollision(myPlayer, players, playerIndex, connection, ctx) {
  // An array of all the active players in the game other than the client.

  // console.log('The currentPlayers array in checkCollision:', players);

  let otherPlayers = players.filter((player, index) => {
    if (index != playerIndex && player.active) {
      return player;
    }
  });

  // console.log('The otherPlayers array in check collision:', otherPlayers);

  // Calculates whether the player has collided with another player by cross-referencing their coordinates.

  for (let index = 0; index < otherPlayers.length; index++) {
    const distanceX = myPlayer.x - otherPlayers[index].x;
    const distanceY = myPlayer.y - otherPlayers[index].y;
    const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

    // A conditional statement which collides the player they overlap, or returns if no collision is detected.

    if (distance < myPlayer.r + otherPlayers[index].r) {
      collidePlayers(myPlayer, otherPlayers[index]);

      // Visual Feedback player 1
      ctx.fillStyle = 'white';
      ctx.beginPath();
      ctx.arc(myPlayer.x, myPlayer.y, myPlayer.r, 0, Math.PI * 2);
      ctx.fill();

      // Visual Feedback player 2
      ctx.beginPath();
      ctx.arc(
        otherPlayers[index].x,
        otherPlayers[index].y,
        otherPlayers[index].r,
        0,
        Math.PI * 2
      );
      ctx.fill();

      connection.emit(PLAYER_COLLISION, {
        otherPlayerIndex: otherPlayers[index].index,
      });
    }
  }
}

export default checkCollision;
