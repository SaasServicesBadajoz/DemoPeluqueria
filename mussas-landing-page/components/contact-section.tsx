import Image from "next/image"
import Link from "next/link"

export function ContactSection() {
  return (
    <section id="reserva" className="relative bg-dark-brown min-h-[500px] md:min-h-[600px]">
      <div className="flex items-center justify-center min-h-[500px] md:min-h-[600px]">
        {/* Text Content */}
        <div className="flex items-center ml-12 px-6 md:px-12 lg:px-16 py-16 md:py-24">
          <div className="max-w-md">
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-off-white mb-6 leading-tight uppercase">
              Reserva tu experiencia en MUSSAS Estilistas
            </h2>
            <p className="text-off-white/80 mb-8">
              Cuéntanos qué necesita tu cabello y te asesoraremos para ofrecerte el tratamiento más adecuado. Estamos aquí para ayudarte a conseguir un resultado natural, saludable y elegante.
            </p>
            <Link
              href="#"
              className="inline-block bg-off-white text-dark-brown px-8 py-3 text-sm font-medium rounded-sm hover:bg-off-white/90 transition-colors"
            >
              Reservar ahora
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
