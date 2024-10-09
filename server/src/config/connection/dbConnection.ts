import dotenv from "dotenv";
import pgPromise from "pg-promise";
import { optionsPG } from "./optionsPG";

dotenv.config({
    path: ".env",
}); 

const db_name = String(process.env.DB_NAME);
const db_user = String(process.env.DB_USER);
const db_port = Number(process.env.DB_PORT);
const db_host = String(process.env.DB_HOST);
const db_password = String(process.env.DB_PASSWORD);

const pgp = pgPromise(optionsPG);
const pool = pgp({
    user: db_user,
    password: db_password,
    port: db_port,
    database: db_name,
    host: db_host
}); 

pool.connect().then((miCone) => {
    console.log("Conectado a la base de datos", db_name);
    miCone.done();
}).catch((miError) => {
    console.log(miError);
});

export default pool;