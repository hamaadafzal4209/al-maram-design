import * as React from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

const cardData = [
  {
    id: 1,
    title: "High Voltage Power Lines",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG93ZXIlMjBsaW5lc3xlbnwwfHwwfHx8MA%3D%3D",
    points: [
      "Transmission of electricity",
      "High voltage systems",
      "Power grid infrastructure",
      "Safety considerations",
      "Long-distance energy transfer"
    ]
  },
  {
    id: 2,
    title: "Circuit Boards",
    image: "https://images.pexels.com/photos/825262/pexels-photo-825262.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    points: [
      "Electronic components",
      "Voltage regulation",
      "Circuit design",
      "Power distribution"
    ]
  },
  {
    id: 3,
    title: "Renewable Energy",
    image: "https://cdn.pixabay.com/photo/2017/11/11/17/05/solar-system-2939560_1280.jpg",
    points: [
      "Solar panel voltage",
      "Wind turbine generators",
      "Energy storage systems",
      "Inverter technology",
      "Grid integration"
    ]
  },
  {
    id: 4,
    title: "Electric Vehicles",
    image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGVsZWN0cmljJTIwY2FyfGVufDB8fDB8fHww",
    points: [
      "Battery voltage management",
      "Charging infrastructure",
      "Motor efficiency",
      "Power electronics"
    ]
  },
  {
    id: 5,
    title: "Smart Home Technology",
    image: "https://images.pexels.com/photos/3855962/pexels-photo-3855962.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    points: [
      "Home automation",
      "Energy monitoring",
      "Voltage optimization",
      "Smart meters",
      "IoT devices"
    ]
  },
  {
    id: 6,
    title: "Industrial Electrical Systems",
    image: "https://cdn.pixabay.com/photo/2017/03/20/21/00/server-2160321_1280.jpg",
    points: [
      "Three-phase power",
      "Motor control centers",
      "SCADA systems",
      "Power factor correction"
    ]
  },
  {
    id: 7,
    title: "Lightning and Surge Protection",
    image: "https://images.unsplash.com/photo-1429552077091-836152271555?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGlnaHRuaW5nfGVufDB8fDB8fHww",
    points: [
      "Voltage spikes",
      "Grounding techniques",
      "Surge arresters",
      "Transient voltage suppression",
      "Equipment protection"
    ]
  },
  {
    id: 8,
    title: "Power Generation",
    image: "https://images.pexels.com/photos/9800002/pexels-photo-9800002.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    points: [
      "Generators and alternators",
      "Voltage regulation",
      "Frequency control",
      "Power plant operations"
    ]
  },
  {
    id: 9,
    title: "Electrical Safety Equipment",
    image: "https://cdn.pixabay.com/photo/2017/08/10/07/32/electrician-2619987_1280.jpg",
    points: [
      "Personal protective equipment",
      "Voltage testers",
      "Insulation materials",
      "Lockout/tagout procedures",
      "Arc flash protection"
    ]
  },
  {
    id: 10,
    title: "Energy Efficiency",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG93ZXIlMjBsaW5lc3xlbnwwfHwwfHx8MA%3D%3D",
    points: [
      "LED lighting technology",
      "Variable frequency drives",
      "Energy-efficient appliances",
      "Building management systems"
    ]
  }
]

export default function VoltageElectricitySlider() {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full max-w-6xl mx-auto"
    >
      <CarouselContent>
        {cardData.map((card) => (
          <CarouselItem key={card.id} className="sm:basis-1/2 md:basis-1/3">
            <Card className="m-1">
              <CardContent className="flex flex-col p-4">
                <Image
                  src={card.image}
                  alt={card.title}
                  width={300}
                  height={200}
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
  )
}