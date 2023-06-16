const { connect } = require("./client");
const { setupInput } = require("./input");

console.log("Connecting ...");

const connection = connect(); // assigned connect function to a new variable for calling it in the setupInput function to make it more clear.
setupInput(connection);