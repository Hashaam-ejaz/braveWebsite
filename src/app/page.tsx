import Link from "next/link";
import momentsImg from "@assets/images/moments.webp";
import momentsmImg from "@assets/images/momentsm.webp";
import familyImg from "@assets/images/family.webp";
import approachImg from "@assets/images/approach.webp";
import approachmImg from "@assets/images/approachm.webp";
import Image from "next/image";
import landing from "@assets/images/landingSimple.webp";
import landingm from "@assets/images/landingMobile.webp";
import SimpleContactForm from "@components/contact-form";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen ">
      <section className="relative w-full h-[100vh] overflow-hidden">
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
          <p className="sm:text-[22px] md:text-[24px] lg:text-[26px] font-bold">
            Your trusted partner in creating iconic brand and business.
          </p>
          <div className="flex flex-col space-y-8">
            <p>
              Grounded in extensive experience and fueled by an extraordinary,
              talented team, BRAVE team is proud of it&apos;s long-standing
              reputation for delivering exceptional results for our clients.
            </p>
            <p>
              At BRAVE, we put our client&apos;s success at the core of every
              interaction. From launching new brands and reinvigorating
              established business, to creating a movement. Together, we build{" "}
              <span className="italic lg:ml-1">stronger brands</span> that
              inspire the world.
            </p>
          </div>
        </div>
      </section>

      {/* moment */}
      <section className="relative w-full h-[100vh] overflow-hidden">
        {/* Desktop Image */}
        <Image
          src={momentsImg}
          alt="Hero Image"
          className="absolute inset-0 w-full h-full object-cover hidden lg:block"
        />
        {/* Mobile Image */}
        <Image
          src={momentsmImg}
          alt="Hero Image Mobile"
          className="absolute inset-0 w-full h-full object-cover block lg:hidden"
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
        <div className=" flex lg:flex-col items-center justify-center text-center font-normal italic text-[19px] lg:text-[44.15px] mb-[23px] lg:w-[40%] whitespace-nowrap">
          <span>
            Why
            <span className="not-italic ml-2 mr-2 lg:ml-3 lg:mr-3">BRAVE</span>
          </span>
          <span>is different</span>
        </div>
        <div className="flex flex-col text-[14px] sm:text-[18px] md:text-[20px] lg:text-[22px] space-y-8 lg:w-[60%] lg:mr-[150px] mx-[45px] text-justify">
          <p className=" sm:text-[22px] md:text-[24px] lg:text-[26px] font-bold">
            We give our clients the confidence to make iconic moves
          </p>
          <p>
            We help to unleash the power of your business to achieve exponential
            growth, through our a exceptional global network and Signature*
            framework.
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
          <p className="sm:text-[22px] md:text-[24px] lg:text-[26px] font-bold">
            We build strong business, and a sustainable, transformative tomorrow
          </p>
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

      <section className="flex flex-col lg:flex-row mt-[32.17px] mb-[24px] lg:mt-[69px] lg:mb-[73px] font-garamond w-full">
        <div className=" flex items-center justify-center text-center font-normal text-[19px] lg:text-[44.15px] mb-[23px] lg:w-[40%] mx-[3%]">
          BRAVE&apos;s <span className="italic ml-2">Commitment</span>
        </div>
        <div className="flex flex-col text-[14px] sm:text-[18px] md:text-[20px] lg:text-[22px] space-y-8 lg:w-[60%] lg:mr-[150px] mx-[45px] text-justify">
          <p className=" sm:text-[22px] md:text-[24px] lg:text-[26px] font-bold">
            Delivering on the promise of a memorable experience
          </p>
          <p>
            With experience in every imaginable sector, we help clients across
            industries create real meaning for their customers and reach their
            full potential.
          </p>
          <p>
            Business today in incredibly dynamic, challenging some of the most
            widely accepted constructs in branding. Our approach combines the
            three fundamental and dynamic elements in any market – people,
            businesses and their experiences.
          </p>
          <p>
            We build stronger brands that emotionally connect and remain
            relevant in changing markets. Wherever you are in your business
            journey, we’re here to help.
          </p>
        </div>
      </section>
      <section>
        <div className="border-t border-black w-[90%] flex mx-auto"></div>
        <SimpleContactForm />
      </section>
    </div>
  );
};

export default Home;
