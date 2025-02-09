"use client";
import { useState, useCallback } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Modal } from "@/components/Modal";

interface ProductImage {
  id: number;
  src: string;
  alt: string;
  title: string;
  tag: string;
}

const productImages: ProductImage[] = [
  {
    id: 1,
    src: "/bamboonesia/bn-ovallaminatedplate-001.png",
    alt: "Bamboo Oval Laminated Plate",
    title: "Bamboo Oval Laminated Plate",
    tag: "Bamboonesia",
  },
  {
    id: 2,
    src: "/bamboonesia/bn-panholder-001.png",
    alt: "Bamboo Pan Holder",
    title: "Bamboo Pan Holder",
    tag: "Bamboonesia",
  },
  {
    id: 3,
    src: "/bamboonesia/bn-roundcoaster.png",
    alt: "Bamboo Round Coaster",
    title: "Bamboo Round Coaster",
    tag: "Bamboonesia",
  },
  {
    id: 4,
    src: "/bamboonesia/bn-roundlaminatedplate-001.png",
    alt: "Bamboo Round Laminated Plate",
    title: "Bamboo Round Laminated Plate",
    tag: "Bamboonesia",
  },
  {
    id: 5,
    src: "/bamboonesia/bn-spatula-001.png",
    alt: "Bamboo Spatula",
    title: "Bamboo Spatula",
    tag: "Bamboonesia",
  },
  {
    id: 6,
    src: "/bamboonesia/bn-spicecontainer-001.png",
    alt: "Bamboo Spice Container",
    title: "Bamboo Spice Container",
    tag: "Bamboonesia",
  },
  {
    id: 7,
    src: "/bamboonesia/bn-spoonholder-001.png",
    alt: "Bamboo Spoon Holder",
    title: "Bamboo Spoon Holder",
    tag: "Bamboonesia",
  },
  {
    id: 8,
    src: "/bamboonesia/bn-squarecoaster-001.png",
    alt: "Bamboo Square Coaster",
    title: "Bamboo Square Coaster 1",
    tag: "Bamboonesia",
  },
  {
    id: 9,
    src: "/bamboonesia/bn-squarecoaster-002.png",
    alt: "Bamboo Square Coaster",
    title: "Bamboo Square Coaster 2",
    tag: "Bamboonesia",
  },
  {
    id: 10,
    src: "/bamboonesia/bn-storagebox-001.png",
    alt: "Bamboo Storage Box",
    title: "Bamboo Storage Box 1",
    tag: "Bamboonesia",
  },
  {
    id: 11,
    src: "/bamboonesia/bn-storagebox-002.png",
    alt: "Bamboo Storage Box",
    title: "Bamboo Storage Box 2",
    tag: "Bamboonesia",
  },
  {
    id: 12,
    src: "/bamboonesia/bn-storagebox-004.png",
    alt: "Bamboo Storage Box",
    title: "Bamboo Storage Box 4",
    tag: "Bamboonesia",
  },
  {
    id: 13,
    src: "/bamboonesia/bn-toothpickcontainer-001.png",
    alt: "Bamboo Toothpick Container",
    title: "Bamboo Toothpick Container",
    tag: "Bamboonesia",
  },
  {
    id: 14,
    src: "/bamboonesia/bn-tray-001.png",
    alt: "Bamboo Tray",
    title: "Bamboo Tray 1",
    tag: "Bamboonesia",
  },
  {
    id: 15,
    src: "/bamboonesia/bn-tray-002.png",
    alt: "Bamboo Tray",
    title: "Bamboo Tray 2",
    tag: "Bamboonesia",
  },
  {
    id: 16,
    src: "/bamboonesia/bn-tray-003.png",
    alt: "Bamboo Tray",
    title: "Bamboo Tray 3",
    tag: "Bamboonesia",
  },
  {
    id: 17,
    src: "/bamboonesia/bn-trayorganizer-001.png",
    alt: "Bamboo Tray Organizer",
    title: "Bamboo Tray Organizer",
    tag: "Bamboonesia",
  },
];

export default function Product() {
  const [selectedImage, setSelectedImage] = useState<ProductImage | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openModal = useCallback((image: ProductImage, index: number) => {
    setSelectedImage(image);
    setSelectedIndex(index);
  }, []);

  const closeModal = useCallback(() => {
    setSelectedImage(null);
    setSelectedIndex(null);
  }, []);

  const nextImage = useCallback(() => {
    if (selectedIndex === null) return;
    const nextIndex = (selectedIndex + 1) % productImages.length;
    setSelectedImage(productImages[nextIndex]);
    setSelectedIndex(nextIndex);
  }, [selectedIndex]);

  const prevImage = useCallback(() => {
    if (selectedIndex === null) return;
    const prevIndex =
      (selectedIndex - 1 + productImages.length) % productImages.length;
    setSelectedImage(productImages[prevIndex]);
    setSelectedIndex(prevIndex);
  }, [selectedIndex]);

  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="wrapper">
        <h2 className="mb-10 text-center text-natural-earth">Our Products</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {productImages.map((image, index) => (
            <motion.div
              key={image.id}
              layoutId={`product-${image.id}`}
              onClick={() => openModal(image, index)}
            >
              <Card className="group cursor-pointer overflow-hidden transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-0">
                  <div className="relative">
                    <div className="relative h-[300px] w-full">
                      <motion.div
                        layoutId={`image-${image.id}`}
                        className="h-full"
                      >
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          className="object-contain p-4"
                        />
                      </motion.div>
                    </div>
                    <motion.div
                      layoutId={`title-${image.id}`}
                      className="absolute bottom-0 left-0 right-0 bg-bamboo-green/90 p-4"
                    >
                      <h3 className="text-lg text-center font-semibold text-natural-cream">
                        {image.title}
                      </h3>
                    </motion.div>
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
              layoutId={`product-${selectedImage.id}`}
              currentIndex={selectedIndex !== null ? selectedIndex + 1 : 0}
              totalImages={productImages.length}
            >
              <div className="relative w-full h-full">
                <motion.div
                  layoutId={`image-${selectedImage.id}`}
                  className="h-full"
                >
                  <Image
                    src={selectedImage.src}
                    alt={selectedImage.alt}
                    fill
                    className="object-contain p-4"
                  />
                </motion.div>
                <motion.div
                  layoutId={`title-${selectedImage.id}`}
                  className="absolute bottom-0 left-0 right-0 bg-bamboo-green/90 p-4"
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
