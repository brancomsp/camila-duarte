import Link from "next/link";

const services = [
  {
    title: "PERSONAL STYLIST",
    slug: "personal-stylist",
  },

  {
    title: "CONSULTORIA DE IMAGEM",
    slug: "consultoria-de-imagem",
  },

  {
    title: "CURADORIA DE GUARDA-ROUPA",
    slug: "curadoria",
  },

  {
    title: "PROJETO4",
    slug: "editorial",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-32 px-8 bg-black text-white"
    >
      <div className="max-w-6xl mx-auto">

        <p className="section-title mb-6 text-center">
          SERVIÇOS
        </p>

        <h3 className="text-5xl font-light text-center mb-20">
          Experiência em Styling
        </h3>

        <div className="grid md:grid-cols-2 gap-8">

          {services.map((service) => (
            <Link
              href={`/servicos/${service.slug}`}
              key={service.slug}
              className="border border-white/10 p-10 text-center hover:bg-white hover:text-black transition duration-500"
            >
              <h4 className="tracking-[0.25em] text-sm">
                {service.title}
              </h4>
            </Link>
          ))}

        </div>

      </div>
    </section>
  );
}