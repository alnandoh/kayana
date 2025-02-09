import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Gallery from "./_components/Gallery";
import Values from "./_components/Values";
import Approach from "./_components/Approach";
import Hero from "./_components/Hero";
import About from "./_components/About";
import Faq from "./_components/Faq";
import Product from "./_components/Product";

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
      <Hero />
      <About />
      <Values />
      <Approach />
      <Product />
      <Gallery />
      <Faq />
    </main>
  );
}
