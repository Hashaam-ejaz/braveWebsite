import Image from "next/image";
import approachTop from "@assets/images/approachTop.webp";
import approach22 from "@assets/images/Approach22.png";
import approach222 from "@assets/images/Approach222.webp";
import section2Img from "@assets/images/appraoch2.png";
import section3Img from "@assets/images/approach3.webp";
import img00 from "@assets/images/img00.webp";
import img01 from "@assets/images/img01.webp";
import tile1 from "@assets/images/tile1.png";
import tile2 from "@assets/images/tile2.png";
import tile3 from "@assets/images/tile3.png";
import tile4 from "@assets/images/tile4.png";
import tile5 from "@assets/images/tile5.png";
import tile6 from "@assets/images/tile6.png";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@components/ui/accordion";
import Link from "next/link";

const Approach = () => {
  return (
    <div className="flex flex-col min-h-screen ">
      <main className="flex-1">
        <section className="relative w-full h-[100vh] overflow-hidden">
          <Image
            src={approachTop}
            alt="Hero Image"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-10 flex flex-col h-full">
            <div className="flex h-1/2 lg:h-2/3">
              <div className="flex pl-5 drop-shadow-custom flex-col w-2/3 sm:w-1/3 lg:w-3/5 sm:text-white items-center font-light justify-center text-[36px] sm:text-[50px] lg:text-[80px]  lg:pt-24 lg:pl-10 text-white uppercase lg:leading-[5.75rem] sm:leading-[4.5rem] leading-10 landscape:mt-36 landscape:w-2/3">
                uniting <br /> Strategy & Creativity
              </div>
              <div className="flex flex-col w-1/3 sm:w-2/3 lg:w-2/5" />
            </div>
            <div className="flex drop-shadow-custom h-1/4 lg:h-1/3 text-[24px] lg:text-[54px] text-white justify-center items-center uppercase landscape:mt-20 font-extralight">
              Our Approach
            </div>
            <div className="flex h-1/4 lg:hidden" />
          </div>
        </section>

        <section className="h-fit text-center lg:text-center text-[33px] lg:text-[48px] my-[32px] lg:my-[63px] mx-4 lg:mx-24">
          We are a strategy company that helps clients build
          <span className="lg:italic ml-2 lg:ml-0 italic">
            “Stronger Brands”
          </span>
        </section>

        <section className="relative w-full h-auto sm:h-[51vw] overflow-hidden">
          {/* Mobile image */}
          <Image
            src={approach222}
            alt="Hero Image Mobile"
            className="block sm:hidden w-full h-auto"
          />

          {/* Large screen image */}
          <Image
            src={approach22}
            alt="Hero Image Desktop"
            className="hidden sm:block absolute inset-0 w-full h-full object-contain"
          />
        </section>

        <section className="flex flex-col lg:flex-row mt-[32.17px] mb-[13px] lg:mt-[83px] lg:mb-[73px] w-full md:justify-center items-center">
          <div className="flex justify-start lg:items-center text-start text-[20px] font-medium lg:font-normal lg:text-[42px] mb-[12px] lg:w-[50%] lg:pl-[37px] pl-4 lg:mr-16 2xl:mr-0 leading-8 sm:leading-[4rem]">
            Approach with clear understandings of people, organizations, and
            their interactions
          </div>
          <div className="flex flex-col text-[14px] sm:text-[18px] md:text-[20px] lg:text-[22px] text-justify lg:pr-[80px] max-w-[700px] px-4">
            <div className="flex flex-col space-y-8 text-[14px] md:text-[18px] lg:text-[20px]">
              <p>
                When a business makes an iconic move, it alters the competitive
                landscape, capturing peoples imagination. The move shifts
                people&apos;s expectation. creates memories and delivers
                extraordinary business results.
              </p>
              <div className="relative w-full h-full">
                {/* Image Section */}
                <Image
                  src={section2Img}
                  alt="Hero Image"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="relative w-full h-[100vh] overflow-hidden hidden md:block bg-green-200">
          <Image
            src={img00}
            alt="Hero Image"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="relative z-10 flex flex-col h-full">
            <div className="flex h-1/2 lg:h-1/3"></div>
            <div className="flex h-1/2 lg:h-2/3">
              {" "}
              <div className="flex flex-col items-center justify-center text-[36px] lg:text-[80px] lg:pt-12 pl-5 lg:pl-20 text-white uppercase lg:leading-[5.75rem] sm:leading-[3rem] md:leading-[3rem] leading-10">
                Delivering <br /> Confidence <br /> to Make <br /> Iconic Moves
              </div>
            </div>
          </div>
        </section>

        <div className="px-4 lg:px-24 lg:bg-[#F4F1F1] pt-9 flex flex-col lg:flex-row">
          <p className="text-[20px] font-medium mb-6 lg:font-normal lg:text-[48px] lg:w-1/2">
            BRAVE helps unlock new opportunities and gives its clients the
            confidence to make Iconic Moves
          </p>
          <p className="pb-12 lg:font-normal lg:text-[20px] leading-[1.75rem] pl-8 lg:w-1/2 lg:text-justify">
            BRAVE supports clients to take on the emerging challenges and to
            meet the diverse demands of business and brands on their growth
            trajectories. We provide a complete set of tools and services, as
            well as an understanding of the ‘Red Thread’ that pulls each aspect
            together. BRAVE offers branding and business services, including
            strategy, design, and implementation.
          </p>
        </div>

        <section className="flex-col bg-[#F4F1F1] px-4 lg:px-8 hidden lg:flex">
          <div className="mt-4 flex justify-evenly">
            <Accordion
              type="single"
              defaultValue="item-1"
              className="min-w-[33.333%] min-h-[5rem] "
            >
              <AccordionItem value="item-1">
                <AccordionTrigger className="uppercase lg:text-[24px]">
                  Global Network
                </AccordionTrigger>
                <AccordionContent className="flex text-[#7F7F7F] gap-x-4 lg:text-[20px] h-[250px]">
                  <Image
                    src={tile1}
                    alt="tile 1"
                    className="flex-shrink-0 object-cover w-[150px] h-[150px] rounded-md"
                  />
                  <div className="flex flex-col">
                    We design and deliver dynamic frameworks to help our clients
                    proactively create opportunities with our global network.
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion
              type="single"
              defaultValue="item-2"
              className="min-w-[33.333%] min-h-[5rem]"
            >
              <AccordionItem value="item-2">
                <AccordionTrigger className="uppercase lg:text-[24px]">
                  Strategic Leadership
                </AccordionTrigger>
                <AccordionContent className="flex text-[#7F7F7F] gap-x-4 lg:text-[20px] h-[250px]">
                  <Image
                    src={tile2}
                    alt={"tile 2"}
                    className="flex-shrink-0 object-cover w-[150px] h-[150px] rounded-md"
                  />
                  <div className="flex flex-col">
                    We help our clients do things right by creating exceptional
                    experiences through clear and uncompromising ethics.
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion
              type="single"
              defaultValue="item-3"
              className="min-w-[33.333%] min-h-[5rem]"
            >
              <AccordionItem value="item-3">
                <AccordionTrigger className="uppercase lg:text-[24px]">
                  Iconic Moves
                </AccordionTrigger>
                <AccordionContent className="flex text-[#7F7F7F] gap-x-4 lg:text-[20px] h-[250px]">
                  <Image
                    src={tile3}
                    alt={"tile 3"}
                    className="flex-shrink-0 object-cover w-[150px] h-[150px] rounded-md"
                  />
                  <div className="flex flex-col">
                    We are able to set an ambition for business and seize
                    opportunities for innovation, revenue, growth, and
                    expansion.
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="my-4 lg:flex justify-evenly">
            <Accordion
              type="single"
              defaultValue="item-4"
              className="min-w-[33.333%] min-h-[5rem]"
            >
              <AccordionItem value="item-4">
                <AccordionTrigger className="uppercase lg:text-[24px]">
                  Growth Roadmap
                </AccordionTrigger>
                <AccordionContent className="flex text-[#7F7F7F] gap-x-4 lg:text-[20px] h-[250px]">
                  <Image
                    src={tile4}
                    alt={"tile 6"}
                    className="flex-shrink-0 object-cover w-[150px] h-[150px] rounded-md"
                  />
                  <div className="flex flex-col">
                    We help our clients work out where they want to be, by when
                    - creating vision, drive and focus on strategy for growth
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion
              type="single"
              defaultValue="item-5"
              className="min-w-[33.333%] min-h-[5rem]"
            >
              <AccordionItem value="item-5">
                <AccordionTrigger className="uppercase lg:text-[24px]">
                  Targeted Navigation
                </AccordionTrigger>
                <AccordionContent className="flex text-[#7F7F7F] gap-x-4 lg:text-[20px] h-[250px]">
                  <Image
                    src={tile5}
                    alt={"tile 4"}
                    className="flex-shrink-0 object-cover w-[150px] h-[150px] rounded-md"
                  />
                  <div className="flex flex-col">
                    Our approach is anchored to objective measures of commercial
                    success. We set, measure and manage clear targets.
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion
              type="single"
              defaultValue="item-6"
              className="min-w-[33.333%] min-h-[5rem]"
            >
              <AccordionItem value="item-6">
                <AccordionTrigger className="uppercase lg:text-[24px]">
                  Sustainable Impact
                </AccordionTrigger>
                <AccordionContent className="flex text-[#7F7F7F] gap-x-4 lg:text-[20px] h-[250px]">
                  <Image
                    src={tile6}
                    alt={"tile 5"}
                    className="flex-shrink-0 object-cover w-[150px] h-[150px] rounded-md"
                  />
                  <div className="flex flex-col">
                    We unite brand, culture and experience to drive impact
                    inside and outside an organization and to stay relevant over
                    time
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
        <section className="flex-col bg-[#F4F1F1] px-4 flex lg:hidden">
          <div className="mt-4">
            <span className="text-[#8F3966] font-extrabold">
              From Where to go
            </span>
            <Accordion type="single">
              <AccordionItem value="item-1">
                <AccordionTrigger>Global Network</AccordionTrigger>
                <AccordionContent className="flex items-center text-[#7F7F7F] gap-x-4">
                  <Image
                    src={tile1}
                    alt="tile 1"
                    className="w-24 h-24 object-cover rounded-md"
                  />
                  <div className="flex flex-col justify-center">
                    We design and deliver dynamic frameworks to help our clients
                    proactively create opportunities with our global network.
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion type="single">
              <AccordionItem value="item-2">
                <AccordionTrigger className="uppercase lg:text-[24px]">
                  Strategic Leadership
                </AccordionTrigger>
                <AccordionContent className="flex text-[#7F7F7F] gap-x-4">
                  <Image
                    src={tile2}
                    alt={"tile 2"}
                    className="w-24 h-24 object-cover rounded-md"
                  />
                  We help our clients do things right by creating exceptional
                  experiences through clear and uncompromising ethics.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion type="single">
              <AccordionItem value="item-3">
                <AccordionTrigger className="uppercase lg:text-[24px]">
                  Iconic Moves
                </AccordionTrigger>
                <AccordionContent className="flex text-[#7F7F7F] gap-x-4">
                  <Image
                    src={tile3}
                    alt={"tile 3"}
                    className="w-24 h-24 object-cover rounded-md"
                  />
                  We are able to set an ambition for business and seize
                  opportunities for innovation, revenue, growth, and expansion.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="my-4">
            <span className="text-[#8F3966] font-extrabold">
              To Getting you There
            </span>
            <Accordion type="single">
              <AccordionItem value="item-4">
                <AccordionTrigger className="uppercase lg:text-[24px]">
                  Growth Roadmap
                </AccordionTrigger>
                <AccordionContent className="flex flex-row items-start text-[#7F7F7F] gap-2">
                  <Image
                    src={tile4}
                    alt={"tile 4"}
                    className="w-24 h-24 object-cover rounded-md"
                  />
                  <div className="text-sm leading-tight">
                    We help our clients work out where they want to be, by when
                    - creating vision, drive and focus on strategy for growth.
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion type="single">
              <AccordionItem value="item-5">
                <AccordionTrigger className="uppercase lg:text-[24px]">
                  Targeted Navigation
                </AccordionTrigger>
                <AccordionContent className="flex text-[#7F7F7F] gap-x-4">
                  <Image
                    src={tile5}
                    alt={"tile 5"}
                    className="object-cover w-24 h-24 rounded-md"
                  />
                  Our approach is anchored to objective measures of commercial
                  success. We set, measure and manage clear targets.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion type="single">
              <AccordionItem value="item-6">
                <AccordionTrigger className="uppercase lg:text-[24px]">
                  Sustainable Impact
                </AccordionTrigger>
                <AccordionContent className="flex text-[#7F7F7F] gap-x-4">
                  <Image
                    src={tile6}
                    alt={"tile 6"}
                    className="w-24 h-24 object-cover rounded-md"
                  />
                  We unite brand, culture and experience to drive impact inside
                  and outside an organization and to stay relevant over time
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        <section className="relative w-full h-[100vh] overflow-hidden hidden md:block">
          <Image
            src={img01}
            alt="Hero Image"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="relative z-10 flex flex-col h-full">
            <div className="flex h-1/2 lg:h-2/3">
              <div className="flex flex-col items-center justify-center text-[36px] lg:text-[80px] lg:pt-12 pl-5 lg:pl-20 text-white uppercase lg:leading-[5.75rem] sm:leading-[3rem] md:leading-[3rem] leading-10">
                Brave New <br /> Tomorrow
              </div>
            </div>
          </div>
        </section>

        <section className="flex flex-col lg:flex-row mt-[32.17px] mb-[13px] lg:mt-[83px] lg:mb-[73px] w-full md:justify-center items-center">
          {/* Text Container */}
          <div className="flex flex-col justify-start lg:items-center text-start mb-[12px] w-full lg:w-[50%] lg:pl-[37px] pl-4 2xl:mr-0">
            <div className="leading-8 sm:leading-[4rem] text-[20px] font-medium lg:font-normal lg:text-[48px] lg:mb-[57px]">
              BRAVE unleashes growth led opportunities with Client at the Center
            </div>
            <div className="text-[14px] lg:text-[20px] text-justify">
              In an experience economy, memories are valuable commodities. BRAVE
              delivers an Experience Signature that is unique in every dimension
              and holistic as an outcome. This framework in-turn increases
              satisfaction and powers growth that is measurable, traceable and
              sustainable.
              <br />
              <div className="mb-4" />
              <span className="text-[14px] lg:text-[20px] text-justify">
                Our ‘Experience signature’ is a seamless journey that is based
                on Neuroeconomics merged with Physical, Human and Digital
                dimensions to provide competitive advantages for lasting
                connection.
              </span>
            </div>
          </div>

          {/* Image Container */}
          <div className="flex flex-col w-full lg:w-[50%] text-[14px] sm:text-[18px] md:text-[20px] lg:text-[22px] text-justify px-4">
            <div className="relative w-full h-full">
              <Image
                src={section3Img}
                alt="Hero Image"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Approach;
