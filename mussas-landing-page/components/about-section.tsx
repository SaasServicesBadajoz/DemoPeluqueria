export function AboutSection() {
  return (
    <section id="nosotros" className="bg-light-sand py-16 md:py-24">
      <div className="px-6 md:px-12 lg:px-16">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Text Content */}
          <div className="order-2 md:order-1">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-dark-brown mb-6 leading-tight">
              Da un cambio a tu melena
            </h2>
            <p className="text-dark-brown/80 mb-4">
              Cada persona es única, y su cabello también lo es.
            </p>
            <p className="text-dark-brown/80 mb-4">
              Nuestro enfoque se basa en el diagnóstico personalizado y en la elección de técnicas que realzan la belleza natural sin comprometer la salud del cabello. Apostamos por tratamientos capilares avanzados y por la técnica de barros naturales, una alternativa suave y eficaz que aporta brillo, nutrición y equilibrio.
            </p>
            <p className="text-dark-brown/80">
              Creamos experiencias de cuidado donde la técnica se une con la calma, la atención al detalle y la búsqueda de resultados visibles y duraderos.
            </p>
          </div>

          {/* Image with rounded top-left corner */}
          <div className="order-1 md:order-2">
            <div className="relative h-[350px] md:h-[450px] lg:h-[500px] overflow-hidden">
              <img src="assets/chica-lavado.jpeg" alt="Lavado" className="w-full h-full object-cover rounded-tl-[100px] md:rounded-tl-[150px]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
