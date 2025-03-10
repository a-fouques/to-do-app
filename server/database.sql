CREATE DATABASE todoapp;

CREATE TABLE todo(
    todo_id serial PRIMARY KEY,
    description VARCHAR(255)
);