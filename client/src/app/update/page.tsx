"use client";

import { ChangeEvent, FormEvent, useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import {
  Artesania,
  getOneArtesania,
  updateOneArtesania,
  deleteOneArtesania
} from "@/app/conections/actions";

interface UpdateForm {
  idArtesania: number;
  nombre: string;
  descripcion: string;
  imagen: string;
}

function UpdatePage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [bgImage, setbgImage] = useState<string>("");
  const [data, setData] = useState<UpdateForm>({
    idArtesania: 0,
    nombre: "",
    descripcion: "",
    imagen: "",
  });

  const [errors, setErrors] = useState({
    nombre: "",
    descripcion: "",
    imagen: "",
  });

  const [loading, setLoading] = useState<boolean>(true);
  const [fetchError, setFetchError] = useState<string | null>(null);

  // Petición para obtener los datos de la artesanía al cargar la página
  useEffect(() => {
    const fetchData = async () => {
      try {
        const idArtesania = searchParams.get("id");
        if (!idArtesania) throw new Error("No se proporciono el pathId");
        const response = await getOneArtesania(Number.parseInt(idArtesania));
        if ("error" in response) {
          setFetchError(response.error);
        } else {
          setData({
            idArtesania: response.idArtesania,
            nombre: response.nombre,
            descripcion: response.descripcion,
            imagen: response.imagen,
          });
          setbgImage(response.imagen);
        }
      } catch (error) {
        setFetchError("Error al obtener la artesanía."+error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Manejando submit")

    // Validación de campos vacíos
    let valid = true;
    const newErrors = { nombre: "", descripcion: "", imagen: "" };

    if (!data.nombre) {
      newErrors.nombre = "El nombre del producto es obligatorio";
      valid = false;
    }

    if (!data.descripcion) {
      newErrors.descripcion = "La descripción del producto es obligatoria";
      valid = false;
    }

    if (!data.imagen) {
      newErrors.imagen = "La URL de la imagen es obligatoria";
      valid = false;
    }

    setErrors(newErrors);

    // Si todos los campos son válidos, proceder
    if (valid) {
      const newArtesania: Artesania = {
        idArtesania: data.idArtesania,
        nombre: data.nombre,
        descripcion: data.descripcion,
        imagen: data.imagen,
      };
      const addedArtesania = await updateOneArtesania(newArtesania);
      if ("error" in addedArtesania) {
        console.error("Error al Actualizar artesanías:", addedArtesania.error);
        window.alert(`Error al Actualizar artesania ${addedArtesania.error}`);
      } else {
        window.alert("Artesania Actualizada con exito");
        router.push("/");
      }
    }
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    console.log(process.env.BACKEND_HOST)
    setData((value) => ({
      ...value,
      [e.target.name]: e.target.value,
    }));

    // Limpiar el mensaje de error al modificar el campo
    setErrors((prev) => ({
      ...prev,
      [e.target.name]: "",
    }));
  };

  const handleDelete = async ()=>{
    const newArtesania: Artesania = {
        idArtesania: data.idArtesania,
        nombre: data.nombre,
        descripcion: data.descripcion,
        imagen: data.imagen,
      };
      const addedArtesania = await deleteOneArtesania(newArtesania);
      if ("error" in addedArtesania) {
        console.error("Error al Elimnar artesanía:", addedArtesania.error);
        window.alert(`Error al Eliminar artesania ${addedArtesania.error}`);
      } else {
        window.alert("Artesania eliminada con exito");
        router.push("/");
      }
  }

  if (loading)
    return (
      <>
        <p>Cargando...</p>
        <Link
          className="rounded-lg font-black text-xl col-span-2 bg-beige2 w-1/6 min-w-[300px] px-5 py-2 text-center"
          href="/"
        >
          Cancelar
        </Link>
      </>
    );
  if (fetchError)
    return (
      <>
        <p>{fetchError}</p>
        <Link
          className=" rounded-lg font-black text-xl col-span-2 bg-beige2 w-1/6 min-w-[300px] px-5 py-2 text-center"
          href="/"
        >
          Cancelar
        </Link>
      </>
    );

  return (
    <main className="mt-2 w-11/12 flex flex-col items-center">
      <Suspense>

      <h2 className="text-3xl text-choco font-black mb-3">Editar Producto</h2>
      <section className="w-full">
        <form
          action=""
          className="grid grid-cols-2 rows-6 gap-5 justify-items-center"
          onSubmit={(e) => {
            handleFormSubmit(e);
          }}
        >
          <input
            className={`bg-beige2 w-8/12 h-[50px] rounded-lg p-3 ${
              errors.nombre
                ? "border-2 border-rose-500 placeholder:text-rose-500"
                : ""
            }`}
            type="text"
            name="nombre"
            value={data.nombre}
            placeholder={errors.nombre || "Nombre producto"}
            onChange={(e) => {
              handleInputChange(e);
            }}
          />
          <textarea
            className={`bg-beige2 w-10/12 row-span-4 text-white font-white text-2xl text-shadow-lg rounded-lg p-3 placeholder:text-myGrey ${
              errors.imagen
                ? "border-2 border-rose-500 placeholder:text-rose-500"
                : ""
                }`}
            name="imagen"
            value={data.imagen}
            placeholder={errors.imagen || "Nueva Imagen"}
            onChange={(e) => {
              handleInputChange(e);
            }}
            style={{
              backgroundImage: `url("${bgImage}")`, // Ruta de la imagen
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
              paddingRight: "30px", // Espacio para la imagen
            }}
          />
          <textarea
            className={`bg-beige2 w-8/12 h-[200px] row-span-3 rounded-lg p-3 ${
              errors.descripcion
                ? "border-2 border-rose-500 placeholder:text-rose-500"
                : ""
            }`}
            name="descripcion"
            value={data.descripcion}
            placeholder={errors.descripcion || "Descripcion producto"}
            onChange={(e) => {
              handleInputChange(e);
            }}
          />
          <button
            className="font-black text-xl col-span-2 bg-choco text-white w-1/6 min-w-[300px] px-5 py-2 text-center rounded-lg"
            type="submit"
          >
            Editar
          </button>
          <button
            className="font-black text-xl text-choco col-span-2 border-4 border-choco w-1/6 min-w-[300px] px-5 py-2 text-center rounded-lg"
            onClick={()=>handleDelete()}
            type="button"
          >
            Eliminar
          </button>
          <Link
            className="font-black text-xl col-span-2 bg-beige2 w-1/6 min-w-[300px] px-5 py-2 text-center rounded-lg"
            href="/"
          >
            Cancelar
          </Link>
        </form>
      </section>
            </Suspense>
    </main>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <UpdatePage />
    </Suspense>
  );
}
