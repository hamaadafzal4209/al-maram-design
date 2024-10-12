import { cn } from "@/lib/utils";
import Marquee from "./ui/marquee";
import Image from "next/image";

const partners = [
  { name: "Acme Corp", logo: "/assets/brand1.png" },
  { name: "Globex", logo: "/assets/brand2.png" },
  { name: "Soylent Corp", logo: "/assets/brand3.png" },
  { name: "Initech", logo: "/assets/brand4.png" },
  { name: "Umbrella Corp", logo: "/assets/brand5.png" },
  { name: "Hooli", logo: "/assets/brand6.png" },
  { name: "Vehement Capital", logo: "/assets/brand7.png" },
  { name: "Massive Dynamic", logo: "/assets/brand8.png" },
  { name: "Cyberdyne Systems", logo: "/assets/brand9.png" },
  { name: "Oscorp Industries", logo: "/assets/brand10.png" },
  { name: "Wayne Enterprises", logo: "/assets/brand11.png" },
  { name: "Stark Industries", logo: "/assets/brand12.png" },
  { name: "LexCorp", logo: "/assets/brand13.png" },
];

const firstRow = partners.slice(0, partners.length / 2);
const secondRow = partners.slice(partners.length / 2);

const PartnerCard = ({ logo, name }) => {
  return (
    <figure className={cn("relative cursor-pointer mx-6")}>
      <div className="relative w-32 h-32 overflow-hidden">
        <Image
          width={500}
          height={500}
          className="object-contain w-full h-full"
          alt={name}
          src={logo}
        />
      </div>
    </figure>
  );
};

export function Sponser() {
  return (
    <div className="py-8 flex w-full flex-col items-center justify-center overflow-hidden">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-gray-100 sm:text-4xl mb-4">
          Our Trusted Partners
        </h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Collaborating with industry leaders to drive innovation and
          excellence.
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
    </div>
  );
}
