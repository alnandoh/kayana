"use client";
import { Modal } from "@/components/Modal";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useState, useCallback } from "react";

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
    src: "/gallery/galeri umum bambonesia/gb-1.jpg",
    alt: "Cutlery Set",
    title: "Cutlery Set",
    tag: "Bamboonesia",
  },
  {
    id: 2,
    src: "/gallery/galeri umum bambonesia/gb-3.jpg",
    alt: "Cutlery Set",
    title: "Cutlery Set",
    tag: "Bamboonesia",
  },
  {
    id: 3,
    src: "/gallery/galeri umum bambonesia/gb-2.jpg",
    alt: "Bamboo Plate",
    title: "Bamboo Plate",
    tag: "Bamboonesia",
  },
  {
    id: 4,
    src: "/gallery/galeri umum bambonesia/gb-4.jpg",
    alt: "Bamboo Oval Laminated Plate",
    title: "Bamboo Plate Material",
    tag: "Bamboonesia",
  },
  {
    id: 5,
    src: "/gallery/galeri umum bambonesia/gb-5.jpg",
    alt: "Bamboo Plant",
    title: "Bamboo Plant",
    tag: "Bamboonesia",
  },
  {
    id: 6,
    src: "/gallery/galeri umum bambonesia/gb-6.jpg",
    alt: "Bamboo Plant",
    title: "Bamboo Plant",
    tag: "Bamboonesia",
  },
  {
    id: 7,
    src: "/gallery/galeri umum bambonesia/gb-7.jpg",
    alt: "Half-made Bamboo",
    title: "Half-made Bamboo",
    tag: "Bamboonesia",
  },
  {
    id: 8,
    src: "/gallery/galeri umum bambonesia/gb-8.png",
    alt: "Handcraft",
    title: "Handcraft",
    tag: "Bamboonesia",
  },
  {
    id: 9,
    src: "/gallery/galeri umum wb/gwb-1.jpg",
    alt: "Spoon & Fork",
    title: "Spoon & Fork",
    tag: "Wawan Bamboo",
  },
  {
    id: 10,
    src: "/gallery/galeri umum wb/gwb-2.jpg",
    alt: "Bamboo Sun Drying",
    title: "Bamboo Sun Drying",
    tag: "Wawan Bamboo",
  },
  {
    id: 11,
    src: "/gallery/galeri umum wb/gwb-3.jpg",
    alt: "Bamboo Works",
    title: "Bamboo Works",
    tag: "Wawan Bamboo",
  },
  {
    id: 12,
    src: "/gallery/galeri umum wb/gwb-4.png",
    alt: "Handcraft",
    title: "Handcraft",
    tag: "Wawan Bamboo",
  },
  {
    id: 13,
    src: "/gallery/galeri umum ytn/gytn-1.jpeg",
    alt: "Sun Drying",
    title: "Sun Drying",
    tag: "Bamboonesia",
  },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openModal = useCallback((image: GalleryImage, index: number) => {
    setSelectedImage(image);
    setSelectedIndex(index);
  }, []);

  const closeModal = useCallback(() => {
    setSelectedImage(null);
    setSelectedIndex(null);
  }, []);

  const nextImage = useCallback(() => {
    if (selectedIndex === null) return;
    const nextIndex = (selectedIndex + 1) % galleryImages.length;
    setSelectedImage(galleryImages[nextIndex]);
    setSelectedIndex(nextIndex);
  }, [selectedIndex]);

  const prevImage = useCallback(() => {
    if (selectedIndex === null) return;
    const prevIndex =
      (selectedIndex - 1 + galleryImages.length) % galleryImages.length;
    setSelectedImage(galleryImages[prevIndex]);
    setSelectedIndex(prevIndex);
  }, [selectedIndex]);

  return (
    <section
      className="bg-natural-cream px-4 py-16 sm:px-6 lg:px-8"
      id="gallery"
    >
      <div className="wrapper mx-auto">
        <h2 className="mb-10 text-center text-natural-earth">Gallery</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              layoutId={`product-${image.id}`}
              onClick={() => openModal(image, index)}
            >
              <Card className="group cursor-pointer overflow-hidden transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-0">
                  <div className="relative">
                    <div className="relative aspect-square w-full">
                      <motion.div
                        layoutId={`image-${image.id}`}
                        className="h-full"
                      >
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          className="object-cover p-0"
                        />
                      </motion.div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedImage && (
            <Modal
              isOpen={!!selectedImage}
              onClose={closeModal}
              onNext={nextImage}
              onPrev={prevImage}
              layoutId={`gallery-${selectedImage.id}`}
              currentIndex={selectedIndex !== null ? selectedIndex + 1 : 0}
              totalImages={galleryImages.length}
            >
              <div className="flex flex-col w-full h-full">
                <motion.div
                  layoutId={`image-${selectedImage.id}`}
                  className=" relative h-full"
                >
                  <Image
                    src={selectedImage.src}
                    alt={selectedImage.alt}
                    fill
                    className="object-contain p-2 pb-14"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 50vw"
                  />
                </motion.div>
                <motion.div
                  layoutId={`title-${selectedImage.id}`}
                  className="absolute bottom-0 left-0 right-0 bg-bamboo-green p-4"
                >
                  <h3 className="text-lg text-center font-semibold text-natural-cream">
                    {selectedImage.title}
                  </h3>
                </motion.div>
              </div>
            </Modal>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
