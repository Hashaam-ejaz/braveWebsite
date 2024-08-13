import Image from "next/image";
import headerImg from "@assets/images/appraoch-header.jpg";
import section1Img from "@assets/images/approach1.png";
import section2Img from "@assets/images/appraoch2.png";
import section3Img from "@assets/images/appraoch3.png";

const Approach = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#fbf6f3]">
      <main className="flex-1">
        <section className="relative w-full h-[15vh] md:h-[20vh] overflow-hidden">
          <Image
            src={headerImg}
            alt="Hero Image"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#ffcccc] bg-opacity-60"></div>
        </section>

        <section className="flex flex-col lg:flex-row px-20 lg:px-40 py-12 lg:py-24 font-garamond h-fit lg:h-96">
          <div className="basis-1/4 sm:basis-1 lg:basis-1/4 text-[22px] font-garamond mb-6 lg:mb-0 text-center lg:text-start">
            We combines the three fundamental and dynamic elements in any market
            – people, businesses, and their interactions.
          </div>
          <div className="basis-3/4 sm:basis-1 lg:basis-3/4 text-[22px] sm:text-[24px] md:text-[26px] lg:text-[30px] flex justify-center ">
            <div className="w-full h-full overflow-hidden">
              <Image
                src={section1Img}
                alt="Hero Image"
                className=" w-full h-full object-contain"
              />
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-3 gap-x-4 px-20 lg:px-40 py-4 lg:py-24 text-center lg:text-start">
          <div className="flex flex-col">
            <p className="text-[22px] sm:text-[24px] md:text-[26px] lg:text-[30px] font-garamond font-semibold">
              HUMAN MIND-STATE
            </p>
            <p className="text-base sm:text-[18px] md:text-[20px]  lg:text-[22px] font-garamond ">
              Explore the changing world of people.
            </p>
            <p className="text-base sm:text-[18px] md:text-[20px]  lg:text-[22px] text-pink-600 font-garamond pt-1 md:pt-2 lg:pt-5 pb-4 lg:pb-0">
              Ask the Why behind the What.
            </p>
          </div>
          <div className="flex flex-col">
            <p className="text-[22px] sm:text-[24px] md:text-[26px] lg:text-[30px] font-garamond font-semibold">
              EXPERIENCES
            </p>
            <p className="text-base sm:text-[18px] md:text-[20px]  lg:text-[22px] font-garamond ">
              Creating connections with people.
            </p>
            <p className="text-base sm:text-[18px] md:text-[20px]  lg:text-[22px] text-pink-600 font-garamond pt-1 md:pt-2 lg:pt-5 pb-4 lg:pb-0">
              Design ahead of expectations.
            </p>
          </div>
          <div className="flex flex-col">
            <p className="text-[22px] sm:text-[24px] md:text-[26px] lg:text-[30px] font-garamond font-semibold">
              ECONOMICS
            </p>
            <p className="text-base sm:text-[18px] md:text-[20px]  lg:text-[22px] font-garamond ">
              Sizing, prioritizing & creating opportunities.
            </p>
            <p className="text-base sm:text-[18px] md:text-[20px]  lg:text-[22px] text-pink-600 font-garamond pt-1 md:pt-2 lg:pt-5 pb-4 lg:pb-0">
              Do the Maths
            </p>
          </div>
        </section>

        <section className="flex flex-col lg:flex-row px-20 lg:px-40 py-4 lg:py-24 font-garamond h-fit lg:h-[30rem]">
          <div className="basis-2/4 sm:basis-1 lg:basis-2/4  flex flex-col font-garamond ">
            <div className="text-[22px] sm:text-[24px] md:text-[26px] lg:text-[30px] text-center lg:text-start">
              THE OPPORTUNITY
            </div>
            <p className="text-base sm:text-[18px] md:text-[20px]  lg:text-[22px] text-center lg:text-start">
              The opportunity exists between the Brand and the people, a unique
              combination of Brand-led touch points. Literally any point that
              the people/patient will touch the brand.
            </p>
            <p className="text-base sm:text-[18px] md:text-[20px]  lg:text-[22px] text-center lg:text-start mb-8 lg:mb-0">
              Whenever and wherever your customer meets your brand.
            </p>
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

        <section className="flex flex-col lg:flex-row px-20 lg:px-40 py-12 lg:py-24 font-garamond h-fit lg:h-[30rem]">
          <div className="basis-2/4 sm:basis-1 lg:basis-2/4  flex flex-col font-garamond ">
            <div className="text-[22px] sm:text-[24px] md:text-[26px] lg:text-[30px] text-center lg:text-start">
              THE JOURNEY
            </div>
            <p className="text-base sm:text-[18px] md:text-[20px]  lg:text-[22px] mb-8 lg:mb-0 text-center lg:text-start">
              Within the proposed project to support and deliver the strategy –
              a customised Journey Framework will deliver the optimal match
              making structure to deliver the seamless journey for optimal
              impact.
            </p>
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
