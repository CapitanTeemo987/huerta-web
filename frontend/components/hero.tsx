import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen">

      <Image src="/images/hero.jpg" alt="Huerta de aguacates" fill priority className="object-cover"/>

      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 h-full items-center flex justify-center">

        <div className="max-w-xl p-10 bg-white/90">

          <h1 className="text-6xl font-bold text-black text-center">
              Aguacate Hass Premium
          </h1>
          
          <p className="mt-6 text-lg leading-8 text-gray-900">
            Productores comprometidos con ofrecer fruta de la más alta
            calidad para empacadoras nacionales e internacionales.
          </p>

          <button
            className="mt-10 rounded-xl bg-green-600 px-8 py-4 text-lg font-semibold text-white transition hover:bg-green-700">
            Solicitar cotización
          </button>

        </div>

      </div>
    </section>
  );
}