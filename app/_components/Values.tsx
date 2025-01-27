import { Card, CardContent } from "@/components/ui/card";
import { Leaf, FlaskConical, Hammer } from "lucide-react";

const values = [
  {
    icon: <Leaf className="h-12 w-12 text-bamboo-green" />,
    title: "Natural Materials",
    description:
      "We use exclusively natural and renewable materials, ensuring your products remain free from harmful chemicals.",
  },
  {
    icon: <FlaskConical className="h-12 w-12 text-bamboo-green" />,
    title: "Quality Materials",
    description:
      "Our production uses food-grade oils, beeswax, water-based adhesives, and follows minimal waste management practices.",
  },
  {
    icon: <Hammer className="h-12 w-12 text-bamboo-green" />,
    title: "Traditional Methods",
    description:
      "Our bamboo products are crafted using traditional tools and methods, ensuring authentic craftsmanship in every piece.",
  },
];

export default function Values() {
  return (
    <section className="bg-natural-cream flex items-center justify-center">
      <div className="wrapper">
        <h2 className="text-bamboo-brown text-center mb-12">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <Card
              key={index}
              className="bg-natural-beige border-bamboo-green/20 hover:border-bamboo-green transition-colors"
            >
              <CardContent className="pt-6 text-center space-y-4">
                <div className="flex justify-center">{value.icon}</div>
                <h3 className="text-xl font-semibold text-bamboo-brown">
                  {value.title}
                </h3>
                <p className="text-natural-earth">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
