"use client";
import { useEffect, useState } from "react";

const Footer = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300); // Show button when scrolled down 300px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="flex justify-center   items-center w-full">
      <div className=" border-t border-black rounded-b-lg px-4 md:px-6 py-8 flex flex-col md:flex-row justify-between items-center w-[90%]">
        <div className="font-bold lg:font-normal text-[28.42px] lg:text-[44.15px] font-garamond lg:mr-20 text-center lg:whitespace-nowrap">
          THE BRAVE AGENCY
        </div>
        <div className="lg:text-right  mt-4 md:mt-0 text-muted-foreground space-y-1 font-garamond w-[90%] text-center md:text-right text-[22px] md:text-[22px] lg:text-[24px] leading-8 overflow-hidden">
          <div>USA</div>
          <div className="truncate lg:pb-2">info@thebraveagency.co</div>
          <div>+1 917 203 4439</div>
        </div>
      </div>
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 bg-black text-white p-2 rounded-full shadow-lg hover:bg-gray-800 transition-colors z-50"
          aria-label="Scroll to top"
        >
          ↑ Top
        </button>
      )}
    </footer>
  );
};

export default Footer;
