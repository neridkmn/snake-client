let connection;

const setupInput = (conn) => {
  connection = conn;

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);

  return stdin;

};


const handleUserInput = function(key) {
  if (key === '\u0003') {
    process.exit();
  }
  if (key === "w") {
    connection.write("Move: up", () => console.log("Sent command: Move up"));
  } else if (key === "a") {
    connection.write("Move: left", () => console.log("Sent command: Move left"));
  } else if (key === "s") {
    connection.write("Move: down", () => console.log("Sent command: Move down"));
  } else if (key === "d") {
    connection.write("Move: right", () => console.log("Sent command: Move right"));
  }
};

module.exports = {
  setupInput
};