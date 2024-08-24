import Link from "next/link";
const Header = () => {
  return (
    <div className="absolute top-0 z-20 flex justify-center w-full text-white font-garamond mt-[20px] lg:mt-[26px] text-[13px] lg:text-[32px]">
      <Link className="mr-2 lg:mr-[62px]" href={"/"}>
        <span className="font-bold">Brave</span>
      </Link>
      <div className="w-[1px] h-6 lg:h-12 bg-white mr-2 lg:mr-[62px]" />
      <Link className="mr-2 lg:mr-[62px]" href={"/approach"}>
        Our Approach
      </Link>
      <div className="w-[1px] h-6 lg:h-12 bg-white mr-2 lg:mr-[62px]" />
      <Link className="mr-2 lg:mr-[62px]" href={"/family"}>
        Our Family
      </Link>
      <div className="w-[1px] h-6 lg:h-12 bg-white mr-2 lg:mr-[62px]" />
      <Link href={"/moments"}>Our Moments</Link>
    </div>
  );
};

export default Header;
