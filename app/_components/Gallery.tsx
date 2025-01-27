import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  title: string;
  tag: string;
}

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: "/bamboonesia/bn-spoonholder-001.png",
    alt: "Spoon Holder",
    title: "Spoon Holder",
    tag: "Bamboonesia",
  },
  {
    id: 2,
    src: "/bamboonesia/bn-spatula-001.png",
    alt: "Bamboo Spatula Set",
    title: "Kitchen Spatula",
    tag: "Bamboonesia",
  },
  {
    id: 3,
    src: "/bamboonesia/bn-spicecontainer-001.png",
    alt: "Bamboo Spice Container",
    title: "Spice Container",
    tag: "Bamboonesia",
  },
  {
    id: 4,
    src: "/bamboonesia/bn-ovallaminatedplate-001.png",
    alt: "Bamboo Oval Laminated Plate",
    title: "Oval Laminated Plate",
    tag: "Bamboonesia",
  },
  {
    id: 5,
    src: "/bamboonesia/bn-storagebox-001.png",
    alt: "Bamboo Storage Box",
    title: "Storage Box 1",
    tag: "Bamboonesia",
  },
  {
    id: 6,
    src: "/bamboonesia/bn-storagebox-002.png",
    alt: "Bamboo Storage Box",
    title: "Storage Box 2",
    tag: "Bamboonesia",
  },
  {
    id: 7,
    src: "/bamboonesia/bn-tray-001.png",
    alt: "Bamboo Tray",
    title: "Bamboo Tray 1",
    tag: "Bamboonesia",
  },
  {
    id: 8,
    src: "/bamboonesia/bn-tray-002.png",
    alt: "Bamboo Tray",
    title: "Bamboo Tray 2",
    tag: "Bamboonesia",
  },
];

const Gallery = () => {
  return (
    <section className="bg-natural-cream px-4 py-16 sm:px-6 lg:px-8">
      <div className="wrapper mx-auto">
        <h2 className="mb-10 text-center text-natural-earth">Our Products</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {galleryImages.map((image) => (
            <Card
              key={image.id}
              className="group overflow-hidden transition ease-out duration-200 border-bamboo-green/20 hover:border-bamboo-green hover:scale-[1.025]"
            >
              <CardContent className="p-0">
                <div className="relative">
                  <div className="relative aspect-square w-full">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-contain p-4"
                    />
                  </div>
                  <div className="bg-bamboo-green/90 p-4">
                    <h3 className="text-lg text-center font-semibold text-natural-cream">
                      {image.title}
                    </h3>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
