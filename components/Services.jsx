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

// Updated specializations data based on AMF-SA website
const specializations = [
  {
    icon: CircleIcon,
    title: "Turnkey Electrical Solutions",
    description:
      "Providing complete turnkey solutions for electrical installations, covering design, procurement, installation, and commissioning for various industries.",
  },
  {
    icon: CableIcon,
    title: "Electrical Panel Manufacturing",
    description:
      "Manufacturing high-quality electrical panels with advanced technology to meet the diverse needs of commercial and industrial applications.",
  },
  {
    icon: WrenchIcon,
    title: "Project Management and Execution",
    description:
      "Delivering projects on time and within budget with professional project management, ensuring seamless integration of all electrical systems.",
  },
  {
    icon: TestTubeIcon,
    title: "Testing and Quality Assurance",
    description:
      "Comprehensive testing and quality assurance services, ensuring the safety and efficiency of all installed electrical systems.",
  },
  {
    icon: TruckIcon,
    title: "Maintenance and Support",
    description:
      "Offering ongoing maintenance and support services to ensure the longevity and optimal performance of electrical systems.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Compliance and Safety Standards",
    description:
      "Ensuring that all installations meet local and international safety and compliance standards for a secure and reliable electrical infrastructure.",
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
          <h2 className="text-3xl font-extrabold tracking-tight md:text-5xl">
            Our Core Specializations
          </h2>
          <div className="mt-4 max-w-3xl mx-auto">
            <p className="text-xl text-gray-400">
              Delivering end-to-end electrical solutions with quality,
              expertise, and professionalism.
            </p>
          </div>
        </div>
        <Fade triggerOnce>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specializations.map((spec, index) => (
              <Fade triggerOnce key={index} delay={index * 100}>
                <Card className="overflow-hidden bg-gradient-to-br from-slate-700 to-slate-800 hover:shadow-lg hover:-translate-y-2 transition-all duration-300 bg-gray-800 border border-gray-700">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-main-300">
                          <spec.icon className="h-8 w-8 text-main-300" />
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-semibold text-gray-200 line-clamp-2">
                          {spec.title}
                        </h3>
                      </div>
                    </div>
                    <p className="mt-4 text-base text-gray-400 sm:line-clamp-4">
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
