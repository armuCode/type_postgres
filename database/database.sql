CREATE DATABASE invultec

CREATE TABLE reference (
  id SERIAL PRIMARY KEY,
  tipo VARCHAR(40),
  name TEXT
);

INSERT INTO reference (tipo, name )
  VALUES ('fuelle', 'caja direccion')
        ('guardapolvo', 'lado derecho')