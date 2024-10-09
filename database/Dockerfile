# Dockerfile
FROM postgres:latest

# Copiar los scripts SQL en el directorio de inicialización
COPY ./ddl.sql /docker-entrypoint-initdb.d/
COPY ./dml.sql /docker-entrypoint-initdb.d/
