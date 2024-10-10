# Aplicativo Artesanias
Aplicativo web para control de items relacionados con las artesanias de Boyáca

## Carcteristicas
- Obten una gran de artesanias
- Gran diseño de aplicacion
## Tecnologias
- **Front:** React (TypeScript)
- [**Backend:**](./server/) NodeJs (TypeScript)
- [**Persistencia:**](/database/) Postgresql
- **Empaquedo**: docker
- **Control de versiones**: Git
## Inicializar Proyecto
Crear un archivo .env en la raiz del proyecto con el siguiente formato
```
# Configuración de la base de datos
DB_NAME=db_artesanias
DB_USER=artesanias_user
DB_PASSWORD=1234
DB_PORT=5434
DB_HOST=db

# Configuración del servidor
PORT=8080

# Nombres de los contenedores
DB_CONTAINER_NAME=postgres_artesanias
SERVER_CONTAINER_NAME=api_server
```
### Usando docker
Se debe tener intalado previamente [docker](https://docs.docker.com/engine/install/) y [docker-compose](https://docs.docker.com/compose/install/)
```sh
docker-compose up --build -d
```
