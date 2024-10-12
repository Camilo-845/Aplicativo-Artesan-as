"use client"

import Link from "next/link"
import { Artesania } from "../conections/actions"
import Image from "next/image"
import { getArtesanias } from "../conections/actions";
import { useState, useEffect } from 'react';
import PaginationComponent from "@/app/components/Pagination";


export default function Artesanias(){
  interface PaginationState {
    page: number;
    limit: number;
    artesanias: {
      [page: number]: Artesania[]; // Cada página tiene un array de 'Artesania'
    };
  }
  
  // Luego puedes usar este tipo en tu useState:
  const [pagination, setPagination] = useState<PaginationState>({
    page: 1,
    limit: 21,
    artesanias: {1:[]},
  });
  const [loading, setLoading] = useState(true);

  // Función para cargar los datos de artesanías
  const fetchData = async (page: number) => {
    setLoading(true);
  
    // Obtén las artesanías para la página solicitada
    const data = await getArtesanias(page, pagination.limit);
  
    // Actualiza el estado agregando los datos en la clave de la página correspondiente
    setPagination((prev) => ({
      ...prev,
      artesanias: {
        ...prev.artesanias, // Mantén las artesanías previas
        [page]: data,       // Almacena las artesanías en la clave de la página solicitada
      },
      page, // Actualiza el número de página actual
    }));
  
    setLoading(false);
  };

  // Cargar los datos cuando el componente se monte
  useEffect(() => {
    fetchData(pagination.page);
  }, []);

  // Función para cambiar de página
  const handlePageChange = (newPage:number) => {
    if(newPage > 0 && newPage != pagination.page){
      fetchData(newPage);
    }
  };

    return (
      <>
        <section className="w-full grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] auto-rows-[440px] gap-4 mb-5">
            {
              pagination.artesanias[pagination.page]?pagination.artesanias[pagination.page].map((el)=>{
                return(
                  <article key={el.idArtesania} className="bg-beige2 rounded-xl relative overflow-hidden flex flex-col items-center">
                    <Image  
                      src="https://www.civitatis.com/f/colombia/villa-de-leyva/galeria/big/maestro-artesano-raquira.jpg" 
                      alt=""
                      className="h-[60%] w-auto object-cover"
                      width={500} // Puedes ajustar estos valores
                      height={400} // Puedes ajustar estos valores
                    />
                    <h3 className="font-black text-3xl leading-12 line-clamp-3 text-shadow-lg mx-3 text-center">{el.nombre}</h3>
                    <p className="font-bold text-xl leading-none line-clamp-3 text-center mx-3">{el.descripcion}</p>
                    <Link href={`/update?id=${el.idArtesania}`} className="absolute right-0 top-0 m-2 bg-beige2 p-2 rounded-full">
                      <svg className="fill-chocoBlack" xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px"><path d="m370-80-16-128q-13-5-24.5-12T307-235l-119 50L78-375l103-78q-1-7-1-13.5v-27q0-6.5 1-13.5L78-585l110-190 119 50q11-8 23-15t24-12l16-128h220l16 128q13 5 24.5 12t22.5 15l119-50 110 190-103 78q1 7 1 13.5v27q0 6.5-2 13.5l103 78-110 190-118-50q-11 8-23 15t-24 12L590-80H370Zm70-80h79l14-106q31-8 57.5-23.5T639-327l99 41 39-68-86-65q5-14 7-29.5t2-31.5q0-16-2-31.5t-7-29.5l86-65-39-68-99 42q-22-23-48.5-38.5T533-694l-13-106h-79l-14 106q-31 8-57.5 23.5T321-633l-99-41-39 68 86 64q-5 15-7 30t-2 32q0 16 2 31t7 30l-86 65 39 68 99-42q22 23 48.5 38.5T427-266l13 106Zm42-180q58 0 99-41t41-99q0-58-41-99t-99-41q-59 0-99.5 41T342-480q0 58 40.5 99t99.5 41Zm-2-140Z"/></svg>
                    </Link>
                  </article>
                )
              }):<></>
            }
            
          </section>
          <PaginationComponent 
            handlePageChange = {handlePageChange}
            firstPage={1}
            currentPage={pagination.page}
            lastPage={4}
          />
        </>
    )
}