import Image from "next/image";
import approachTop from "@assets/images/approachTop.png";
import approach2 from "@assets/images/Approach2.png";
import section2Img from "@assets/images/appraoch2.png";
import section3Img from "@assets/images/approach3.png";

const Approach = () => {
  return (
    <div className="flex flex-col min-h-screen font-garamond">
      <main className="flex-1">
        <section className="relative w-full h-[100vh] overflow-hidden">
          <Image
            src={approachTop}
            alt="Hero Image"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-10 flex items-center justify-center w-full h-full  sm:pl-1 md:pl-2 lg:pl-10">
            <h1 className=" text-white text-[32px] md:text-[48px] lg:text-[100px] uppercase font-garamond">
              OUR APPROACH
            </h1>
          </div>
        </section>

        <section className="flex flex-col lg:flex-row font-garamond h-fit text-center text-[16px] sm:text-[20px] md:text-[26px] lg:text-[32px] my-[32px] lg:mt-[70px] lg:mb-[70px] mx-[38px] lg:mx-[156px]">
          We are a brand & business strategy company that helps clients build 
          “Stronger Brands ”
        </section>

        <section className="relative w-full overflow-hidden h-[800px]">
          <Image
            src={approach2}
            alt="Hero Image"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </section>

        <section className="flex flex-col lg:flex-row font-garamond h-fit lg:h-[30rem] mx-[36px] lg:mx-[160px] mt-[100px] lg:mt-[136px]">
          <div className="basis-2/4 sm:basis-1 lg:basis-2/4  flex flex-col font-garamond lg:mr-[100px]">
            <div className="text-[22px] sm:text-[24px] md:text-[26px] lg:text-[32.53px] text-center lg:text-start italic mb-[34px] lg:mt-36">
              <span className="not-italic mr-2 lg:mr-3">BRAVE</span> fuels
              businesses to make Iconic Moves
            </div>
          </div>
          <div className="basis-2/4 sm:basis-1 lg:basis-2/4 text-[22px] sm:text-[24px] md:text-[26px] lg:text-[30px] flex justify-center ">
            <div className="w-full h-full overflow-hidden">
              <Image
                src={section2Img}
                alt="Hero Image"
                className=" w-full h-full object-contain"
              />
            </div>
          </div>
        </section>

        <section className="flex flex-col lg:flex-row font-garamond h-fit lg:h-[30rem] mx-[36px] lg:mx-[160px] mt-[100px] lg:mt-[136px] lg:mb-20 mb-10">
          <div className="basis-2/4 sm:basis-1 lg:basis-2/4  flex flex-col font-garamond lg:mr-[100px]">
            <div className="text-[22px] sm:text-[24px] md:text-[26px] lg:text-[32.53px] text-center lg:text-start italic mb-[34px] lg:mt-36">
              <span className="not-italic mr-2 lg:mr-3">BRAVE</span> unleashes
              growth opportunities with the Brand at the Center
            </div>
          </div>
          <div className="basis-2/4 sm:basis-1 lg:basis-2/4 text-[22px] sm:text-[24px] md:text-[26px] lg:text-[30px] flex justify-center ">
            <div className="w-full h-full overflow-hidden">
              <Image
                src={section3Img}
                alt="Hero Image"
                className=" w-full h-full object-contain"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Approach;
