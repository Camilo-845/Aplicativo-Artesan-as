class Artesania{
    public idArtesania:number;
    public nombre:string;
    public descripcion:string;
    public image:string;

    constructor(id:number, nombre:string, descripcion:string, image:string) {
        this.idArtesania = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.image = image;
    }
}

export default Artesania;