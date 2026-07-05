export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-20 flex items-center justify-between">

      <div className="max-w-xl">

        <h1 className="text-5xl font-bold text-green-700">
          Aguacate Hass Premium
        </h1>

        <p className="mt-6 text-lg text-gray-600">
          Productores comprometidos con la calidad y el suministro
          confiable para empacadoras nacionales e internacionales.
        </p>

        <button className="mt-8 bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800 transition">
          Solicitar cotización
        </button>

      </div>

      <div>

        <img
          src="/images/hero.jpg"
          alt="Imagen de arboles de aguacate"
          className="rounded-sm shadow-sm w-[500px]"
        />

      </div>

    </section>
  );
}