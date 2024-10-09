"use client";
import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa"; // Import the arrow icon

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 bg-main text-black rounded-md p-2 shadow-lg"
        >
          <FaArrowUp size={16} />
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
