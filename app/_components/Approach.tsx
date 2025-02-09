import Image from "next/image";

export default function Approach() {
  return (
    <section className="py-16 bg-natural-beige">
      <div className="wrapper">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="font-bold text-bamboo-brown mb-4">Our Approach</h2>
            <h3 className="font-semibold text-bamboo-brown/90 md:mt-4">
              Enhancing Everyday Essentials
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-lg font-semibold text-natural-earth">
                Everyday items don't have to rely on plastic, nor should they
                compromise on design or craftsmanship.
              </p>
              <p className="text-natural-earth">
                We take pride in offering high-quality essentials made from
                natural materials that are durable, affordable, and beautifully
                designed. There is a unique satisfaction in using handcrafted
                items, so why not make that a part of daily life?
              </p>
              <p className="text-natural-earth">
                Unlike industrial manufacturers, we proudly maintain traditional
                craftsmanship in our production process. Our artisans work with
                time-honored tools and techniques, allowing for careful
                attention to detail that mass production simply cannot match.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/header.jpg"
                alt="Traditional craftsmanship"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
