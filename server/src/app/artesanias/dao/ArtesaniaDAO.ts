import { Response } from "express";
import { SQL_ARTESANIAS } from "../repository/sql_artesanias";
import pool from "../../../config/connection/dbConnection";
import Artesania from "../entity/Artesania";

class ArtesaniaDAO{
    protected static async getAll(params:any, res:Response){
        await pool.manyOrNone(SQL_ARTESANIAS.GET_ALL,params)
        .then((response)=>{
            res.status(200).json(response)
        })
        .catch((error)=>{
            res.status(400).json({Result: "Error on getAll Artesanias"})
        })
    }
}

export default ArtesaniaDAO;