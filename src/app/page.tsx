import Link from "next/link";
import momentsImg from "@assets/images/moments.png";
import familyImg from "@assets/images/family.png";
import approachImg from "@assets/images/approach.png";
import Image from "next/image";
import Card from "../components/card/page";
import landing from "@assets/images/landingSimple.png";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen ">
      <section className="relative w-full h-[100vh] overflow-hidden">
        <Image
          src={landing}
          alt="Hero Image"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-10 flex items-center justify-center w-full h-full  sm:pl-1 md:pl-2 lg:pl-10">
          <h1 className=" text-white text-[32px] md:text-[48px] lg:text-[100px] uppercase font-garamond">
            The Brave Agency
          </h1>
        </div>
      </section>

      <section className="flex flex-col lg:flex-row mt-[32.17px] mb-[24px] lg:mt-[69px] lg:mb-[73px] font-garamond w-full">
        <div className=" flex items-center justify-center text-center font-normal italic text-[19px] lg:text-[44.15px] mb-[23px] lg:w-[40%]">
          We are BRAVE
        </div>
        <div className="flex flex-col text-[14px] sm:text-[18px] md:text-[20px] lg:text-[22px] space-y-8 lg:w-[60%] lg:mr-[150px] mx-[45px]">
          <p>
            Grounded in extensive experience and fueled by an extraordinary,
            talented team, BRAVE is proud of our long-standing reputation for
            delivering exceptional results for our clients.
          </p>
          <p>
            From launching new brands and reinvigorating established brands, to
            creating a movement — together, we build{" "}
            <span className="font-semibold">stronger brands</span> that inspire
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
            <h1 className=" text-white text-[32px] md:text-[48px] lg:text-[100px] uppercase font-garamond text-center">
              We Inspire the World
            </h1>
            <div className="px-4 py-3 text-[12px] lg:text-[39.32px] w-[113px] h-[28px] lg:w-[370px] lg:h-[75px] flex items-center justify-center text-center text-white font-garamond rounded-full border-solid border-[1px] lg:border-[3.28px] border-white">
              <Link href={"/moments"}>Our Moments</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col lg:flex-row mt-[32.17px] mb-[24px] lg:mt-[69px] lg:mb-[73px] font-garamond w-full">
        <div className=" flex items-center justify-center text-center font-normal italic text-[19px] lg:text-[44.15px] mb-[23px] lg:w-[40%]">
          Why BRAVE Is Different
        </div>
        <div className="flex flex-col text-[14px] sm:text-[18px] md:text-[20px] lg:text-[22px] space-y-8 lg:w-[60%] lg:mr-[150px] mx-[45px]">
          <p>
            While our reach is global, BRAVE is small by design: We work with
            only a handful of projects at a time with our signature* framework.
          </p>
          <p>
            This discipline allows us to focus on creating and delivering
            customized strategies to meet each project’s unique needs and
            provide a level of service that ensures we are with our partners &
            clients when they need us most.
          </p>
          <p>
            We engage with our partners & clients in a manner that embraces
            their culture, work hand in hand to achieve their goals, and measure
            results with proprietary tools.
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
            <h1 className=" text-white text-[32px] md:text-[48px] lg:text-[100px] text-center uppercase font-garamond">
              We Build Success Together
            </h1>
            <div className="px-4 py-3 text-[12px] lg:text-[39.32px] w-[113px] h-[28px] lg:w-[370px] lg:h-[75px] flex items-center justify-center text-center text-white font-garamond rounded-full border-solid border-[1px] lg:border-[3.28px] border-white">
              <Link href={"/family"}>Our Family</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col lg:flex-row mt-[32.17px] mb-[24px] lg:mt-[69px] lg:mb-[73px] font-garamond w-full">
        <div className=" flex items-center justify-center text-center font-normal italic text-[19px] lg:text-[44.15px] mb-[23px] lg:w-[40%]">
          About Us
        </div>
        <div className="flex flex-col text-[14px] sm:text-[18px] md:text-[20px] lg:text-[22px] space-y-8 lg:w-[60%] lg:mr-[150px] mx-[45px]">
          <p>
            Led by an extraordinary team of professionals, BRAVE is widely
            recognized for delivering exceptional results with strategically
            grounded, creatively executed and measurably effective brand and
            business solutions.
          </p>
          <p>
            Our team’s collective expertise is carefully curated and
            ever-evolving to keep pace with the needs of our clients. Brand
            strategy, design and ethics, integrated marketing, digital media,
            strategic partnerships, buzz-worthy experiences and experiential
            events – these are just a few of the offerings in our unique and
            proven holistic approach to helping our clients build stronger
            brands.
          </p>
        </div>
      </section>

      {/* approach */}
      <section className="relative w-full h-[100vh] overflow-hidden">
        <Image
          src={approachImg}
          alt="Hero Image"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-10 flex items-center justify-center w-full h-full  sm:pl-1 md:pl-2 lg:pl-10">
          <div className="px-4 py-3 text-[12px] lg:text-[39.32px] w-[113px] h-[28px] lg:w-[370px] lg:h-[75px] flex items-center justify-center text-center text-white font-garamond rounded-full border-solid border-[1px] lg:border-[3.28px] border-white">
            <Link href={"/approach"}>Our Approach</Link>
          </div>
        </div>
      </section>

      <section className="flex flex-col px-20 lg:px-40 py-12 lg:py-24 font-garamond">
        <div className="text-[14px] sm:text-[18px] md:text-[24px] lg:text-[32px] font-garamond text-center">
          We combines the fundamental and dynamic elements in any market –
          people, businesses, and their interactions.
        </div>
        <div className="text-[19px] lg:text-[44.15px] font-garamond justify-center flex lg:mt-20 md:mt-15 sm:mt-10 mt-8 lg:mb-10 md:mb-8 sm:mb-6 mb-4">
          Our Commitment
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col lg:flex-row  gap-5 items-center min-h-40">
            <Card text="BEFORE YOU COME" img={"/images/beforeCome.png"} />
            <Card text="AT THE LOCATION" img={"/images/location.png"} />
            <Card text="TREATMENT" img={"/images/treatment.png"} />
            <Card text="STAYING IN TOUCH" img={"/images/stayingTouch.png"} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
