import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
export default function Footer() {
  return (
    <footer className="bg-one-800" id="contact-us">
      <div className="wrapper mx-auto py-8 px-4 md:px-8 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col items-center md:items-start">
            <div className="relative w-[280px] h-[120px]">
              <Image
                src="/logo700x300.png"
                alt="Nusa Bean Logo"
                className="object-contain"
                fill
              />
            </div>
            <p className="text-justify md:text-left text-sm lg:text-base">
              PT Kayana Kreatif Nusantara is an exporter of high-quality natural
              bamboo products. With a focus on customization, we offer an
              extensive selection of designs and sizes tailored to meet the
              specific preferences of our global clientele
            </p>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="mb-4">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <MapPin className="min-w-6 h-6 text-red-500 mr-3" />
                <p className="text-sm lg:text-base">
                  Jl. Taman Pekunden Timur no 15,
                  <br />
                  Semarang, Jawa Tengah, Indonesia
                </p>
              </div>
              <div className="flex items-center">
                <Phone className="min-w-6 h-6 text-green-500 mr-3" />
                <p className="text-sm md:text-base">
                  Whatsapp: +62 877-1140-1996
                </p>
              </div>
              <div className="flex items-center justify-center">
                <Mail className="min-w-6 h-6 text-slate-300 mr-3" />
                <p className="text-sm md:text-base">
                  kayanakreatifnusantara@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="bg-one-700 py-4">
        <div className="container mx-auto text-center text-sm">
          <p className="text-two-100">
            ©2025 Kayana Kreatif Nusantara. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
