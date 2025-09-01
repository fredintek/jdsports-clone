"use client";
import { ArrowUpOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show/hide the button depending on scroll position
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll back to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 border border-[#2a8272] right-6 p-3 rounded-full bg-[#2a8272] text-black shadow-xl hover:bg-white hover:text-[#2a8272] transition-all duration-300 w-12 h-12 flex justify-center items-center"
        >
          <ArrowUpOutlined className="text-xl" />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
