import { Request, Response } from "express";
import ArtesaniaDAO from "../dao/ArtesaniaDAO";
import Artesania from "../entity/Artesania";

class ArtesaniaController extends ArtesaniaDAO{
    public obtenerArtesanias(req: Request, res: Response){
        const limit = Number(req.query.limit) || 10
        const page = Number(req.query.page) || 1
        ArtesaniaDAO.getAll([limit, (page - 1) * limit], res);
    }

    public obtenerUnaArtesania(req: Request, res: Response){
        if (!req.params.id) {
            res.status(400).json({ result: "Error: El parámetro id no se proporcionó" });
        }
    
        const idNumber = parseInt(req.params.id);
    
        if (isNaN(idNumber) || !Number.isInteger(idNumber) || idNumber <= 0) {
            res.status(400).json({ result: "Error: El parámetro id no tiene el formato adecuado, solo se permiten números naturales" });
        }
    
        ArtesaniaDAO.getOne([idNumber], res);
    }

    public eliminarUnaArtesania(req: Request, res: Response){
        if (!req.params.id) {
            res.status(400).json({ result: "Error: El parámetro id no se proporcionó" });
        }
        
        const idNumber = parseInt(req.params.id);
        
        if (isNaN(idNumber) || !Number.isInteger(idNumber) || idNumber <= 0) {
            res.status(400).json({ result: "Error: El parámetro id no tiene el formato adecuado, solo se permiten números naturales" });
        }
        
        const artesania = new Artesania(idNumber, "", "", "")
        ArtesaniaDAO.deleteOne(artesania, res)
    }
    
    public actualizarUnaArtesania(req: Request, res: Response){
        if(!req.body.idArtesania || !req.body.nombre || !req.body.descripcion || !req.body.imagen){
            res.status(400).json({ result: "Error: Faltan paramentros para esta petición" });
        }
        const idNumber = parseInt(req.body.idArtesania);
        
        if (isNaN(idNumber) || !Number.isInteger(idNumber) || idNumber <= 0) {
            res.status(400).json({ result: "Error: El parámetro id no tiene el formato adecuado, solo se permiten números naturales" });
        }
        
        const artesania = new Artesania(idNumber,req.body.nombre,req.body.descripcion, req.body.imagen)

        ArtesaniaDAO.updateOne(artesania,res)
    }

    public agregarUnaArtesania(req:Request, res:Response){
        if(!req.body.nombre || !req.body.descripcion || !req.body.imagen){
            res.status(400).json({ result: "Error: Faltan paramentros para esta petición" });
        }
        else{
            const artesania = new Artesania(0,req.body.nombre,req.body.descripcion, req.body.imagen)
            ArtesaniaDAO.addOne(artesania,res)
        }
    }

    public obtenerNumeroFilas(req:Request, res:Response){
        ArtesaniaDAO.getCountAllRows([],res)
    }
    
}

const artesaniaController = new ArtesaniaController();
export default artesaniaController;