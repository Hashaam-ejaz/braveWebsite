import Image from "next/image";
import approachTop from "@assets/images/approachTop.webp";
import approach22 from "@assets/images/Approach22.webp";
import approach222 from "@assets/images/Approach222.webp";
import section2Img from "@assets/images/appraoch2.webp";
import section3Img from "@assets/images/approach3.webp";
import FlipTile from "@components/flip-tile/flip-tile";

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
            <div className="flex flex-col">
              <h1 className=" text-white text-[32px] md:text-[48px] lg:text-[100px] uppercase font-garamond">
                OUR APPROACH
              </h1>
              <h1 className="text-center text-white text-[15px] md:text-[30px] lg:text-[36px] font-garamond font-thin	">
                Strategy & Creativity
              </h1>
            </div>
          </div>
        </section>

        <section className="font-garamond h-fit text-center text-[16px] sm:text-[20px] md:text-[26px] lg:text-[32px] my-[32px] lg:mt-[70px] lg:mb-[70px] mx-12 lg:mx-24">
          We are a strategy company that helps clients build
          <br className="hidden lg:block" />
          <span className="italic ml-2 lg:ml-0">“Stronger Brands”</span>
        </section>

        <section className="relative w-full h-[80vh] sm:h-[60vh] md:h-[80vh] lg:h-[101vh]">
          {/* Mobile image */}
          <Image
            src={approach222}
            alt="Hero Image Mobile"
            className="absolute inset-0 w-full h-full object-cover sm:hidden"
          />

          {/* Large screen image */}
          <Image
            src={approach22}
            alt="Hero Image Desktop"
            className="absolute inset-0 w-full h-full object-contain hidden sm:block"
          />
        </section>

        <section className="flex flex-col lg:flex-row-reverse font-garamond h-fit lg:h-[40rem] mx-[36px] lg:mx-[100px] mt-[100px] lg:mt-[136px]">
          <div className="basis-2/4 sm:basis-1 lg:basis-2/4  flex flex-col font-garamond">
            <div className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[28px] text-center lg:text-start font-bold mb-[20px] lg:mt-36 max-w-[90%] mx-auto">
              Our Approach gives us clear understandings of people,
              organizations. and their interactions
            </div>
            <p className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[26px] text-center lg:text-start max-w-[90%] mx-auto ">
              When a business makes an iconic move, it alters the competitive
              landscape, capturing peoples imagination. The move shifts
              people&apos;s expectation. creates memories and delivers
              extraordinary business results.
            </p>
          </div>
          <div className="basis-2/4 sm:basis-1 lg:basis-2/4 text-[22px] sm:text-[24px] md:text-[26px] lg:text-[30px] flex justify-center mb-10 ">
            <div className="relative w-full h-full">
              {/* Image Section */}
              <Image
                src={section2Img}
                alt="Hero Image"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-1 font-garamond h-auto  mx-[25px] lg:mx-[30px] gap-8 lg:gap-0">
          {/* Left Column - Tiles */}
          <div className="flex flex-col justify-center text-[22px] sm:text-[24px] md:text-[26px] lg:text-[30px] min-h-fit ">
            <div className="flex flex-col">
              {/* Section Header */}
              <div className="text-center lg:text-start font-bold mb-6 lg:mb-10">
                Where to GO
              </div>

              {/* First Grid Section */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10 lg:grid-cols-3 justify-items-center">
                <FlipTile
                  text={
                    "Global Network We design and deliver dynamic frameworks to help our clients proactively create opportunities with our global network."
                  }
                />
                <FlipTile
                  text={
                    "Strategic Leadership We help our clients do things right by creating exceptional experiences – through clear and uncompromising ethics"
                  }
                />
                <FlipTile
                  text={
                    "Iconic Moves We are able to set an ambition for business and seize opportunities for innovation, revenue growth, and expansion."
                  }
                />
              </div>

              {/* Section Header */}
              <div className="text-center lg:text-start font-bold mb-6 lg:mb-10">
                How to GET THERE
              </div>

              {/* Second Grid Section */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:grid-cols-3 justify-items-center">
                <FlipTile
                  text={
                    "Growth Roadmap We help our clients work out where they want to be, by when – creating vision, drive and focus on strategy for growth."
                  }
                />
                <FlipTile
                  text={
                    "Targeted Navigation Our approach is anchored to objective measures of commercial success. We set, measure and manage clear targets."
                  }
                />
                <FlipTile
                  text={
                    "Sustainable Impact We unite brand, culture and experience to drive impact inside and outside an organization and to stay relevant over time."
                  }
                />
              </div>
            </div>
          </div>

          {/* Right Column - Text */}
          <div className="flex flex-col justify-center lg:justify-start font-garamond p-4 lg:p-0">
            <div className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[28px] text-center lg:text-start font-bold mb-[20px] lg:mb-10 max-w-[90%] mx-auto">
              BRAVE helps unlock new opportunities and gives its clients the
              confidence to make Iconic Moves
            </div>
            <p className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[26px] text-center lg:text-start max-w-[90%] mx-auto">
              BRAVE supports clients to understand where their biggest
              opportunities exist within and across complex and evolving
              business ecosystems. To take on the emerging challenges and to
              meet the diverse demands of business and brands on their growth
              trajectories, we provide a complete set of tools and services, as
              well as an understanding of the ‘Red Thread’ that pulls each
              aspect together. BRAVE offers branding and business services,
              including strategy, design, and implementation.
            </p>
          </div>
        </section>

        <section className="flex flex-col lg:flex-row font-garamond h-fit  mx-[36px] lg:mx-[160px] mt-[100px] lg:mt-[136px] lg:mb-20 mb-10">
          <div className="basis-2/4 sm:basis-1 lg:basis-2/4  flex flex-col font-garamond lg:mr-[100px]">
            <div className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[28px] text-center lg:text-start font-bold mb-[20px] lg:mb-10 max-w-[90%] mx-auto">
              BRAVE unleashes growth led opportunities with the Client at the
              Center
            </div>
            <p className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[26px] text-center lg:text-start max-w-[90%] mx-auto ">
              In an experience economy, memories are valuable commodities.
              Grounded in a deep understanding of operational, economic and
              regulatory realities, BRAVE designs and delivers an Experience
              Signature which is unique in every dimension and holistic as an
              outcome. This framework in-turn increases satisfaction and powers
              growth that is measurable, traceable and sustainable.
              <br />
              Our ‘Experience signature’ is an understanding of Neuroeconomics
              to merge with Physical, Human and Digital dimensions over a
              seamless journey of these sequential mind states that
              differentiates and produces competitive advantages for lasting
              connection.
            </p>
          </div>
          <div className="basis-2/4 sm:basis-1 lg:basis-2/4 text-[22px] sm:text-[24px] md:text-[26px] lg:text-[30px] flex justify-center mt-10 lg:mt-0">
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
