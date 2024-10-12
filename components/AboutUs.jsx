import Image from "next/image";
import { User2, Award } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Image
              src="https://images.unsplash.com/photo-1565439371-7e24a35e0206?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbnVmYWN0dXJpbmclMjBmYWNpbGl0eXxlbnwwfHwwfHx8MA%3D%3D"
              alt="Modern manufacturing facility with robotic arms"
              width={800}
              height={533}
              className="rounded-lg object-cover w-full h-full"
            />
            <Image
              src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2VsZGluZ3xlbnwwfHwwfHx8MA%3D%3D"
              alt="Precision welding process"
              width={800}
              height={533}
              className="rounded-lg object-cover w-full h-full"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
              We provide a world-class fabrication, welding and machining
              service.
            </h2>
            <p className="text-gray-600 mb-6">
              At our state-of-the-art manufacturing facility, we pride ourselves
              on delivering exceptional quality and precision in every project.
              Our cutting-edge equipment and highly skilled team ensure that we
              meet the most demanding specifications in fabrication, welding,
              and machining.
            </p>
            <p className="text-gray-600 mb-8">
              With years of experience serving diverse industries, we have built
              a reputation for reliability, innovation, and customer
              satisfaction. Whether you need custom parts, prototypes, or
              large-scale production, we have the expertise to bring your vision
              to life with unparalleled craftsmanship.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex items-center gap-4">
                <User2 className="w-12 h-12 text-blue-600" />
                <div>
                  <h3 className="font-semibold text-gray-800">Our Workers</h3>
                  <p className="text-gray-600">Expert Certified Engineers</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Award className="w-12 h-12 text-blue-600" />
                <div>
                  <h3 className="font-semibold text-gray-800">Awards</h3>
                  <p className="text-gray-600">Quality Service Certified</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
