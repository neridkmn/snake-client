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

  // conn.on("connect", () => {
  //   setTimeout(() => {
  //     conn.write('Move: up');
  //   }, 500);
  // });

  // conn.on("connect", () => {
  //   setTimeout(() => {
  //     conn.write('Move: left');
  //   }, 1000);
  // });

  // conn.on("connect", () => {
  //   setTimeout(() => {
  //     conn.write('Move: down');
  //   }, 1500);
  // });

  // conn.on("connect", () => {
  //   setTimeout(() => {
  //     conn.write('Move: left');
  //   }, 2000);
  // });

  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });

  return conn;
};


console.log("Connecting ...");


module.exports = {
  connect
};