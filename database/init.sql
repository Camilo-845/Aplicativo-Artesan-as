

CREATE DATABASE artesanias_db;

CREATE USER artesanias_user WITH PASSWORD 'password123';
GRANT ALL PRIVILEGES ON DATABASE artesanias_db TO artesanias_user;

\c artesanias_db

CREATE TABLE artesanias (
    id_artesania SERIAL PRIMARY KEY,
    nombre VARCHAR(50),
    descripcion VARCHAR(300),
    imagen VARCHAR(150),
);

ALTER TABLE public.artesanias OWNER TO artesanias_user;

\q
