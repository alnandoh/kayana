"use client";
import { useState, useCallback } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { Modal } from "@/components/Modal";

interface CategoryImage {
  id: number;
  src: string;
  alt: string;
  title: string;
  tag: string;
}

interface ProductImage {
  id: number;
  src: string;
  alt: string;
  title: string;
  tag: string;
  categories: CategoryImage[];
}

const productImages: ProductImage[] = [
  {
    id: 1,
    src: "/bamboonesia/bn-ovallaminatedplate-001.png",
    alt: "Bamboo Oval Laminated Plate",
    title: "Bamboo Oval Laminated Plate",
    tag: "Bamboonesia",
    categories: [
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
    ],
  },
  {
    id: 2,
    src: "/bamboonesia/bn-panholder-001.png",
    alt: "Bamboo Pan Holder",
    title: "Bamboo Pan Holder",
    tag: "Bamboonesia",
    categories: [
      {
        id: 1,
        src: "/bamboonesia/bn-panholder-001.png",
        alt: "Bamboo Pan Holder",
        title: "Bamboo Pan Holder",
        tag: "Bamboonesia",
      },
    ],
  },
  // {
  //   id: 3,
  //   src: "/bamboonesia/bn-roundcoaster.png",
  //   alt: "Bamboo Round Coaster",
  //   title: "Bamboo Round Coaster",
  //   tag: "Bamboonesia",
  // },
  // {
  //   id: 4,
  //   src: "/bamboonesia/bn-roundlaminatedplate-001.png",
  //   alt: "Bamboo Round Laminated Plate",
  //   title: "Bamboo Round Laminated Plate",
  //   tag: "Bamboonesia",
  // },
  // {
  //   id: 5,
  //   src: "/bamboonesia/bn-spatula-001.png",
  //   alt: "Bamboo Spatula",
  //   title: "Bamboo Spatula",
  //   tag: "Bamboonesia",
  // },
  // {
  //   id: 6,
  //   src: "/bamboonesia/bn-spicecontainer-001.png",
  //   alt: "Bamboo Spice Container",
  //   title: "Bamboo Spice Container",
  //   tag: "Bamboonesia",
  // },
  // {
  //   id: 7,
  //   src: "/bamboonesia/bn-spoonholder-001.png",
  //   alt: "Bamboo Spoon Holder",
  //   title: "Bamboo Spoon Holder",
  //   tag: "Bamboonesia",
  // },
  // {
  //   id: 8,
  //   src: "/bamboonesia/bn-squarecoaster-001.png",
  //   alt: "Bamboo Square Coaster",
  //   title: "Bamboo Square Coaster 1",
  //   tag: "Bamboonesia",
  // },
  // {
  //   id: 9,
  //   src: "/bamboonesia/bn-squarecoaster-002.png",
  //   alt: "Bamboo Square Coaster",
  //   title: "Bamboo Square Coaster 2",
  //   tag: "Bamboonesia",
  // },
  // {
  //   id: 10,
  //   src: "/bamboonesia/bn-storagebox-001.png",
  //   alt: "Bamboo Storage Box",
  //   title: "Bamboo Storage Box 1",
  //   tag: "Bamboonesia",
  // },
  // {
  //   id: 11,
  //   src: "/bamboonesia/bn-storagebox-002.png",
  //   alt: "Bamboo Storage Box",
  //   title: "Bamboo Storage Box 2",
  //   tag: "Bamboonesia",
  // },
  // {
  //   id: 12,
  //   src: "/bamboonesia/bn-storagebox-004.png",
  //   alt: "Bamboo Storage Box",
  //   title: "Bamboo Storage Box 4",
  //   tag: "Bamboonesia",
  // },
  // {
  //   id: 13,
  //   src: "/bamboonesia/bn-toothpickcontainer-001.png",
  //   alt: "Bamboo Toothpick Container",
  //   title: "Bamboo Toothpick Container",
  //   tag: "Bamboonesia",
  // },
  // {
  //   id: 14,
  //   src: "/bamboonesia/bn-tray-001.png",
  //   alt: "Bamboo Tray",
  //   title: "Bamboo Tray 1",
  //   tag: "Bamboonesia",
  // },
  // {
  //   id: 15,
  //   src: "/bamboonesia/bn-tray-002.png",
  //   alt: "Bamboo Tray",
  //   title: "Bamboo Tray 2",
  //   tag: "Bamboonesia",
  // },
  // {
  //   id: 16,
  //   src: "/bamboonesia/bn-tray-003.png",
  //   alt: "Bamboo Tray",
  //   title: "Bamboo Tray 3",
  //   tag: "Bamboonesia",
  // },
  // {
  //   id: 17,
  //   src: "/bamboonesia/bn-trayorganizer-001.png",
  //   alt: "Bamboo Tray Organizer",
  //   title: "Bamboo Tray Organizer",
  //   tag: "Bamboonesia",
  // },
  // {
  //   id: 18,
  //   src: "/bamboo_straw.png",
  //   alt: "Bamboo Straw",
  //   title: "Bamboo Straw",
  //   tag: "Bamboonesia",
  // },
  // {
  //   id: 19,
  //   src: "/wawanbamboo/wb-box-001.png",
  //   alt: "Bamboo Box",
  //   title: "Bamboo Box",
  //   tag: "Wawan Bamboo",
  // },
  // {
  //   id: 20,
  //   src: "/wawanbamboo/wb-box-002.png",
  //   alt: "Bamboo Box",
  //   title: "Bamboo Box",
  //   tag: "Wawan Bamboo",
  // },
  // {
  //   id: 21,
  //   src: "/wawanbamboo/wb-coilplate-001.png",
  //   alt: "Bamboo Coil Plate",
  //   title: "Bamboo Coil Plate",
  //   tag: "Wawan Bamboo",
  // },
  // {
  //   id: 22,
  //   src: "/wawanbamboo/wb-cutlery-001.png",
  //   alt: "Bamboo Cutlery",
  //   title: "Bamboo Cutlery",
  //   tag: "Wawan Bamboo",
  // },
  // {
  //   id: 23,
  //   src: "/wawanbamboo/wb-lampdecor-001.png",
  //   alt: "Bamboo Lamp Decoration",
  //   title: "Bamboo Lamp Decoration",
  //   tag: "Wawan Bamboo",
  // },
  // {
  //   id: 24,
  //   src: "/wawanbamboo/wb-plaincup-001.png",
  //   alt: "Bamboo Plain Cup",
  //   title: "Bamboo Plain Cup",
  //   tag: "Wawan Bamboo",
  // },
  // {
  //   id: 25,
  //   src: "/wawanbamboo/wb-stainlesscup-001.png",
  //   alt: "Bamboo Stainless Cup",
  //   title: "Bamboo Stainless Cup",
  //   tag: "Wawan Bamboo",
  // },
  // {
  //   id: 26,
  //   src: "/wawanbamboo/wb-stainlesscuphandle-001.png",
  //   alt: "Bamboo Stainless Cup Handle",
  //   title: "Bamboo Stainless Cup Handle",
  //   tag: "Wawan Bamboo",
  // },
  // {
  //   id: 27,
  //   src: "/wawanbamboo/wb-stainlesstumblr-001.png",
  //   alt: "Bamboo Stainless Tumblr",
  //   title: "Bamboo Stainless Tumblr",
  //   tag: "Wawan Bamboo",
  // },
  // {
  //   id: 28,
  //   src: "/wawanbamboo/wb-toothbrushnylon-001.png",
  //   alt: "Bamboo Toothbrush Nylon",
  //   title: "Bamboo Toothbrush Nylon",
  //   tag: "Wawan Bamboo",
  // },
];

export default function Product() {
  const [selectedProduct, setSelectedProduct] = useState<ProductImage | null>(
    null
  );
  const [selectedImage, setSelectedImage] = useState<CategoryImage | null>(
    null
  );
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openModal = useCallback((image: ProductImage) => {
    setSelectedProduct(image);
    setSelectedImage(image?.categories[0]);
    setSelectedIndex(image?.categories[0]?.id);
  }, []);

  const closeModal = useCallback(() => {
    setSelectedImage(null);
    setSelectedIndex(null);
  }, []);

  const nextImage = useCallback(() => {
    if (selectedIndex === null || selectedProduct === null) return;
    const nextIndex = (selectedIndex + 1) % selectedProduct?.categories?.length;
    setSelectedImage(selectedProduct?.categories[nextIndex]);
    setSelectedIndex(nextIndex);
  }, [selectedIndex]);

  const prevImage = useCallback(() => {
    if (selectedIndex === null || selectedProduct === null) return;
    const prevIndex =
      (selectedIndex - 1 + selectedProduct?.categories?.length) %
      selectedProduct?.categories?.length;
    setSelectedImage(selectedProduct?.categories[prevIndex]);
    setSelectedIndex(prevIndex);
  }, [selectedIndex]);

  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8" id="products">
      <div className="wrapper">
        <h2 className="mb-10 text-center text-natural-earth">Our Products</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {productImages.map((image, index) => (
            <motion.div
              key={image.id}
              layoutId={`product-${image.id}`}
              onClick={() => openModal(image)}
            >
              <Card className="group cursor-pointer overflow-hidden transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-0">
                  <div className="flex flex-col">
                    <div className="relative h-[300px] aspect-square w-full">
                      <motion.div
                        layoutId={`image-${image.id}`}
                        className="h-full"
                      >
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          className="object-contain"
                        />
                      </motion.div>
                    </div>
                    <motion.div
                      layoutId={`title-${image.id}`}
                      className="bg-bamboo-green/90 p-4"
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
              totalImages={selectedProduct?.categories?.length ?? 0}
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
