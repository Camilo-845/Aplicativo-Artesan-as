
const backendURL:string|undefined = process.env.BACKEND_HOST;

export interface Artesania {
    idArtesania: number;
    nombre: string;
    imagen: string;
    descripcion: string;
    
  }

export async function getArtesanias(page:number, limit:number) :Promise<Artesania[]>{
    const res = await fetch((backendURL?backendURL:"http://localhost:8080/")+`artesania?page=${page?page:1}&&limit=${limit?limit:20}`)
    return res.json()
}           