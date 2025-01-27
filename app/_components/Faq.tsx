import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Faq() {
  return (
    <section
      id="faq"
      className="flex items-center justify-center bg-natural-beige"
    >
      <div className="wrapper">
        <h2 className="text-center mb-12 text-bamboo-brown">
          Frequently Asked Questions
        </h2>
        <Accordion type="multiple" className="max-w-2xl mx-auto">
          <AccordionItem value="item-1" className="border-bamboo-green/20">
            <AccordionTrigger className="text-base sm:text-lg font-medium text-bamboo-brown hover:text-bamboo-green data-[state=open]:text-bamboo-green">
              What is not in our product?
            </AccordionTrigger>
            <AccordionContent className="text-sm sm:text-base text-natural-earth">
              You will find no lacquers, dyes, BPA, heavy metals,
              petroleum-based substances, or phthalates in any of our items. Our
              products maintain the highest standards of natural purity. Our
              bamboo plants are cultivated without the use of fertilizers or any
              chemical additives, ensuring 100% natural growth conditions. For
              our manufacturing process, we exclusively use PVA water-based,
              non-formaldehyde adhesive when lamination is required. The
              finishing process using only 100% natural beeswax or food-grade
              biovarnish.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className="border-bamboo-green/20">
            <AccordionTrigger className="text-base sm:text-lg font-medium text-bamboo-brown hover:text-bamboo-green data-[state=open]:text-bamboo-green">
              Can you provide samples to be delivered?
            </AccordionTrigger>
            <AccordionContent className="text-sm sm:text-base text-natural-earth">
              Yes, we can provide free samples. You will only need to pay for
              the delivery cost.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" className="border-bamboo-green/20">
            <AccordionTrigger className="text-base sm:text-lg font-medium text-bamboo-brown hover:text-bamboo-green data-[state=open]:text-bamboo-green">
              Do you provide custom products?
            </AccordionTrigger>
            <AccordionContent className="text-sm sm:text-base text-natural-earth">
              Yes, we provide custom products as long as you provide clear and
              detailed design and specifications. It would be even better if you
              could provide a physical sample as reference.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4" className="border-bamboo-green/20">
            <AccordionTrigger className="text-base sm:text-lg font-medium text-bamboo-brown hover:text-bamboo-green data-[state=open]:text-bamboo-green">
              Have any other questions?
            </AccordionTrigger>
            <AccordionContent className="text-sm sm:text-base text-natural-earth">
              Email us at kayanakreatifnusantara@gmail.com
            </AccordionContent>
          </AccordionItem>
          {/* Add more FAQ items */}
        </Accordion>
      </div>
    </section>
  );
}
