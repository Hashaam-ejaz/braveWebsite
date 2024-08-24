import Image from "next/image";
// import headerImg from "@assets/images/appraoch-header.jpg";
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

        <section className="flex flex-col lg:flex-row font-garamond h-fit text-center text-[16px] sm:text-[20px] md:text-[26px] lg:text-[32px] my-[32px] lg:mt-[70px] mx-[38px] lg:mx-[156px]">
          We combines the three fundamental and dynamic elements in any market –
          people, businesses, and their interactions.
        </section>

        <section className="relative w-full overflow-hidden h-[800px]">
          <Image
            src={approach2}
            alt="Hero Image"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </section>

        <section className="flex flex-col lg:flex-row font-garamond h-fit lg:h-[30rem] mx-[36px] lg:mx-[160px] mt-[30px] lg:mt-[136px]">
          <div className="basis-2/4 sm:basis-1 lg:basis-2/4  flex flex-col font-garamond lg:mr-[100px]">
            <div className="text-[22px] sm:text-[24px] md:text-[26px] lg:text-[32.53px] text-center lg:text-start italic mb-[34px]">
              THE OPPORTUNITY
            </div>
            <p className="leading-4 md:leading-6 lg:leading-8  text-base sm:text-[18px] md:text-[20px]  lg:text-[22px] text-center lg:text-start">
              The opportunity exists between the Brand and the people, a unique
              combination of Brand-led touch points. Literally any point that
              the people/patient will touch the brand.
            </p>
            <p className="text-base sm:text-[18px] md:text-[20px]  lg:text-[22px] text-center lg:text-start mb-8 lg:mb-0">
              Whenever and wherever your customer meets your brand.
            </p>
          </div>
          <div className="basis-2/4 sm:basis-1 lg:basis-2/4 text-[22px] sm:text-[24px] md:text-[26px] lg:text-[30px] flex justify-center ">
            <div className="w-full h-full overflow-hidden rounded-full">
              <Image
                src={section2Img}
                alt="Hero Image"
                className=" w-full h-full object-contain"
              />
            </div>
          </div>
        </section>

        <section className="flex flex-col lg:flex-row font-garamond h-fit lg:h-[30rem] mx-[36px] lg:mx-[160px] mt-[40px] lg:mt-[136px] mb-[30px] lg:mb-[130px]">
          <div className="basis-2/4 sm:basis-1 lg:basis-2/4  flex flex-col font-garamond lg:mr-[100px]">
            <div className="text-[22px] sm:text-[24px] md:text-[26px] lg:text-[32.53px] text-center lg:text-start italic mb-[34px]">
              THE JOURNEY
            </div>
            <p className="leading-4 md:leading-6 lg:leading-8  text-base sm:text-[18px] md:text-[20px]  lg:text-[22px] text-center lg:text-start">
              Within the proposed project to support and deliver the strategy –
              a customised Journey Framework will deliver the optimal match
              making structure to deliver the seamless journey for optimal
              impact.
            </p>
          </div>
          <div className="basis-2/4 sm:basis-1 lg:basis-2/4 text-[22px] sm:text-[24px] md:text-[26px] lg:text-[30px] flex justify-center mt-[30px]">
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
