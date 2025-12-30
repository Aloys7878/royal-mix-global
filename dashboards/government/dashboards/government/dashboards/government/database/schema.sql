CREATE TABLE users (
  id TEXT PRIMARY KEY,
  name TEXT,
  role TEXT
);

CREATE TABLE videos (
  id TEXT PRIMARY KEY,
  title TEXT,
  views INTEGER
);

CREATE TABLE agents (
  id TEXT PRIMARY KEY,
  level TEXT,
  trust_score INTEGER
);

CREATE TABLE projects (
  id TEXT PRIMARY KEY,
  budget INTEGER,
  progress INTEGER
);
