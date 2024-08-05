import Image from "next/image";
import headerImg from "/public/images/appraoch-header.jpg";
import section1Img from "/public/images/approach1.png";
import section2Img from "/public/images/appraoch2.png";
import section3Img from "/public/images/appraoch3.png";

const Approach = () => {
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

        <section className="flex flex-row px-40 py-24 font-garamond h-96 ">
          <div className="basis-1/4 sm:basis-1 lg:basis-1/4 text-[22px] font-garamond ">
            We combines the three fundamental and dynamic elements in any market
            – people, businesses, and their interactions.
          </div>
          <div className="basis-3/4 sm:basis-1 lg:basis-3/4 text-[30px] flex justify-center ">
            <div className="w-full h-full overflow-hidden">
              <Image
                src={section1Img}
                alt="Hero Image"
                className=" w-full h-full object-contain"
              />
            </div>
          </div>
        </section>

        <section className="grid grid-cols-3 gap-x-4 px-40 py-24">
          <div className="flex flex-col">
            <p className="text-[30px] font-garamond font-semibold">
              HUMAN MIND-STATE
            </p>
            <p className="text-[22px] font-garamond ">
              Explore the changing world of people.
            </p>
            <p className="text-[22px] text-pink-600 font-garamond pt-5 ">
              Ask the Why behind the What.
            </p>
          </div>
          <div className="flex flex-col">
            <p className="text-[30px] font-garamond font-semibold">
              EXPERIENCES
            </p>
            <p className="text-[22px] font-garamond ">
              Creating connections with people.
            </p>
            <p className="text-[22px] text-pink-600 font-garamond pt-5 ">
              Design ahead of expectations.
            </p>
          </div>
          <div className="flex flex-col">
            <p className="text-[30px] font-garamond font-semibold">ECONOMICS</p>
            <p className="text-[22px] font-garamond ">
              Sizing, prioritizing & creating opportunities.
            </p>
            <p className="text-[22px] text-pink-600 font-garamond pt-5 ">
              Do the Maths
            </p>
          </div>
        </section>

        <section className="flex flex-row px-40 py-24 font-garamond h-[30rem] ">
          <div className="basis-2/4 sm:basis-1 lg:basis-2/4  flex flex-col font-garamond ">
            <div className="text-[30px]">THE OPPORTUNITY</div>
            <p className="text-[22px]">
              The opportunity exists between the Brand and the people, a unique
              combination of Brand-led touch points. Literally any point that
              the people/patient will touch the brand.
            </p>
            <p className="text-[22px]">
              Whenever and wherever your customer meets your brand.
            </p>
          </div>
          <div className="basis-2/4 sm:basis-1 lg:basis-2/4 text-[30px] flex justify-center ">
            <div className="w-full h-full overflow-hidden">
              <Image
                src={section2Img}
                alt="Hero Image"
                className=" w-full h-full object-contain"
              />
            </div>
          </div>
        </section>

        <section className="flex flex-row px-40 py-24 font-garamond h-[30rem] ">
          <div className="basis-2/4 sm:basis-1 lg:basis-2/4  flex flex-col font-garamond ">
            <div className="text-[30px]">THE JOURNEY</div>
            <p className="text-[22px]">
              Within the proposed project to support and deliver the strategy –
              a customised Journey Framework will deliver the optimal match
              making structure to deliver the seamless journey for optimal
              impact.
            </p>
          </div>
          <div className="basis-2/4 sm:basis-1 lg:basis-2/4 text-[30px] flex justify-center ">
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
