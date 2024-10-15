import {Router} from "express";
import artesaniaController from "../controller/ArtesaniaController";

class ArtesaniaRoute{
    public apiRutaArtesania:Router;
    
    constructor(){
        this.apiRutaArtesania = Router();
        this.misRutas();
    }

    private misRutas(){
        this.apiRutaArtesania.get("/get",artesaniaController.obtenerArtesanias)
        this.apiRutaArtesania.get("/get/:id", artesaniaController.obtenerUnaArtesania)
        this.apiRutaArtesania.post("/add", artesaniaController.agregarUnaArtesania)
        this.apiRutaArtesania.put("/update", artesaniaController.actualizarUnaArtesania)
        this.apiRutaArtesania.delete("/delete/:id", artesaniaController.eliminarUnaArtesania)
        this.apiRutaArtesania.get("/rows/", artesaniaController.obtenerNumeroFilas)
    }
}

const artesaniaRoute = new ArtesaniaRoute();

export default artesaniaRoute.apiRutaArtesania;