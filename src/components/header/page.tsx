import Link from "next/link";
const Header = () => {
  return (
    <div className="flex w-full h-full font-garamond py-8 text-3xl mx-12 ">
      <Link className="flex mr-4" href={"/"}>
        Brave
      </Link>
      <div className="flex w-[2px] h-8 bg-black mr-4" />
      <Link className="flex mr-4" href={"/approach"}>
        Our Approach
      </Link>
      <div className="flex w-[2px] h-8 bg-black mr-4" />
      <Link className="flex mr-4" href={"/family"}>
        {" "}
        Our Family
      </Link>
      <div className="flex w-[2px] h-8 bg-black mr-4" />
      <Link className="flex mr-4" href={"/moments"}>
        {" "}
        Our Moments
      </Link>
    </div>
  );
};

export default Header;
