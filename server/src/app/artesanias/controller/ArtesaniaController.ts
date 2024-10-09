import { Request, Response } from "express";
import ArtesaniaDAO from "../dao/ArtesaniaDAO";
import Artesania from "../entity/Artesania";

class ArtesaniaController extends ArtesaniaDAO{
    public obtenerArtesanias(req: Request, res: Response){
        const limit = Number(req.query.limit) || 10
        const page = Number(req.query.page) || 1
        ArtesaniaDAO.getAll([limit, (page - 1) * limit], res);
    }
}

const artesaniaController = new ArtesaniaController();
export default artesaniaController;