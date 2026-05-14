import Link from "next/link"

export function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center bg-dark-brown">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src="assets/hero.jpeg" alt="Herramientas" className="w-full h-full object-cover opacity-100" />
        <div className="absolute inset-0 bg-dark-brown/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 md:px-12 lg:px-16 py-24 md:py-32 max-w-3xl">
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-off-white leading-tight mb-6 text-balance">
          TU CABELLO, EN SU VERSIÓN MÁS NATURAL Y ELEGANTE
        </h1>
        <p className="text-off-white/90 text-lg md:text-xl mb-8 max-w-xl">
          Cuidamos cada detalle con técnicas personalizadas, tratamientos naturales que realzan tu brillo real.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="#experiencia"
            className="bg-off-white text-dark-brown px-6 py-3 text-sm font-medium rounded-sm hover:bg-off-white/90 transition-colors"
          >
            Vivir la experiencia
          </Link>
          <Link
            href="#reserva"
            className="border border-off-white text-off-white px-6 py-3 text-sm font-medium rounded-sm hover:bg-off-white hover:text-dark-brown transition-all"
          >
            Pedir cita
          </Link>
        </div>
      </div>
    </section>
  )
}
