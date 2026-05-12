const galleries: any = {
  "personal-stylist": {
    title: "PERSONAL STYLIST",
    images: [
      "/images/work1.jpg",
      "/images/work9.jpg",
      "/images/work5.jpg",
    ],
  },

  "consultoria-de-imagem": {
    title: "CONSULTORIA DE IMAGEM",
    images: [
      "/images/work4.jpg",
      "/images/work2.jpg",
      "/images/work3.jpg",
    ],
  },

  "curadoria": {
    title: "CURADORIA DE GUARDA-ROUPA",
    images: [
      "/images/work7.jpg",
      "/images/work6.jpg",
      "/images/work8.jpg",
    ],
  },

  "editorial": {
    title: "STYLING EDITORIAL",
    images: [
      "/images/work1.jpg",
      "/images/work2.jpg",
      "/images/work4.jpg",
    ],
  },
};

export default async function GalleryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {

  const { slug } = await params;

  const gallery = galleries[slug];

  if (!gallery) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Página não encontrada
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white px-8 py-32">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-5xl font-light mb-20 text-center">
          {gallery.title}
        </h1>

        <div className="grid md:grid-cols-3 gap-8">

          {gallery.images.map((image: string) => (
            <img
              key={image}
              src={image}
              className="w-full h-[600px] object-cover"
            />
          ))}

        </div>

      </div>

    </main>
  );
}