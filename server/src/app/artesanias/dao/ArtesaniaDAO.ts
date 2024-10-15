import { Response } from "express";
import { errors } from "pg-promise";
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
            console.error("Error on GetMany: ", error.message)
            res.status(400).json({Result: "Error on getAll Artesanias"})
        })
    }

    protected static async getOne(params:[number], res:Response){
        await pool.oneOrNone(SQL_ARTESANIAS.GET_ONE,params)
        .then((response)=>{
            if(response == null){
                throw new Error("No se enctontro el dato con el id dado");
            }
            else{
                res.status(200).json(response)
            }
        })
        .catch((error:Error)=>{
            console.log("Error en GetOne: ");
            if(error instanceof errors.QueryResultError){
                console.error("No se esperaman más de una columna en la respuesta, ", error.message)
                res.status(400).json({result: "Error on getOne Artesania no se esparaba mas de un resultado en la respuesta"})
            }
            else{
                console.error("Error on GetOne: ", error.message)
                res.status(400).json({result: `Error on getOne Artesania :${error.message}`})
            }
        })
    }

    protected static async deleteOne(params: Artesania, res:Response){
        await pool.task(async (result)=>{
            const countQuery = await result.one(SQL_ARTESANIAS.GET_COUNT_BY_ID,[params.idArtesania])
            if(countQuery.rows != 1){
                throw new Error("No se encontro el dato con el id proporcionado")
            }
            return await result.one(SQL_ARTESANIAS.DELETE_ONE,[params.idArtesania])
            
        })
        .then((response)=>{
            res.status(200).json(response)
        })
        .catch((error:Error)=>{
            console.error("Error on deleteOne: ", error.message)
            res.status(400).json({result: `Error on deleteOne Artesania : ${error.message}`})
        })
    }
    
    protected static async updateOne(params: Artesania, res:Response){
        await pool.task(async (result)=>{
            const countQuery = await result.one(SQL_ARTESANIAS.GET_COUNT_BY_ID,[params.idArtesania])
            if(countQuery.rows != 1){
                throw new Error("No se encontro el dato con el id proporcionado")
            }
            return await pool.one(SQL_ARTESANIAS.UPDATE_ONE, [params.idArtesania,params.nombre, params.descripcion, params.image])
            
        })
        .then((response)=>{
            res.status(200).json(response)
        })
        .catch((error:Error)=>{
            console.error("Error on updateOne: ", error.message)
            res.status(400).json({result: "Error on updateOne Artesania"})
        })
    }
    
    protected static async getCountAllRows(params: any, res: Response){
        await pool.one(SQL_ARTESANIAS.GET_ROWS_NUMBER,[])
        .then((response=>{
            res.status(200).json({rows:response.rows})
        }))
        .catch((error:Error)=>{
            console.error("Error on updateOne: ", error.message)
            res.status(400).json({result: "Error on getAllRows Artesania"})
        })
    }

    protected static async addOne(params:Artesania , res:Response){
        await pool.task(async (result)=>{
            const rowsQuery = await result.one(SQL_ARTESANIAS.GET_COUNT_BY_NOMBRE,params.nombre);
            if(rowsQuery.rows >= 1){
                throw new Error("El nombre proporciando esta repetido")
            }
            else{
                return await result.one(SQL_ARTESANIAS.ADD_ONE, [params.nombre,params.descripcion,params.image])
            }
        })
        .then((response)=>{
            res.status(200).json(response)
        })
        .catch((error:Error)=>{
            console.error("Error on addOne Artesania: ", error.message)
            res.status(400).json({result: `Error on addOne Artesania : ${error.message}`})
        })
    }
}
export default ArtesaniaDAO;