import * as React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Sample data for the cards related to voltage and electricity
const cardData = [
  {
    id: 1,
    title: "High Voltage Power Lines",
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=500&h=300&fit=crop",
    points: [
      "Transmission of electricity",
      "High voltage systems",
      "Power grid infrastructure",
      "Safety considerations",
      "Long-distance energy transfer",
    ],
  },
  {
    id: 2,
    title: "Circuit Boards",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&h=300&fit=crop",
    points: [
      "Electronic components",
      "Voltage regulation",
      "Circuit design",
      "Power distribution",
    ],
  },
  {
    id: 3,
    title: "Renewable Energy",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=500&h=300&fit=crop",
    points: [
      "Solar panel voltage",
      "Wind turbine generators",
      "Energy storage systems",
      "Inverter technology",
      "Grid integration",
    ],
  },
  {
    id: 4,
    title: "Electric Vehicles",
    image:
      "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=500&h=300&fit=crop",
    points: [
      "Battery voltage management",
      "Charging infrastructure",
      "Motor efficiency",
      "Power electronics",
    ],
  },
  {
    id: 5,
    title: "Smart Home Technology",
    image:
      "https://images.unsplash.com/photo-1558002038-1055907df827?w=500&h=300&fit=crop",
    points: [
      "Home automation",
      "Energy monitoring",
      "Voltage optimization",
      "Smart meters",
      "IoT devices",
    ],
  },
  {
    id: 6,
    title: "Industrial Electrical Systems",
    image:
      "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=500&h=300&fit=crop",
    points: [
      "Three-phase power",
      "Motor control centers",
      "SCADA systems",
      "Power factor correction",
    ],
  },
  {
    id: 7,
    title: "Lightning Protection",
    image:
      "https://images.unsplash.com/photo-1429552077091-836152271555?w=500&h=300&fit=crop",
    points: [
      "Voltage spikes",
      "Grounding techniques",
      "Surge arresters",
      "Transient voltage suppression",
      "Equipment protection",
    ],
  },
  {
    id: 8,
    title: "Power Generation",
    image:
      "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=500&h=300&fit=crop",
    points: [
      "Generators and alternators",
      "Voltage regulation",
      "Frequency control",
      "Power plant operations",
    ],
  },
  {
    id: 9,
    title: "Electrical Safety Equipment",
    image:
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=500&h=300&fit=crop",
    points: [
      "Personal protective equipment",
      "Voltage testers",
      "Insulation materials",
      "Lockout/tagout procedures",
      "Arc flash protection",
    ],
  },
  {
    id: 10,
    title: "Energy Efficiency",
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=500&h=300&fit=crop",
    points: [
      "LED lighting technology",
      "Variable frequency drives",
      "Energy-efficient appliances",
      "Building management systems",
    ],
  },
];

export default function VoltageElectricitySlider() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">
        What We Offer – Products
      </h2>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {cardData.map((card) => (
            <CarouselItem
              key={card.id}
              className="pl-2 md:pl-4 sm:basis-1/2 md:basis-1/3"
            >
              <Card className="h-full">
                <CardContent className="flex flex-col p-4">
                  <Image
                    src={card.image}
                    alt={card.title}
                    width={500}
                    height={300}
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                  <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
                  <ul className="list-disc pl-5 text-sm">
                    {card.points.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
