"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CircleIcon,
  CableIcon,
  WrenchIcon,
  TestTubeIcon,
  TruckIcon,
  ShieldCheckIcon,
} from "lucide-react";
import { Fade } from "react-awesome-reveal";

const specializations = [
  {
    icon: CircleIcon,
    title: "Manufacturing of LV panel boards",
    description:
      "State-of-the-art production of low voltage panel boards for various applications.",
  },
  {
    icon: CableIcon,
    title: "Complete wiring and cable management",
    description:
      "Expert cable terminations, connections, indications, and labeling of panels.",
  },
  {
    icon: WrenchIcon,
    title: "Supply and installation",
    description:
      "Seamless supply and professional installation of panel boards.",
  },
  {
    icon: TestTubeIcon,
    title: "Testing and Commissioning",
    description:
      "Rigorous testing and commissioning to ensure optimal performance.",
  },
  {
    icon: TruckIcon,
    title: "After sales services",
    description:
      "Comprehensive support and maintenance services post-installation.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Predictive and preventive maintenance",
    description:
      "Advanced maintenance strategies to prevent issues and extend equipment life.",
  },
];

export default function Services() {
  return (
    <section className="py-12 text-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="text-center mb-16">
          <Badge
            variant="outline"
            className="mb-4 text-sm font-medium rounded-full text-gray-400 border-gray-600"
          >
            What We Do
          </Badge>
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            We Are Specialists In
          </h2>
          <div className="mt-4 max-w-3xl mx-auto">
            <p className="text-xl text-gray-400">
              Delivering top-tier electrical solutions with precision and
              expertise.
            </p>
          </div>
        </div>
        <Fade>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specializations.map((spec, index) => (
              <Fade key={index} delay={index * 100}>
                <Card
                  className="overflow-hidden hover:shadow-lg hover:-translate-y-2 transition-all duration-300 bg-gray-800 border border-gray-700"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-main">
                          <spec.icon className="h-8 w-8 text-main" />
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-semibold text-gray-200 truncate">
                          {spec.title}
                        </h3>
                      </div>
                    </div>
                    <p className="mt-4 text-base text-gray-400">
                      {spec.description}
                    </p>
                  </CardContent>
                </Card>
              </Fade>
            ))}
          </div>
        </Fade>
      </div>
    </section>
  );
}