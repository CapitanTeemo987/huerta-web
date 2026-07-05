import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">

        <h1 className="text-2xl font-bold text-green-700">
          Aguacates Zicuin
        </h1>

        <ul className="flex gap-8 text-lg text-gray-700 font-medium">
            <li>
                <Link href="/">Inicio</Link>
            </li>

            <li>
                <Link href="/nosotros">Nosotros</Link>
            </li>

            <li>
                <Link href="/productos">Productos</Link>
            </li>

            <li>
                <Link href="/contacto">Contacto</Link>
            </li>
        </ul>
      </div>
    </nav>
  );
}