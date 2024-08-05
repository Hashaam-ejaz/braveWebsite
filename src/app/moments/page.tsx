import { NextPage } from "next";
import Image from "next/image";
import headerImg from "/public/images/appraoch-header.jpg";
import section1Img from "/public/images/moments1.jpeg";

const Moments: NextPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#fbf6f3]">
      <main className="flex-1">
        <section className="relative w-full h-[20vh] overflow-hidden">
          <Image
            src={headerImg}
            alt="Hero Image"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#ffcccc] bg-opacity-60"></div>
        </section>

        <section className="flex flex-col px-40 py-24 font-garamond h-[60rem]">
          <div className="basis-1/4 sm:basis-1 lg:basis-1/4 flex flex-col font-garamond justify-center ml-8">
            <div className="text-[30px]">Our moments</div>
            <p className="text-[22px]">
              We create the narrative that make the headlines.
            </p>
          </div>
          <div className="basis-3/4 sm:basis-1 lg:basis-3/4 flex justify-center">
            <div className="relative w-full h-full overflow-hidden">
              <Image
                src={section1Img}
                alt="Hero Image"
                className="absolute inset-0 w-full h-full ms-4 "
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Moments;
