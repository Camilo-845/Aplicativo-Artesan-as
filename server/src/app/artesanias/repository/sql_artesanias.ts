export const SQL_ARTESANIAS = ({
    GET_ALL : "SELECT c.id_artesania, c.nombre, c.descripcion, c.imagen FROM artesanias c LIMIT $1 OFFSET $2",
})