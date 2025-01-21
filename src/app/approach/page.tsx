import Image from "next/image";
import approachTop from "@assets/images/approachTop.webp";
import approach22 from "@assets/images/Approach22.webp";
import approach222 from "@assets/images/Approach222.webp";
import section2Img from "@assets/images/appraoch2.webp";
import section3Img from "@assets/images/approach3.webp";
import tile1 from "@assets/images/tile1.webp";
import tile2 from "@assets/images/tile2.webp";
import tile3 from "@assets/images/tile3.webp";
import tile4 from "@assets/images/tile4.webp";
import tile5 from "@assets/images/tile5.webp";
import tile6 from "@assets/images/tile6.webp";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@components/ui/accordion";

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
              <div className="flex drop-shadow-custom flex-col w-2/3 sm:w-1/3 lg:w-3/5 sm:text-white items-center font-light justify-center text-[36px] sm:text-[50px] lg:text-[96px] sm:ml-10  lg:pt-24 pl-5 lg:pl-20 text-white uppercase lg:leading-[5.75rem] sm:leading-[4.5rem] leading-10 landscape:mt-36 landscape:w-2/3">
                uniting <br /> Strategy & Creativity
              </div>
              <div className="flex flex-col w-1/3 sm:w-2/3 lg:w-2/5" />
            </div>
            <div className="flex drop-shadow-custom h-1/4 lg:h-1/3 text-[24px] lg:text-[54px] text-white justify-center items-center pb-28 uppercase landscape:mt-28">
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

        <div className="text-[20px] lg:text-[48px] lg:font-normal font-medium text-start lg:text-start mb-[20px] mx-4 lg:mx-[106px] mt-[37px] lg:mt-[63px]">
          Our Approach gives us clear <br className="block lg:hidden" />
          understandings of people, <br className="block lg:hidden" />
          organizations. and their <br className="block lg:hidden" />
          interactions
        </div>

        <section className="flex flex-col-reverse lg:flex-row-reverse  h-fit lg:h-[40rem] mx-4 lg:ml-[65px] lg:mr-[83px]">
          <div className="basis-2/4 sm:basis-1 lg:basis-2/4 flex justify-center mb-10 w-full mt-10 lg:mt-0">
            <div className="relative w-full h-full">
              {/* Image Section */}
              <Image
                src={section2Img}
                alt="Hero Image"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          <div className="basis-2/4 sm:basis-1 lg:basis-2/4 font-normal flex flex-col justify-center">
            <p className="text-[14px] text-start lg:text-[33px]">
              When a business makes an iconic move, it alters the competitive
              landscape, capturing peoples imagination. The move shifts
              people&apos;s expectation. creates memories and delivers
              extraordinary business results.
            </p>
          </div>
        </section>

        <div className="px-4 lg:px-24 lg:bg-[#F4F1F1] pt-9">
          <p className="text-[20px] font-medium mb-6 lg:font-normal lg:text-[48px]">
            BRAVE helps unlock new opportunities and gives its clients the
            confidence to make Iconic Moves
          </p>
          <p className="pb-12 lg:font-normal lg:text-[33px]">
            BRAVE supports clients to understand where their biggest
            opportunities exist within and across complex and evolving business
            ecosystems. To take on the emerging challenges and to meet the
            diverse demands of business and brands on their growth trajectories,
            we provide a complete set of tools and services, as well as an
            understanding of the &apos;Red Thread&apos; that pulls each aspect
            together. BRAVE offers branding and business services, including
            strategy, design, and implementation.
          </p>
        </div>
        <section className="flex-col bg-[#F4F1F1] px-4 lg:px-8 hidden lg:flex">
          <div className="mt-4 flex justify-evenly">
            <span className="text-[#8F3966] font-extrabold lg:hidden">
              From Where to go
            </span>
            <Accordion
              type="single"
              defaultValue="item-1"
              className="min-w-[33.333%]"
            >
              <AccordionItem value="item-1">
                <AccordionTrigger className="lg:font-bold lg:text-[24px]">
                  Global Network
                </AccordionTrigger>
                <AccordionContent className="flex items-center text-[#7F7F7F] gap-x-4 lg:text-[20px] h-[250px]">
                  <Image
                    src={tile1}
                    alt="tile 1"
                    className="flex-shrink-0 object-cover w-[200px] h-[200px] rounded-md"
                  />
                  <div className="flex flex-col justify-center">
                    We design and deliver dynamic frameworks to help our clients
                    proactively create opportunities with our global network.
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion
              type="single"
              defaultValue="item-2"
              className="min-w-[33.333%]"
            >
              <AccordionItem value="item-2">
                <AccordionTrigger className="lg:font-bold lg:text-[24px]">
                  Strategic Leadership
                </AccordionTrigger>
                <AccordionContent className="flex text-[#7F7F7F] gap-x-4 lg:text-[20px] h-[250px]">
                  <Image
                    src={tile2}
                    alt={"tile 2"}
                    className="flex-shrink-0 object-cover w-[200px] h-[200px] rounded-md"
                  />
                  <div className="flex flex-col justify-center">
                    We help our clients do things right by creating exceptional
                    experiences through clear and uncompromising ethics.
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion
              type="single"
              defaultValue="item-3"
              className="min-w-[33.333%]"
            >
              <AccordionItem value="item-3">
                <AccordionTrigger className="lg:font-bold lg:text-[24px]">
                  Iconic Moves
                </AccordionTrigger>
                <AccordionContent className="flex text-[#7F7F7F] gap-x-4 lg:text-[20px] h-[250px]">
                  <Image
                    src={tile3}
                    alt={"tile 3"}
                    className="flex-shrink-0 object-cover w-[200px] h-[200px] rounded-md"
                  />
                  <div className="flex flex-col justify-center">
                    We are able to set an ambition for business and seize
                    opportunities for innovation, revenue, growth, and
                    expansion.
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="my-4 lg:flex justify-evenly">
            <span className="text-[#8F3966] font-extrabold lg:hidden">
              To Getting you There
            </span>
            <Accordion
              type="single"
              defaultValue="item-4"
              className="min-w-[33.333%]"
            >
              <AccordionItem value="item-4">
                <AccordionTrigger className="lg:font-bold lg:text-[24px]">
                  Growth Roadmap
                </AccordionTrigger>
                <AccordionContent className="flex text-[#7F7F7F] gap-x-4 lg:text-[20px] h-[250px]">
                  <Image
                    src={tile4}
                    alt={"tile 6"}
                    className="flex-shrink-0 object-cover w-[200px] h-[200px] rounded-md"
                  />
                  <div className="flex flex-col justify-center">
                    We help our clients work out where they want to be, by when
                    - creating vision, drive and focus on strategy for growth
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion
              type="single"
              defaultValue="item-5"
              className="min-w-[33.333%]"
            >
              <AccordionItem value="item-5">
                <AccordionTrigger className="lg:font-bold lg:text-[24px]">
                  Targeted Navigation
                </AccordionTrigger>
                <AccordionContent className="flex text-[#7F7F7F] gap-x-4 lg:text-[20px] h-[250px]">
                  <Image
                    src={tile5}
                    alt={"tile 4"}
                    className="flex-shrink-0 object-cover w-[200px] h-[200px] rounded-md"
                  />
                  <div className="flex flex-col justify-center">
                    Our approach is anchored to objective measures of commercial
                    success. We set, measure and manage clear targets.
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion
              type="single"
              defaultValue="item-6"
              className="min-w-[33.333%]"
            >
              <AccordionItem value="item-6">
                <AccordionTrigger className="lg:font-bold lg:text-[24px]">
                  Sustainable Impact
                </AccordionTrigger>
                <AccordionContent className="flex text-[#7F7F7F] gap-x-4 lg:text-[20px] h-[250px]">
                  <Image
                    src={tile6}
                    alt={"tile 5"}
                    className="flex-shrink-0 object-cover w-[200px] h-[200px] rounded-md"
                  />
                  <div className="flex flex-col justify-center">
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
                  <Image src={tile1} alt="tile 1" className="object-cover" />
                  <div className="flex flex-col justify-center">
                    We design and deliver dynamic frameworks to help our clients
                    proactively create opportunities with our global network.
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion type="single">
              <AccordionItem value="item-2">
                <AccordionTrigger className="lg:font-bold lg:text-[24px]">
                  Strategic Leadership
                </AccordionTrigger>
                <AccordionContent className="flex text-[#7F7F7F] gap-x-4">
                  <Image src={tile2} alt={"tile 2"} className="object-cover" />
                  We help our clients do things right by creating exceptional
                  experiences through clear and uncompromising ethics.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion type="single">
              <AccordionItem value="item-3">
                <AccordionTrigger className="lg:font-bold lg:text-[24px]">
                  Iconic Moves
                </AccordionTrigger>
                <AccordionContent className="flex text-[#7F7F7F] gap-x-4">
                  <Image src={tile3} alt={"tile 3"} className="object-cover" />
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
                <AccordionTrigger className="lg:font-bold lg:text-[24px]">
                  Growth Roadmap
                </AccordionTrigger>
                <AccordionContent className="flex text-[#7F7F7F] gap-x-4">
                  <Image src={tile4} alt={"tile 6"} className="object-cover" />
                  We help our clients work out where they want to be, by when -
                  creating vision, drive and focus on strategy for growth
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion type="single">
              <AccordionItem value="item-5">
                <AccordionTrigger className="lg:font-bold lg:text-[24px]">
                  Targeted Navigation
                </AccordionTrigger>
                <AccordionContent className="flex text-[#7F7F7F] gap-x-4">
                  <Image src={tile5} alt={"tile 4"} className="object-cover" />
                  Our approach is anchored to objective measures of commercial
                  success. We set, measure and manage clear targets.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion type="single">
              <AccordionItem value="item-6">
                <AccordionTrigger className="lg:font-bold lg:text-[24px]">
                  Sustainable Impact
                </AccordionTrigger>
                <AccordionContent className="flex text-[#7F7F7F] gap-x-4">
                  <Image src={tile6} alt={"tile 5"} className="object-cover" />
                  We unite brand, culture and experience to drive impact inside
                  and outside an organization and to stay relevant over time
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        <div className="text-[20px] lg:text-[48px] text-start font-medium lg:font-normal mx-4 lg:mx-24 mt-[40px] lg:mt-[70px] mb-[22px]">
          BRAVE unleashes growth led opportunities with the Client at the Center
        </div>
        <section className="flex flex-col lg:flex-row mx-4 lg:mx-24 ">
          <div className="basis-2/4 sm:basis-1 lg:basis-2/4  flex flex-col lg:mr-[100px] lg:pr-24">
            <div className="text-[14px] lg:text-[26px] text-start">
              In an experience economy, memories are valuable commodities.
              Grounded in a deep understanding of operational, economic and
              regulatory realities, BRAVE designs and delivers an Experience
              Signature which is unique in every dimension and holistic as an
              outcome. This framework in-turn increases satisfaction and powers
              growth that is measurable, traceable and sustainable.
              <br />
              <div className="mb-4" />
              <span className="text-[14px] lg:text-[26px] text-start">
                Our &apos;Experience signature&apos; is an understanding of
                Neuroeconomics to merge with Physical, Human and Digital
                dimensions over a seamless journey of these sequential mind
                states that differentiates and produces competitive advantages
                for lasting connection.
              </span>
            </div>
          </div>
          <div className="basis-2/4 sm:basis-1 lg:basis-2/4 flex justify-center mb-[50px] mt-[20px]">
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
