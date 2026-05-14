import { Scissors, Palette, Sparkles, Leaf, Droplets, Wind } from "lucide-react"

const services = [
  {
    icon: Scissors,
    title: "Corte y estilismo personalizado",
  },
  {
    icon: Palette,
    title: "Coloración premium",
  },
  {
    icon: Sparkles,
    title: "Mechas y reflejos naturales",
  },
  {
    icon: Leaf,
    title: "Tratamientos con barros naturales",
  },
  {
    icon: Droplets,
    title: "Hidratación y reparación capilar",
  },
  {
    icon: Wind,
    title: "Control del encrespamiento",
  },
]

export function ServicesSection() {
  return (
    <section id="servicios" className="bg-light-sand py-16 md:py-24">
      <div className="px-6 md:px-12 lg:px-16">
        <h2 className="font-serif text-3xl md:text-4xl font-semibold text-dark-brown text-center mb-12">
          Nuestros servicios
        </h2>

        {/* Services Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-medium-taupe p-6 md:p-8 rounded-lg flex flex-col items-start gap-4 hover:bg-medium-taupe/80 transition-colors"
            >
              <service.icon className="w-8 h-8 md:w-10 md:h-10 text-dark-brown" strokeWidth={1.5} />
              <h3 className="font-serif text-sm md:text-base text-dark-brown font-medium leading-snug">
                {service.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
