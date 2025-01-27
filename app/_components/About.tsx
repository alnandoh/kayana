import React from "react";

export default function About() {
  return (
    <section id="about" className="bg-natural-beige">
      <div className="wrapper">
        <h2 className="text-center mb-12 text-bamboo-brown">About Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="col-span-1 md:col-span-3">
            <p className="text-lg mb-6">
              PT Kayana Kreatif Nusantara is an exporter of high-quality natural
              bamboo products. Located in Semarang, Indonesia, our company
              collaborates with local artisans from various regions in Central
              Java, Indonesia. The products we create fall into categories such
              as homeware, kitchenware, and utensils, all crafted to meet
              diverse market needs.
            </p>
            <p className="text-lg mb-6">
              Our dedication to excellence is reflected in every product crafted
              by our skilled artisans, who combine traditional techniques with
              modern design aesthetics. We prioritize sustainability by
              utilizing eco-friendly materials and adhering to rigorous quality
              standards throughout our production process.
            </p>
            <p className="text-lg mb-6">
              With a focus on customization, we offer an extensive selection of
              designs and sizes tailored to meet the specific preferences of our
              global clientele. Through continuous innovation and a strong
              commitment to quality, PT Kayana Kreatif Nusantara stands as a
              trusted partner for businesses seeking reliable, high-value bamboo
              products in both domestic and international markets.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
