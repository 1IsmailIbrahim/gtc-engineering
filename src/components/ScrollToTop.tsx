import { useState, useEffect } from "react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    if (scrollTop > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      className={`fixed bottom-4 right-4 p-3 rounded-full bg-primary text-white shadow-lg transition-opacity duration-300 z-50 ${
        isVisible ? "opacity-50" : "opacity-0"
      } hover:animate-bounce hover:opacity-100`}
      onClick={scrollToTop}
      style={{ display: isVisible ? "block" : "none" }}
    >
      ↑
    </button>
  );
};

export default ScrollToTop;
