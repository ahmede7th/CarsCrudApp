
\c benzdb;

DROP TABLE IF EXISTS benzdb;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS posts;

CREATE TABLE IF NOT EXISTS benzdb(
  id SERIAL PRIMARY KEY,
  name VARCHAR,
  num VARCHAR,
  exp INTEGER,
  height INTEGER,
  weight INTEGER,
  type VARCHAR
);



CREATE TABLE IF NOT EXISTS users(
  id SERIAL PRIMARY KEY,
  name VARCHAR,
  password VARCHAR
);



CREATE TABLE IF NOT EXISTS posts(
  id SERIAL PRIMARY KEY,
  post_title VARCHAR,
  post_content TEXT,
  date_created date DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE comments (
id SERIAL PRIMARY KEY,
comment_content TEXT,
data_created TIMESTAMP NOT NULL DEFAULT NOW()
);
