import Link from "next/link"

export default function Page(){
    return (
        <main className="mt-4 w-11/12 flex flex-col items-center">
            <h2 className="text-3xl text-choco font-black mb-7">Agregar Producto</h2>
            <section className="w-full">
                <form action="" className="grid grid-cols-2 rows-6 gap-5 justify-items-center">
                    <input className="bg-beige2 w-8/12 h-[50px] rounded-lg p-3" type="text" name="nombre" placeholder="Nombre producto"/>
                    <input className="bg-beige2 w-10/12 row-span-4 rounded-lg p-3 placeholder:text-myGrey" type="text" name="imageURL" placeholder="URL image"/>
                    <textarea className="bg-beige2 w-8/12 h-[200px] row-span-3 rounded-lg p-3" name="dedatalles" placeholder="Detalles"/>
                    <button className="col-span-2" type="submit">Agregar</button>
                    <Link className="col-span-2 bg-beige2 w-max px-5 py-2 text-center" href="/">Cancelar</Link>
                </form>
            </section>
        </main>
    )
}