export const SQL_ARTESANIAS = ({
    GET_ALL : "SELECT id_artesania, nombre, descripcion, imagen FROM artesanias LIMIT $1 OFFSET $2",
    DELETE_ONE:"DELETE FROM artesanias WHERE id_artesania = $1 RETURNING id_artesania",
    GET_ONE:"SELECT id_artesania, nombre, descripcion, imagen FROM artesanias WHERE id_artesania = $1",
    UPDATE_ONE:"UPDATE artesanias SET nombre = $2, descripcion = $3, imagen = $4 WHERE id_artesania = $1 RETURNING id_artesania, nombre, descripcion, imagen",
    GET_ROWS_NUMBER : "SELECT COUNT(*) rows FROM artesanias",
    GET_COUNT_BY_ID: "SELECT COUNT(*) rows FROM artesanias WHERE id_artesania = $1",
    GET_COUNT_BY_NOMBRE: "SELECT COUNT(*) rows FROM artesanias WHERE nombre = $1",
    ADD_ONE :"INSERT INTO artesanias (nombre, descripcion, imagen)" +
             "VALUES ($1,$2,$3)" +
             "RETURNING id_artesania"
})