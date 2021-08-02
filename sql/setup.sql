DROP TABLE IF EXISTS albums;
DROP TABLE IF EXISTS fruits;
DROP TABLE IF EXISTS pies;
DROP TABLE IF EXISTS movies;
DROP TABLE IF EXISTS books;

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

CREATE TABLE pies (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  type TEXT NOT NULL,
  whole_pie BOOL NOT NULL,
  slice BOOL NOT NULL,
  slice_quantity INTEGER NOT NULL
);

CREATE TABLE movies (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  title TEXT NOT NULL,
  director TEXT NOT NULL,
  year_released INTEGER NOT NULL,
  domestic_box_office TEXT NOT NULL
);

CREATE TABLE books (
id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
title TEXT NOT NULL,
author TEXT NOT NULL,
genre TEXT NOT NULL,
isbn_10 INTEGER NOT NULL,
page_count INTEGER NOT NULL
);