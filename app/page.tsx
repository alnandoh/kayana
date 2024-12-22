import Image from "next/image";
import NavBar from "@/components/NavBar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Hero from "@/public/Hero.jpg";

const products = [
  {
    title: "Organic Fruits",
    description: "Freshly picked organic fruits",
  },
  {
    title: "Organic Vegetables",
    description: "Locally sourced organic vegetables",
  },
  {
    title: "Organic Grains",
    description: "Whole grains for healthy living",
  },
  {
    title: "Organic Dairy",
    description: "Dairy products from organic farms",
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-20 relative min-h-screen flex items-center bg-black/70">
        <Image
          src={Hero}
          alt="Eco-friendly exports"
          fill
          className="object-cover -z-10"
          priority
        />
        <div className="wrapper relative">
          <div className="absolute top-0 left-0 w-1/2 h-full flex items-center justify-center">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1 space-y-4 text-white">
                <h1>Sustainable Export Solutions for a Better World</h1>
                <p className="text-lg ">
                  We connect eco-conscious producers with global markets,
                  promoting sustainable trade practices.
                </p>
                <Button variant="outline" size="lg" className="text-black">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 bg-accent/50">
        <div className="wrapper">
          <h2 className="text-3xl font-bold text-center mb-12">About Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="col-span-1 md:col-span-3">
              <p className="text-lg text-gray-700 mb-6">
                PT Kayana Kreatif Nusantara is an exporter of high-quality
                natural bamboo products. Located in Semarang, Indonesia, our
                company collaborates with local artisans from various regions in
                Central Java, Indonesia. The products we create fall into
                categories such as homeware, kitchenware, and utensils, all
                crafted to meet diverse market needs.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Our dedication to excellence is reflected in every product
                crafted by our skilled artisans, who combine traditional
                techniques with modern design aesthetics. We prioritize
                sustainability by utilizing eco-friendly materials and adhering
                to rigorous quality standards throughout our production process.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                With a focus on customization, we offer an extensive selection
                of designs and sizes tailored to meet the specific preferences
                of our global clientele. Through continuous innovation and a
                strong commitment to quality, PT Kayana Kreatif Nusantara stands
                as a trusted partner for businesses seeking reliable, high-value
                bamboo products in both domestic and international markets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-12 bg-accent/50">
        <div className="wrapper">
          <h2 className="text-3xl font-bold text-center mb-12">Our Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-4">
            {/* Add your product cards here */}
            {products.map((product) => (
              <Card>
                <CardHeader>
                  <CardTitle>{product.title}</CardTitle>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  {/* <img src="" alt={product.title} /> */}
                  <div className="h-40 w-full bg-gray-300 rounded-md"></div>
                </CardContent>
              </Card>
            ))}
            {/* Add more product cards */}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-12">
        <div className="wrapper">
          <h2 className="text-center mb-12">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="max-w-2xl mx-auto">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                What makes your products eco-friendly?
              </AccordionTrigger>
              <AccordionContent>
                Our products are sourced from sustainable producers who follow
                strict environmental guidelines...
              </AccordionContent>
              <AccordionTrigger>
                What makes your products eco-friendly?
              </AccordionTrigger>
              <AccordionContent>
                Our products are sourced from sustainable producers who follow
                strict environmental guidelines...
              </AccordionContent>
            </AccordionItem>
            {/* Add more FAQ items */}
          </Accordion>
        </div>
      </section>
    </main>
  );
}
