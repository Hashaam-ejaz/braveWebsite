import Link from "next/link";
const Header = () => {
  return (
    <div className="absolute top-0 left-0  flex font-garamond py-8 text-3xl mx-12 z-20">
      <Link className="mr-4" href={"/"}>
        Brave
      </Link>
      <div className="w-[2px] h-8 bg-black mr-4" />
      <Link className="mr-4" href={"/approach"}>
        Our Approach
      </Link>
      <div className="w-[2px] h-8 bg-black mr-4" />
      <Link className="mr-4" href={"/family"}>
        Our Family
      </Link>
      <div className="w-[2px] h-8 bg-black mr-4" />
      <Link className="mr-4" href={"/moments"}>
        Our Moments
      </Link>
    </div>
  );
};

export default Header;
