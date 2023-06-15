const net = require("net");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Connected to server. The board should display Name: NRM");
    conn.write('Name: NRM');
  });

  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });

  return conn;
};


console.log("Connecting ...");


module.exports = {
  connect
};