const mysql = require("mysql");
const Promise = require("bluebird");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);

const dbinfo = {
  host: "localhost",
  user: "root",
  password: "cdac",
  database: "project2",
};

async function createmsg(user) {
  const connection = mysql.createConnection(dbinfo);
  await connection.connectAsync();
  let sql = `INSERT INTO chat (msg) value(?)`;
  let list = await connection.queryAsync(sql, [user]);
  await connection.endAsync();
}

let user = {
  msg: "hello!",
};

async function readmsg() {
  const connection = mysql.createConnection(dbinfo);
  await connection.connectAsync();
}
