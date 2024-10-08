"use client";
import Image from "next/image";
import React from "react";
import { motion, useInView } from "framer-motion";

const Stats = () => {
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

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {statsData.map((stat) => (
            <StatCard key={stat.id} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

const useCounter = (target, isInView) => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!isInView) return; // Exit early if not in view

    const startCount = () => {
      setCount(0); // Reset the count to 0
      const duration = 1000; // Duration of the counting animation
      const increment = Math.ceil(target / (duration / 100)); // Calculate the increment step based on duration

      const interval = setInterval(() => {
        setCount((prev) => {
          if (prev + increment >= target) {
            clearInterval(interval);
            return target; // Stop when target is reached
          }
          return prev + increment;
        });
      }, 100); // Update every 100ms

      return () => clearInterval(interval); // Cleanup on unmount
    };

    startCount();
  }, [target, isInView]);

  return count;
};

const StatCard = ({ stat }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true }); // Trigger animation once when in view
  const count = useCounter(stat.count, isInView); // Use counter only if in view

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg"
    >
      <Image
        width={80}
        height={80}
        src={stat.imageUrl}
        alt={stat.label}
        className="mb-4"
      />
      <motion.div
        className="text-4xl font-bold text-gray-800"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.5 }}
      >
        {count}
      </motion.div>
      <div className="text-lg text-gray-600">{stat.label}</div>
    </motion.div>
  );
};

export default Stats;
