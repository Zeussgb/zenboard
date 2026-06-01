const Database = require('better-sqlite3')
const path = require('path')

const db = new Database(path.join(__dirname, '../../zenboard.db'))

// Creamos las tablas si no existen
db.exec(`
  CREATE TABLE IF NOT EXISTS notes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    content TEXT DEFAULT '',
    category TEXT DEFAULT 'Personal',
    createdAt TEXT
  );

  CREATE TABLE IF NOT EXISTS tasks (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    description TEXT DEFAULT '',
    category TEXT DEFAULT 'Personal',
    completed INTEGER DEFAULT 0,
    deadline TEXT,
    createdAt TEXT
  );
`)

module.exports = db