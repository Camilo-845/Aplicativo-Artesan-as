"use client"; // Asegúrate de agregar esto al inicio

import Link from "next/link";
import { ChangeEvent, FormEvent, useState } from "react";
import { Artesania } from "../conections/actions";
import { addOneArtesania } from "../conections/actions";

import { useRouter } from "next/navigation";

interface AddForm {
  nombre: string;
  descripcion: string;
  imagen: string;
}

export default function Page() {
  const [data, setData] = useState<AddForm>({
    nombre: "",
    descripcion: "",
    imagen: "",
  });

  const [errors, setErrors] = useState({
    nombre: "",
    descripcion: "",
    imagen: "",
  });

  const router = useRouter();

  async function handleFormSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

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
      const newArtesania:Artesania = {
        idArtesania: 0,
        nombre: data.nombre,
        descripcion: data.descripcion,
        imagen: data.imagen
      };
      const addedArtesania = await addOneArtesania(newArtesania)
      if ('error' in addedArtesania ) {
        console.error("Error al obtener las artesanías:", addedArtesania.error);
        window.alert(`Error al crear artesania ${addedArtesania.error}`)
      }
      else{
          window.alert("Artesania Agregada con exito")
          router.push("/")
      }
    }
  }

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
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

  return (
    <main className="mt-4 w-11/12 flex flex-col items-center">
      <h2 className="text-3xl text-choco font-black mb-7">Agregar Producto</h2>
      <section className="w-full">
        <form
          onSubmit={handleFormSubmit}
          className="grid grid-cols-2 rows-6 gap-5 justify-items-center"
        >
          <input
            className={`bg-beige2 w-8/12 h-[50px] rounded-lg p-3 ${
              errors.nombre
                ? "border-2 border-rose-500 placeholder:text-rose-500"
                : ""
            }`}
            type="text"
            name="nombre"
            placeholder={errors.nombre || "Nombre producto"}
            onChange={handleInputChange}
          />
          <input
            className={`bg-beige2 w-10/12 row-span-4 rounded-lg p-3 placeholder:text-myGrey ${
              errors.imagen
                ? "border-2 border-rose-500 placeholder:text-rose-500"
                : ""
            }`}
            type="text"
            name="imagen"
            placeholder={errors.imagen || "URL imagen"}
            onChange={handleInputChange}
          />
          <textarea
            className={`bg-beige2 w-8/12 h-[200px] row-span-3 rounded-lg p-3 ${
              errors.descripcion
                ? "border-2 border-rose-500 placeholder:text-rose-500"
                : ""
            }`}
            name="descripcion"
            placeholder={errors.descripcion || "Detalles"}
            onChange={handleInputChange}
          />
          <button className="col-span-2" type="submit">
            Agregar
          </button>
          <Link
            className="col-span-2 bg-beige2 w-max px-5 py-2 text-center"
            href="/"
          >
            Cancelar
          </Link>
        </form>
      </section>
    </main>
  );
}
