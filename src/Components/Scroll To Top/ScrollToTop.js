import React, { useState, useEffect } from "react";
import { ArrowUp } from "iconsax-react"; // You can also use any icon library or custom icon
import "./scrollTop.css"; // Optional if you want to style the button

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="scroll-to-top">
      {isVisible && (
        <div onClick={scrollToTop} className="scroll-btn">
          <ArrowUp size="25" color="#fff" />
        </div>
      )}
    </div>
  );
};

export default ScrollToTop;
