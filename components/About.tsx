export default function About() {
  return (
    <section
      id="about"
      className="py-32 px-8"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">

        <img
          src="/images/about.jpg"
          className="w-full h-[700px] object-cover"
        />

        <div>

          <p className="section-title mb-6">
            SOBRE
          </p>

          <h3 className="text-5xl font-light mb-10 leading-tight">
            Figurinista - Stylist - Creator
          </h3>

          <p className="text-neutral-600 leading-8 mb-6">
            Camila Duarte desenvolve narrativas visuais sofisticadas por meio de styling,
            consultoria de imagem e direção de moda criteriosa.
          </p>

          <p className="text-neutral-600 leading-8">
            Seu trabalho combina estética contemporânea, elegância atemporal
            e uma forte identidade visual para clientes, editoriais e campanhas de moda.
          </p>

        </div>

      </div>
    </section>
  );
}