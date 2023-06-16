const net = require("net");
const { IP, PORT } = require("./constants");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    const name = process.argv.slice(2)[0] ? process.argv.slice(2)[0] : "P01";
    conn.write(`Name: ${name}`);
  });

  return conn;
};

module.exports = {
  connect
};