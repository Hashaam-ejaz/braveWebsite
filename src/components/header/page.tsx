import Link from "next/link";
import Image from "next/image";
import braveLogo from "../../../public/images/braveLogo.svg";

const Header = () => {
  return (
    <div className="absolute top-0 z-20 flex justify-around items-center w-full text-white mt-[20px] lg:mt-[26px] md:text-[24px] text-[13px] lg:text-[32px]">
      <Link href={"/"}>
        <Image
          src={braveLogo}
          alt="Brave Logo"
          width={50} // Adjust the width
          height={50} // Adjust the height
        />
      </Link>

      <div className="w-[1px] h-6 lg:h-12 bg-white " />

      <Link href={"/"}>
        <span className="font-bold">BRAVE</span>
      </Link>

      <div className="w-[1px] h-6 lg:h-12 bg-white " />

      <Link href={"/approach"}>Our Approach</Link>

      <div className="w-[1px] h-6 lg:h-12 bg-white " />

      <Link href={"/family"}>Our Family</Link>

      <div className="w-[1px] h-6 lg:h-12 bg-white " />

      <Link href={"/moments"}>Our Moments</Link>
    </div>
  );
};

export default Header;
