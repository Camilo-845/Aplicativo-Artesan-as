'use client'


import Link from "next/link"
import Image from "next/image";

export default function Page() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <nav className="mb-1">
        <ul className="flex text-xl italic text-choco font-bold">
          <li className="mx-4"><a href="#inicio">Inicio</a></li>
          <li className="mx-4"><a href="#productos">productos</a></li>
          <li className="mx-4"><a href="#contacto">Contacto</a></li>
        </ul>
      </nav>
      <main className="mt-4 w-11/12">
        <section className="grid grid-cols-2 gap-4 auto-rows-[13rem] ">
          <article className="bg-myGray row-span-2 rounded-lg relative text-white overflow-hidden">
            <img 
              className="h-full w-auto object-cover absolute z-0"
              src="https://d3nmwx7scpuzgc.cloudfront.net/sites/default/files/media/image/raquira-artesanias-640x400.jpg" 
              alt="Imagene ceramicas de boyacá" />
            <article className="z-10 absolute inset-x-0 bottom-0 m-4 ">
              <h3 className="font-black text-5xl leading-12 text-shadow-lg">Artesanías Boyacenses: Tradición y Cultura</h3>
              <p className="font-black text-2xl leading-6 text-shadow-lg">Explora la riqueza artesanal de Boyacá, donde cada pieza está hecha con pasión, reflejando siglos de historia y creatividad</p>
            </article>
          </article>
          <article className="bg-myGray rounded-lg relative text-white overflow-hidden">
            <img 
              src="https://caracol.com.co/resizer/v2/https%3A%2F%2Fcloudfront-us-east-1.images.arcpublishing.com%2Fprisaradioco%2FJP35SF4XIBL47NPJRTOJKBUZ7E.jpg?auth=239e166ac2016ddea2739f2d9f2848d1fe87a45f9edecba814ac24836fed133e&height=625&width=1080&quality=70&smart=true" 
              alt="imagen artesanias de Colombia" 
              className="w-full h-auto object-cover absolute z-0"/>
            <article className="z-10 absolute inset-x-0 bottom-0 m-4 "  >
              <h3 className="font-black text-4xl leading-12 text-shadow-lg">Cerámica Ancestral: Arte que Trasciende</h3>
              <p className="font-black text-xl leading-6 text-shadow-lg">Cada pieza es una obra maestra, creada con técnicas ancestrales que han pasado de generación en generación. Lleva a tu hogar el espíritu de Boyacá</p>
            </article>
          </article>
          <article className="bg-myGray rounded-lg relative text-white overflow-hidden">
            <img 
              className="w-full h-auto object-cover absolute z-0"
              src="https://www.civitatis.com/f/colombia/villa-de-leyva/galeria/big/maestro-artesano-raquira.jpg" 
              alt="Artesano de nuestra tierra" />
            <article className="z-10 absolute inset-x-0 bottom-0 m-4 ">
              <h3 className="font-black text-4xl leading-12 text-shadow-lg">Tejidos y Texturas: El Arte en tus Manos</h3>
              <p className="font-black text-xl leading-6 text-shadow-lg">Delicados tejidos que combinan colores y formas tradicionales, creados por manos expertas que dan vida a la esencia de nuestra tierra</p>
            </article>
          </article>
        </section>

        {/* Seccion Productos */}
        <section className="mt-5 flex flex-col items-center relative" id="productos">
          <h2 className="text-3xl text-choco font-black mb-7">Productos</h2>
          <Link className="absolute right-0 m-2 bg-beige p-2 rounded-full" href="/add">
            <svg className="fill-white" xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" ><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/></svg>
          </Link>
          <section className="w-full grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] auto-rows-[400px] gap-4">
            <article className="bg-beige2 rounded-xl relative overflow-hidden flex flex-col items-center">
              <img 
              className="h-[70%] object-cover"
              src="https://www.civitatis.com/f/colombia/villa-de-leyva/galeria/big/maestro-artesano-raquira.jpg" 
              alt="" />
              <h3 className="font-black text-3xl leading-12 line-clamp-3 text-shadow-lg mx-3">Nombre Producto</h3>
              <p className="font-bold text-xl leading-none line-clamp-3 text-center mx-3">Descripcion Producto: Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsumasfasfasfd asdfasfasfasfdasf asf asf a sfd </p>
              <Link href={"/update?id="} className="absolute right-0 top-0 m-2 bg-beige2 p-2 rounded-full">
                <svg className="fill-chocoBlack" xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px"><path d="m370-80-16-128q-13-5-24.5-12T307-235l-119 50L78-375l103-78q-1-7-1-13.5v-27q0-6.5 1-13.5L78-585l110-190 119 50q11-8 23-15t24-12l16-128h220l16 128q13 5 24.5 12t22.5 15l119-50 110 190-103 78q1 7 1 13.5v27q0 6.5-2 13.5l103 78-110 190-118-50q-11 8-23 15t-24 12L590-80H370Zm70-80h79l14-106q31-8 57.5-23.5T639-327l99 41 39-68-86-65q5-14 7-29.5t2-31.5q0-16-2-31.5t-7-29.5l86-65-39-68-99 42q-22-23-48.5-38.5T533-694l-13-106h-79l-14 106q-31 8-57.5 23.5T321-633l-99-41-39 68 86 64q-5 15-7 30t-2 32q0 16 2 31t7 30l-86 65 39 68 99-42q22 23 48.5 38.5T427-266l13 106Zm42-180q58 0 99-41t41-99q0-58-41-99t-99-41q-59 0-99.5 41T342-480q0 58 40.5 99t99.5 41Zm-2-140Z"/></svg>
              </Link>
            </article>
          </section>
        </section>

        {/* Seccion contactos */}
        <footer className="mt-7 flex flex-col items-center w-full" id="contacto">
          <h2 className="text-3xl text-choco font-black mb-7" >Contacto</h2>
          <section className="flex justify-around w-full items-center">
            <Image
              src="./media/logo.svg"
              width={300}
              height={100}
              alt="Logo Artesanias nuestra tierra"
              priority
            />
            <article className="text-2xl font-black italic">
              <p>352 234 31 21</p>
              <p>artenasnias@gmail.com</p>
            </article>
          </section>
        </footer>
      </main>
      <button onClick={scrollToTop} className="fixed bottom-0 right-0 m-4" >
        <svg className="fill-foreground"
          xmlns="http://www.w3.org/2000/svg"
          height="40px"
          viewBox="0 -960 960 960"
          width="40px"
        >
          <path d="M440-160v-487L216-423l-56-57 320-320 320 320-56 57-224-224v487h-80Z" />
        </svg>
      </button>
    </>
  );
}
