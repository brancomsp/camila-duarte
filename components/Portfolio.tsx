const works = [
  "/images/work1.jpg",
  "/images/work2.jpg",
  "/images/work3.jpg",
  "/images/work4.jpg",
  "/images/work5.jpg",
  "/images/work6.jpg",
  "/images/work7.jpg",
  "/images/work8.jpg",
  "/images/work9.jpg",
];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="py-32 px-8"
    >
      <div className="max-w-7xl mx-auto">

        <p className="section-title mb-6 text-center">
          PORTFOLIO
        </p>

        <h3 className="text-5xl font-light text-center mb-20">
          Trabalhos Selecionados
        </h3>

        <div className="grid md:grid-cols-3 gap-8">

          {works.map((image, index) => (
            <div
              key={index}
              className="group overflow-hidden"
            >

              <img
                src={image}
                className="w-full h-[500px] object-cover group-hover:scale-105 transition duration-700"
              />

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}