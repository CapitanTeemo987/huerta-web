import Navbar from "../components/navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="max-w-7xl mx-auto p-10">
        <h1 className="text-5xl font-bold">
          Venta de Aguacate Hass
        </h1>

        <p className="mt-4 text-xl text-gray-600">
          Calidad premium para empacadoras.
        </p>
      </main>
    </>
  );
}