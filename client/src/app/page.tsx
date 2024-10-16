import Link from "next/link";
import Image from "next/image";
import Artesanias from "./components/Artesanias";

export default async function Page() {
  return (
    <>
      <nav className="mb-1">
        <ul className="flex text-xl italic text-choco font-bold">
          <li className="mx-4 hover:scale-110 transition duration-300">
            <a href="#inicio">Inicio</a>
          </li>
          <li className="mx-4 hover:scale-110 transition duration-300">
            <a href="#productos">productos</a>
          </li>
          <li className="mx-4 hover:scale-110 transition duration-300">
            <a href="#contacto">Contacto</a>
          </li>
        </ul>
      </nav>
      <main className="mt-4 w-11/12">
        <section className="grid grid-cols-2 gap-4 auto-rows-[13rem] ">
          <article className="bg-myGray row-span-2 rounded-lg relative text-white overflow-hidden group">
            <Image
              className="w-full h-full object-cover absolute z-0 group-hover:scale-110 transition duration-200"
              src="https://d3nmwx7scpuzgc.cloudfront.net/sites/default/files/media/image/raquira-artesanias-640x400.jpg"
              alt="Imagen cerámicas de Boyacá"
              layout="fill"
              objectFit="cover"
              priority={true}
            />
            <article className="z-10 absolute inset-x-0 bottom-0 m-4 ">
              <h3 className="font-black text-5xl leading-12 text-shadow-lg">
                Artesanías Boyacenses: Tradición y Cultura
              </h3>
              <p className="font-black text-2xl leading-6 text-shadow-lg">
                Explora la riqueza artesanal de Boyacá, donde cada pieza está
                hecha con pasión, reflejando siglos de historia y creatividad
              </p>
            </article>
          </article>
          <article className="bg-myGray rounded-lg relative text-white overflow-hidden group">
            <Image
              src="https://caracol.com.co/resizer/v2/https%3A%2F%2Fcloudfront-us-east-1.images.arcpublishing.com%2Fprisaradioco%2FJP35SF4XIBL47NPJRTOJKBUZ7E.jpg?auth=239e166ac2016ddea2739f2d9f2848d1fe87a45f9edecba814ac24836fed133e&height=625&width=1080&quality=70&smart=true"
              alt="Imagen artesanías de Colombia"
              layout="fill"
              objectFit="cover"
              priority={true}
              className="absolute z-0 group-hover:scale-110 transition duration-200"
            />
            <article className="z-10 absolute inset-x-0 bottom-0 m-4">
              <h3 className="font-black text-4xl leading-12 text-shadow-lg">
                Cerámica Ancestral: Arte que Trasciende
              </h3>
              <p className="font-black text-xl leading-6 text-shadow-lg">
                Cada pieza es una obra maestra, creada con técnicas ancestrales
                que han pasado de generación en generación. Lleva a tu hogar el
                espíritu de Boyacá
              </p>
            </article>
          </article>
          <article className="bg-myGray rounded-lg relative text-white overflow-hidden group">
            <Image
              className="h-full w-full object-cover absolute z-0 group-hover:scale-110 transition duration-200"
              src="https://www.civitatis.com/f/colombia/villa-de-leyva/galeria/big/maestro-artesano-raquira.jpg"
              alt="Artesano de nuestra tierra"
              layout="fill"
              objectFit="cover"
              priority={true}
            />
            <article className="z-10 absolute inset-x-0 bottom-0 m-4">
              <h3 className="font-black text-4xl leading-12 text-shadow-lg">
                Tejidos y Texturas: El Arte en tus Manos
              </h3>
              <p className="font-black text-xl leading-6 text-shadow-lg">
                Delicados tejidos que combinan colores y formas tradicionales,
                creados por manos expertas que dan vida a la esencia de nuestra
                tierra
              </p>
            </article>
          </article>
        </section>

        {/* Seccion Productos */}
        <section
          className="mt-5 flex flex-col items-center relative"
          id="productos"
        >
          <h2 className="text-3xl text-choco font-black mb-7">Productos</h2>
          <Link
            className="absolute right-0 m-2 bg-beige p-2 rounded-full hover:scale-110 transition duration-300"
            href="/add"
          >
            <svg
              className="fill-white"
              xmlns="http://www.w3.org/2000/svg"
              height="30px"
              viewBox="0 -960 960 960"
              width="30px"
            >
              <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
            </svg>
          </Link>
          <Artesanias></Artesanias>
        </section>

        {/* Seccion contactos */}
        <footer
          className="mt-7 flex flex-col items-center w-full"
          id="contacto"
        >
          <h2 className="text-3xl text-choco font-black mb-7">Contacto</h2>
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
    </>
  );
}
