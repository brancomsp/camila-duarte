export default function Hero() {
  return (
    <section className="h-screen relative overflow-hidden">

      <img
        src="/images/hero.jpg"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">

        <p className="tracking-[0.5em] text-xs mb-6">
          PERSONAL STYLIST
        </p>

        <h2 className="text-5xl md:text-8xl font-light tracking-[0.25em]">
          CAMILA DUARTE
        </h2>

        <p className="mt-10 max-w-xl text-sm md:text-base leading-8 text-neutral-200">
          Styling, consultoria de imagem e direção criativa
          para identidades visuais
        </p>

      </div>
    </section>
  );
}