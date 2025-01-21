"use client"; // Required since `usePathname` is a client-side hook in Next.js

import Link from "next/link";
import Image from "next/image";
import braveLogo from "../../../public/images/braveLogo.svg";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname(); // Get the current pathname

  // Helper function to determine active link styles
  const getLinkClass = (path: string) => {
    return pathname === path ? "font-extrabold" : ""; // Add 'font-extrabold' if the link matches the pathname
  };

  return (
    <div className="lg:w-2/3 w-full absolute top-0 z-20 flex justify-around items-center text-white mt-[20px] lg:mt-[26px] md:text-[24px] text-[10px] lg:text-[28px]">
      <Link href={"/"}>
        <Image src={braveLogo} alt="Brave Logo" width={25} height={25} />
      </Link>

      <Link href={"/"}>
        <span className={getLinkClass("/")}>BRAVE</span>
      </Link>

      <div className="w-[1px] h-6 lg:h-12 bg-white " />

      <Link href={"/approach"}>
        <span className={getLinkClass("/approach")}>Our Approach</span>
      </Link>

      <div className="w-[1px] h-6 lg:h-12 bg-white " />

      <Link href={"/family"}>
        <span className={getLinkClass("/family")}>Our Family</span>
      </Link>

      <div className="w-[1px] h-6 lg:h-12 bg-white " />

      <Link href={"/moments"}>
        <span className={getLinkClass("/moments")}>Our Moments</span>
      </Link>
    </div>
  );
};

export default Header;
