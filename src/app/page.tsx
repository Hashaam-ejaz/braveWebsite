import Link from "next/link";
import momentsImg from "@assets/images/moments.webp";
import familyImg from "@assets/images/family.webp";
import approachImg from "@assets/images/approach.webp";
import approachmImg from "@assets/images/approachm.webp";
import Image from "next/image";
import Card from "../components/card/page";
import landing from "@assets/images/landingSimple.webp";
import landingm from "@assets/images/landingMobile.webp";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen ">
      <section className="relative w-full h-[100vh] overflow-hidden">
        {/* <Image
          src={landing}
          alt="Hero Image"
          className="absolute inset-0 w-full h-full object-cover"
        /> */}
        <Image
          src={landingm}
          alt="Hero Image Mobile"
          className="absolute inset-0 w-full h-full object-cover sm:hidden"
        />

        {/* Large screen image */}
        <Image
          src={landing}
          alt="Hero Image Desktop"
          className="absolute inset-0 w-full h-full object-cover hidden sm:block"
        />
        <div className="relative z-10 flex items-center justify-center w-full h-full  sm:pl-1 md:pl-2 lg:pl-10">
          <div className="flex flex-col">
            <h1 className=" text-white text-[32px] md:text-[48px] lg:text-[100px] uppercase font-garamond">
              The Brave Agency
            </h1>
            <h1 className="text-center text-white text-[15px] md:text-[36px] lg:text-[48px] font-garamond italic">
              Building Stronger Brands
            </h1>
          </div>
        </div>
      </section>

      <section className="flex flex-col lg:flex-row mt-[32.17px] mb-[24px] lg:mt-[69px] lg:mb-[73px] font-garamond w-full">
        <div className=" flex items-center justify-center text-center font-normal text-[19px] lg:text-[44.15px] mb-[23px] lg:w-[40%]">
          <span className="italic mr-2">We are</span>BRAVE
        </div>
        <div className="flex flex-col text-[14px] sm:text-[18px] md:text-[20px] lg:text-[22px] space-y-8 lg:w-[60%] lg:mr-[150px] mx-[100px]  text-justify">
          <p>
            Grounded in extensive experience and fueled by an extraordinary,
            talented team, BRAVE is proud of our long-standing reputation for
            delivering exceptional results for our clients.
          </p>
          <p>
            From launching new brands and reinvigorating established brands, to
            creating a movement. Together, we build{" "}
            <span className="italic lg:ml-1">stronger brands</span> that inspire
            the world.
          </p>
        </div>
      </section>

      {/* moment */}
      <section className="relative w-full h-[100vh] overflow-hidden">
        <Image
          src={momentsImg}
          alt="Hero Image"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-10 flex items-center justify-center w-full h-full  sm:pl-1 md:pl-2 lg:pl-10">
          <div className="flex flex-col items-center">
            <h1 className=" text-white text-[32px] md:text-[48px] lg:text-[100px] font-garamond text-center">
              We Inspire the World
            </h1>
            <div className="px-4 py-3 text-[12px] lg:text-[39.32px] w-[113px] h-[28px] lg:w-[370px] lg:h-[75px] flex items-center justify-center text-center text-white font-garamond rounded-full border-solid border-[1px] lg:border-[3.28px] border-white">
              <Link href={"/moments"}>Our Moments</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col lg:flex-row mt-[32.17px] mb-[24px] lg:mt-[69px] lg:mb-[73px] font-garamond w-full">
        <div className=" flex flex-col items-center justify-center text-center font-normal italic text-[19px] lg:text-[44.15px] mb-[23px] lg:w-[40%] whitespace-nowrap">
          <span>
            Why
            <span className="not-italic ml-2 mr-2 lg:ml-3 lg:mr-3">BRAVE</span>
          </span>
          <span>is different</span>
        </div>
        <div className="flex flex-col text-[14px] sm:text-[18px] md:text-[20px] lg:text-[22px] space-y-8 lg:w-[60%] lg:mr-[150px] mx-[45px] text-justify">
          <p>
            While our reach is global, BRAVE is small by design: We work with
            only a handful of projects at a time with our signature* framework.
          </p>
          <p>
            This discipline allows us to focus on creating and delivering
            customized strategies to meet each project&apos;s unique needs and
            provide a level of service that ensures we are with our partners &
            clients when they need us most.
          </p>
          <p>
            We engage with our partners & clients in a manner that embraces
            their culture, work hand in hand to achieve their goals, and measure
            results with proprietary tools.
          </p>
          <p className="italic text-[12px] sm:text-[16px] md:text-[18px] lg:text-[20px] ">
            *Neuroeconomics + PHD (Physical, Human, Digital) Framework
          </p>
        </div>
      </section>

      {/* family */}

      <section className="relative w-full h-[100vh] overflow-hidden">
        <Image
          src={familyImg}
          alt="Hero Image"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="relative z-10 flex items-center justify-center w-full h-full  sm:pl-1 md:pl-2 lg:pl-10">
          <div className="flex flex-col items-center">
            <h1 className=" text-white text-[32px] md:text-[48px] lg:text-[100px] text-center font-garamond">
              We build success together
            </h1>
            <div className="px-4 py-3 text-[12px] lg:text-[39.32px] w-[113px] h-[28px] lg:w-[370px] lg:h-[75px] flex items-center justify-center text-center text-white font-garamond rounded-full border-solid border-[1px] lg:border-[3.28px] border-white">
              <Link href={"/family"}>Our Family</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col lg:flex-row mt-[32.17px] mb-[24px] lg:mt-[69px] lg:mb-[73px] font-garamond w-full">
        <div className=" flex items-center justify-center text-center font-normal italic text-[19px] lg:text-[44.15px] mb-[23px] lg:w-[40%]">
          About<span className="not-italic ml-2 lg:ml-3">BRAVE</span>
        </div>
        <div className="flex flex-col text-[14px] sm:text-[18px] md:text-[20px] lg:text-[22px] space-y-8 lg:w-[60%] lg:mr-[150px] mx-[45px] text-justify">
          <p>
            Led by an extraordinary team of professionals, BRAVE is widely
            recognized for delivering exceptional results with strategically
            grounded, creatively executed and measurably effective brand and
            business solutions.
          </p>
          <p>
            Our team&apos;s collective expertise is carefully curated and
            ever-evolving to keep pace with the needs of our clients. Brand
            strategy, design and ethics, integrated marketing, digital media,
            strategic partnerships, buzz-worthy experiences and experiential
            events - these are just a few of the offerings in our unique and
            proven holistic approach to helping our clients build{" "}
            <span className="italic lg:ml-1">stronger brands</span>
          </p>
        </div>
      </section>

      {/* approach */}
      <section className="relative w-full h-[80vh] sm:h-[60vh] md:h-[80vh] lg:h-[101vh] overflow-hidden">
        <Image
          src={approachmImg}
          alt="Hero Image Mobile"
          className="absolute inset-0 w-full h-full object-cover sm:hidden"
        />
        <Image
          src={approachImg}
          alt="Hero Image Desktop"
          className="absolute inset-0 w-full h-full object-contain hidden sm:block"
        />
        <div className="relative z-10 flex items-center justify-center w-full h-full  sm:pl-1 md:pl-2 lg:pl-10">
          <div className="px-4 py-3 text-[12px] lg:text-[39.32px] w-[113px] h-[28px] lg:w-[370px] lg:h-[75px] flex items-center justify-center text-center text-white font-garamond rounded-full border-solid border-[1px] lg:border-[3.28px] border-white">
            <Link href={"/approach"}>Our Approach</Link>
          </div>
        </div>
      </section>

      <section className="flex flex-col px-20 lg:px-40 py-12 lg:py-24 font-garamond">
        <div className="text-[19px] lg:text-[44.15px]  font-garamond text-center">
          Our Commitment
        </div>
        <div className="text-center text-[14px] sm:text-[18px] md:text-[24px] lg:text-[32px] font-garamond justify-center flex lg:mt-20 md:mt-15 sm:mt-10 mt-8 lg:mb-10 md:mb-8 sm:mb-6 mb-4">
          We combine the fundamental and dynamic elements in any market –
          people, businesses, and their interactions.
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col lg:flex-row  gap-5 items-center min-h-40">
            <Card text="Before you come" img={"/images/beforeCome.webp"} />
            <Card text="At the location" img={"/images/location.webp"} />
            <Card text="Treatment" img={"/images/treatment.webp"} />
            <Card text="Staying in touch" img={"/images/stayingTouch.webp"} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
