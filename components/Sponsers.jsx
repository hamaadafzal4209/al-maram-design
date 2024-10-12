import { cn } from "@/lib/utils";
import Marquee from "./ui/marquee";
import Image from "next/image";

const partners = [
  { name: "Acme Corp", logo: "/assets/brand1.jpg" },
  { name: "Globex", logo: "/assets/brand2.jpg" },
  { name: "Soylent Corp", logo: "/assets/brand3.jpg" },
  { name: "Initech", logo: "/assets/brand4.jpg" },
  { name: "Umbrella Corp", logo: "/assets/brand5.jpg" },
  { name: "Hooli", logo: "/assets/brand6.jpg" },
  { name: "Vehement Capital", logo: "/assets/brand7.jpg" },
  { name: "Massive Dynamic", logo: "/assets/brand8.jpg" },
  { name: "Cyberdyne Systems", logo: "/assets/brand9.jpg" },
  { name: "Oscorp Industries", logo: "/assets/brand10.jpg" },
  { name: "Wayne Enterprises", logo: "/assets/brand11.jpg" },
  { name: "Stark Industries", logo: "/assets/brand12.jpg" },
  { name: "LexCorp", logo: "/assets/brand13.jpg" },
];

const firstRow = partners.slice(0, partners.length / 2);
const secondRow = partners.slice(partners.length / 2);

const PartnerCard = ({ logo, name }) => {
  return (
    <figure className={cn("relative cursor-pointer mx-6")}>
      <Image
        width={500}
        height={500}
        className="object-contain w-32"
        alt={name}
        src={logo}
      />
    </figure>
  );
};

export function Sponser() {
  return (
    <div className="relative max-w-7xl mx-auto py-8 flex w-full flex-col items-center justify-center overflow-hidden">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-gray-100 sm:text-4xl mb-4">
          Our Trusted Partners
        </h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Collaborating with industry leaders to drive innovation and excellence.
        </p>
      </div>
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((partner) => (
          <PartnerCard key={partner.name} {...partner} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s] !-mt-10">
        {secondRow.map((partner) => (
          <PartnerCard key={partner.name} {...partner} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-gray-900"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-gray-900"></div>
    </div>
  );
}