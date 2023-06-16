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
    const name = process.argv.slice(2)[0] ? process.argv.slice(2)[0] : "P01"; // sliced the process arguments if the first element of the array exists use that as name. Otherwise, use default(P01) as a name
    conn.write(`Name: ${name}`);
  });

  return conn;
};

module.exports = {
  connect
};