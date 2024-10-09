import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "Electrical Engineer",
    imageUrl:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&crop=faces&auto=format&q=80",
  },
  {
    name: "Michael Chen",
    role: "Project Manager",
    imageUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=faces&auto=format&q=80",
  },
  {
    name: "Emily Rodriguez",
    role: "Renewable Energy Specialist",
    imageUrl:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=faces&auto=format&q=80",
  },
  {
    name: "David Thompson",
    role: "Safety Coordinator",
    imageUrl:
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=300&h=300&fit=crop&crop=faces&auto=format&q=80",
  },
  {
    name: "Lisa Patel",
    role: "Customer Relations Manager",
    imageUrl:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=faces&auto=format&q=80",
  },
  {
    name: "Robert Jackson",
    role: "Maintenance Technician",
    imageUrl:
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=300&h=300&fit=crop&crop=faces&auto=format&q=80",
  },
];

export default function TeamMember() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-20 py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-main">
          Our Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg"
            >
              <CardContent className="p-0">
                <Image
                  width={1000}
                  height={1000}
                  src={member.imageUrl}
                  alt={member.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-1 text-main">
                    {member.name}
                  </h3>
                  <p className="text-sm text-gray-600">{member.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
