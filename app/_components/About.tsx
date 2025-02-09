import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-natural-beige flex items-center"
    >
      <div className="wrapper">
        <h2 className="text-center mb-4 sm:mb-6 lg:mb-10">About Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left side - Text Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-base sm:text-lg text-natural-earth">
                PT Kayana Kreatif Nusantara is an exporter of high-quality
                natural bamboo products. Located in Semarang, Indonesia, our
                company collaborates with local artisans from various regions in
                Central Java, Indonesia. The products we create fall into
                categories such as homeware, kitchenware, and utensils, all
                crafted to meet diverse market needs.
              </p>
              <p className="text-base sm:text-lg text-natural-earth">
                Our dedication to excellence is reflected in every product
                crafted by our skilled artisans, who combine traditional
                techniques with modern design aesthetics. We prioritize
                sustainability by utilizing eco-friendly materials and adhering
                to rigorous quality standards throughout our production process.
              </p>
              <p className="text-base sm:text-lg text-natural-earth">
                With a focus on customization, we offer an extensive selection
                of designs and sizes tailored to meet the specific preferences
                of our global clientele. Through continuous innovation and a
                strong commitment to quality, PT Kayana Kreatif Nusantara stands
                as a trusted partner for businesses seeking reliable, high-value
                bamboo products in both domestic and international markets.
              </p>
            </div>
          </div>

          <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden">
            <Image
              src="/3.jpg"
              alt="Bamboo craftsmanship"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
            {/* Optional overlay */}
            <div className="absolute inset-0 bg-bamboo-green/10" />
          </div>
        </div>
      </div>
    </section>
  );
}
