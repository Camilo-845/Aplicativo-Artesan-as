import {Router} from "express";
import artesaniaController from "../controller/ArtesaniaController";

class ArtesaniaRoute{
    public apiRutaArtesania:Router;
    
    constructor(){
        this.apiRutaArtesania = Router();
        this.misRutas();
    }

    private misRutas(){
        this.apiRutaArtesania.get("",artesaniaController.obtenerArtesanias)
    }
}

const artesaniaRoute = new ArtesaniaRoute();

export default artesaniaRoute.apiRutaArtesania;