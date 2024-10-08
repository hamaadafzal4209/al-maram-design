"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const statsData = [
  {
    id: 1,
    imageUrl: "/assets/icon1.png",
    label: "Happy Customers",
    count: 1789,
  },
  {
    id: 2,
    imageUrl: "/assets/icon2.png",
    label: "Delivered Projects",
    count: 647,
  },
  {
    id: 3,
    imageUrl: "/assets/icon3.png",
    label: "Projects Done",
    count: 4000,
  },
  {
    id: 4,
    imageUrl: "/assets/icon4.png",
    label: "Cup of Coffee",
    count: 44,
  },
];

const useCountUp = (end, duration = 2000, trigger) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;

    let startTime = null;
    const animateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(animateCount);
      }
    };
    requestAnimationFrame(animateCount);
  }, [end, duration, trigger]);

  return count;
};

const StatItem = ({ imageUrl, label, count }) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const animatedCount = useCountUp(count, 2000, inView);

  return (
    <div ref={ref} className="flex flex-col items-center p-4">
      <div className="mb-4">
        <Image src={imageUrl} alt={label} width={64} height={64} />
      </div>
      <div className="text-4xl font-bold mb-2">{animatedCount}</div>
      <div className="text-lg text-gray-600">{label}</div>
    </div>
  );
};

export default function Stats() {
  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Stats
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Take a look at our impressive numbers
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {statsData.map((stat) => (
            <StatItem key={stat.id} {...stat} />
          ))}
        </div>
      </div>
    </div>
  );
}
