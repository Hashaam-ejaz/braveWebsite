"use client";
import { useEffect, useState } from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@components/ui/drawer";
import { ScrollArea } from "@components/ui/scroll-area";
import SimpleContactForm from "@components/contact-form";

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

  const [showSheet, setshowSheet] = useState<boolean>(false);

  return (
    <footer className="flex justify-center items-center w-full flex-col mt-6">
      <div className="flex flex-col lg:flex-row w-full pl-4 bg-[#D9D9D9] pt-1 md:w-[90%] md:mb-[14px] items-center">
        <div className="flex flex-col">
          <div className="text-[28.42px]">
            For <span className="font-bold">BRAVE</span> Living
            <br />
          </div>
          <div className="text-[1rem] mb-[25px]">
            Get Connected To The Brave Community
          </div>
        </div>
        <Drawer open={showSheet} onOpenChange={setshowSheet}>
          <DrawerTrigger asChild>
            <button className=" bg-black text-white px-4 py-2 rounded-full text-lg hover:bg-gray-800 transition-colors w-[180px] text-[14px] font-normal mb-4 lg:ml-48 ml-auto mr-auto h-12">
              Get in Touch
            </button>
          </DrawerTrigger>
          <DrawerContent>
            <ScrollArea className="overflow-y-auto">
              <SimpleContactForm setShowSheet={setshowSheet} />
            </ScrollArea>
          </DrawerContent>
        </Drawer>
      </div>
      <div className="border-t border-black rounded-b-lg px-4 md:px-6 py-8 flex flex-col md:flex-row justify-between items-center w-full  md:w-[90%]">
        <div className="font-normal text-[28.42px] lg:text-[44.15px] lg:mr-20 text-center lg:whitespace-nowrap">
          THE BRAVE AGENCY
          <div></div>
        </div>
        <div className="lg:text-right mt-4 md:mt-0 text-muted-foreground space-y-1 w-[90%] text-center md:text-right text-[22px] md:text-[22px] lg:text-[24px] leading-8 overflow-hidden">
          <div className="lg:pb-2">USA</div>
          <div className="truncate lg:pb-2">info@thebraveagency.co</div>
          <div>+1 917 203 4439</div>
        </div>
      </div>

      {/* Scroll to Top Button */}
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
