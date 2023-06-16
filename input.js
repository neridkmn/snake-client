const { COMMANDS } = require("./constants");

let connection;

const setupInput = (conn) => { // connection between client and server after pressing any key
  connection = conn;

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);

  return stdin;
};

const handleUserInput = function(key) { // To quit the game
  if (key === '\u0003') {
    process.exit();
  }

  if (!Object.keys(COMMANDS).includes(key)) { // if the player press any key other than 'w,a, s, d, m'
    return;
  }

  connection.write(COMMANDS[key]);//To send the server the movement messages
};

module.exports = {
  setupInput
};