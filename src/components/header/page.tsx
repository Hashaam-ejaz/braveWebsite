import Link from "next/link";
const Header = () => {
  return (
    <div className="absolute top-0 z-20 md:w-fit w-full flex justify-center font-garamond py-4 text-md mx-auto sm:py-6 sm:text-xl md:mx-12 md:py-8 md:text-3xl">
      <Link className="mr-2 md:mr-4" href={"/"}>
        Brave
      </Link>
      <div className="w-[2px] h-8 bg-black mr-2 md:mr-4" />
      <Link className="mr-2 md:mr-4" href={"/approach"}>
        Our Approach
      </Link>
      <div className="w-[2px] h-8 bg-black mr-2 md:mr-4" />
      <Link className="mr-2 md:mr-4" href={"/family"}>
        Our Family
      </Link>
      <div className="w-[2px] h-8 bg-black mr-2 md:mr-4" />
      <Link href={"/moments"}>Our Moments</Link>
    </div>
  );
};

export default Header;
