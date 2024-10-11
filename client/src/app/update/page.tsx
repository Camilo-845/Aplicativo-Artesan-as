import Link from "next/link"

export default function Page(){
    return (
        <main>
            <h2>Editar Producto</h2>
            <section>
                <form action="">
                    <input type="text" name="nombre"/>
                    <input type="text" name="dedatalles"/>
                    <input type="text" name="imageURL"/>
                    <button type="submit">Agregar</button>
                </form>
                <Link href="/">Cancelar</Link>
            </section>
        </main>
    )
}