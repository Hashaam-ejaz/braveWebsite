"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import braveLogo from "../../../public/images/braveLogo.svg";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 180); // Adjust the scroll value as needed
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`mt-[-6rem] pt-3 sticky top-0 z-20 flex justify-around items-center md:text-[24px] text-[13px] lg:text-[32px] pb-2 transition-all duration-200 ease-in-out ${
        scrolled
          ? "bg-[rgba(255,255,255,0.7)] backdrop-blur-[6px] text-black"
          : "bg-transparent text-white"
      }`}
    >
      <Link href={"/"}>
        <Image
          src={braveLogo}
          alt="Brave Logo"
          width={50} // Adjust the width
          height={50} // Adjust the height
        />
      </Link>

      <div className="w-[1px] h-6 lg:h-12 bg-white" />

      <Link href={"/"}>
        <span className="font-bold">BRAVE</span>
      </Link>

      <div className="w-[1px] h-6 lg:h-12 bg-white" />

      <Link href={"/approach"}>Our Approach</Link>

      <div className="w-[1px] h-6 lg:h-12 bg-white" />

      <Link href={"/family"}>Our Family</Link>

      <div className="w-[1px] h-6 lg:h-12 bg-white" />

      <Link href={"/moments"}>Our Moments</Link>
    </div>
  );
};

export default Header;
