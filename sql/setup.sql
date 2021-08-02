DROP TABLE IF EXISTS albums;
DROP TABLE IF EXISTS fruits;

CREATE TABLE albums (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  name TEXT NOT NULL,
  artist TEXT NOT NULL,
  year_released INTEGER NOT NULL
);

CREATE TABLE fruits (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  name TEXT NOT NULL,
  sweet BOOL NOT NULL,
  tree_fruit BOOL NOT NULL
);