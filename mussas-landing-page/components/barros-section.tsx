export function BarrosSection() {
  return (
    <section id="experiencia" className="bg-dark-brown py-16 md:py-24">
      <div className="px-6 md:px-12 lg:px-16">
        {/* Text Content */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-off-white mb-4 leading-tight uppercase tracking-wide">
            Barros naturales para un cabello más sano y equilibrado
          </h2>
          <p className="text-off-white/80 text-sm md:text-base">
            Una técnica tradicional reinventada para el cuidado capilar moderno, que aporta color, brillo y salud sin agredir la fibra del cabello.
          </p>
        </div>

        {/* Image with arch/dome shape at top */}
        <div className="max-w-4xl mx-auto">
          <div className="relative h-[250px] md:h-[350px] lg:h-[400px] overflow-hidden">
            <img src="assets/tratamiento.jpeg" alt="Tratamiento" className="w-full h-full object-cover rounded-t-[100px] md:rounded-t-[200px] mt-8" />
          </div>
        </div>
      </div>
    </section>
  )
}
