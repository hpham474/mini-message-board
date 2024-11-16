const pool = require("./pool");

async function getAllMessages() {
  const { rows } = await pool.query("SELECT * FROM messages;");
  return rows;
}

async function insertMessage(message, username) {
  await pool.query(
    `
    INSERT INTO messages (message, username)
    VALUES
      ($1, $2);
    `,
    [message, username]
  );
}

async function getMessage(id) {
  const { rows } = await pool.query(
    `
    SELECT * FROM messages
    WHERE id=($1)
    `,
    [id]
  );
  return rows;
}

module.exports = {
  getAllMessages,
  insertMessage,
  getMessage,
};
