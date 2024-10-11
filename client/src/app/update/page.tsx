import Link from "next/link"

export default function Page(){
    return (
        <main className="mt-2 w-11/12 flex flex-col items-center">
            <h2 className="text-3xl text-choco font-black mb-3">Editar Producto</h2>
            <section className="w-full">
                <form action="" className="grid grid-cols-2 rows-6 gap-5 justify-items-center">
                    <input className="bg-beige2 w-8/12 h-[50px] rounded-lg p-3" type="text" name="nombre"/>
                    <input className="bg-beige2 w-10/12 row-span-4 rounded-lg p-3 placeholder:text-myGrey" type="text" name="imageURL"/>
                    <textarea className="bg-beige2 w-8/12 h-[200px] row-span-3 rounded-lg p-3" name="dedatalles"/>
                    <button className="font-black text-xl col-span-2 bg-choco text-white w-1/6 min-w-[300px] px-5 py-2 text-center rounded-lg" type="submit">Editar</button>
                    <button className="font-black text-xl text-choco col-span-2 border-4 border-choco w-1/6 min-w-[300px] px-5 py-2 text-center rounded-lg" type="submit">Eliminar</button>
                    <Link className="font-black text-xl col-span-2 bg-beige2 w-1/6 min-w-[300px] px-5 py-2 text-center rounded-lg" href="/">Cancelar</Link>
                </form>
            </section>
        </main>
    )
}