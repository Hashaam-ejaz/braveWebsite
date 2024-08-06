import { NextPage } from "next";
import Image from "next/image";
import headerImg from "/public/images/appraoch-header.jpg";
import section1Img from "/public/images/moments1.jpeg";

const Moments: NextPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#fbf6f3]">
      <main className="flex-1 ">
        <section className="relative w-full h-[15vh] md:h-[20vh] overflow-hidden">
          <Image
            src={headerImg}
            alt="Hero Image"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#ffcccc] bg-opacity-60"></div>
        </section>

        <section className="flex flex-col px-8 py-8 lg:px-40 lg:py-24 font-garamond  h-[30rem] sm:h-[35rem] md:h-[40rem] lg:h-[80rem]  text-center ">
          <div className="basis-1/4 flex flex-col font-garamond justify-center sm:pl-4 pl-0">
            <div className="text-[22px] sm:text-[24px] md:text-[26px] lg:text-[36px]">
              Our moments
            </div>
            <p className="text-base sm:text-[18px] md:text-[20px] lg:text-[26px] pt-2">
              We create the narrative that make the headlines.
            </p>
          </div>
          <div className="basis-3/4  flex justify-center">
            <div className="relative w-full h-full overflow-hidden">
              <Image
                src={section1Img}
                alt="Hero Image"
                className="absolute inset-0 w-full h-full ms-4 object-contain "
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Moments;
