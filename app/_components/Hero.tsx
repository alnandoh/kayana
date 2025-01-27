import Image from "next/image";
import { Button } from "@/components/ui/button";
import HeroImage from "@/public/Hero.jpg";

export default function Hero() {
  return (
    <section className="pt-12 relative min-h-screen flex items-center bg-black/70">
      <Image
        src={HeroImage}
        alt="Eco-friendly exports"
        fill
        className="object-cover -z-10"
        priority
      />
      <div className="wrapper relative">
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute left-1/2 top-1/2 w-full max-w-3xl -translate-x-1/2 -translate-y-1/2 text-center">
          <h1 className="mb-4 text-4xl font-bold text-natural-cream sm:text-5xl lg:text-6xl">
            Nature Renewables
          </h1>
          <p className="mb-8 text-lg text-natural-cream/90 sm:text-xl">
            Sustainable bamboo products crafted with traditional methods
          </p>
          <Button
            variant="outline"
            className="bg-bamboo-green text-natural-cream hover:bg-bamboo-green/90"
          >
            Explore Our Products
          </Button>
        </div>
      </div>
    </section>
  );
}
