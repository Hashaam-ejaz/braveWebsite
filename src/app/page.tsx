import Link from "next/link";
import momentsImg from "@assets/images/moments.webp";
import momentsmImg from "@assets/images/momentsm.webp";
import familyImg from "@assets/images/family.webp";
import approachImg from "@assets/images/approach.webp";
import approachmImg from "@assets/images/approachm.png";
import Image from "next/image";
import landing from "@assets/images/landingSimple.webp";
import landingm from "@assets/images/landingMobile.webp";

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
        <div className="relative z-10 flex flex-col h-full">
          <div className="flex h-1/2 lg:h-2/3">
            <div className="flex pl-5 flex-col w-2/3 sm:w-1/3 lg:w-2/5 drop-shadow-custom sm:text-white items-center font-normal justify-center text-[36px] sm:text-[50px] lg:text-[96px] lg:pt-24 lg:pl-10 text-white uppercase lg:leading-[5.75rem] sm:leading-[4.5rem] leading-10 landscape:mt-32">
              Building Stronger Brands
            </div>
            <div className="flex flex-col w-1/3 sm:w-2/3 lg:w-3/5" />
          </div>
          <div className="flex drop-shadow-custom h-1/4 lg:h-1/3 text-[24px] lg:text-[54px] text-white justify-center items-center uppercase landscape:mt-20 font-light">
            The Brave Agency
          </div>
          <div className="flex h-1/4 lg:hidden" />
        </div>
      </section>

      <section className="flex flex-col lg:flex-row mt-[32.17px] mb-[13px] lg:mt-[83px] lg:mb-[73px] w-full md:justify-center">
        <div className="flex justify-start lg:items-center text-left text-[40px] lg:font-normal font-medium lg:text-[85px] mb-[12px] lg:w-[40%] lg:pl-[37px] pl-4 lg:mr-16 xl:mr-0 leading-[5.75rem]">
          We are <br className="hidden lg:block" /> BRAVE
        </div>

        <div className="flex flex-col text-[14px] sm:text-[18px] md:text-[20px] lg:text-[22px] text-justify lg:pr-[80px] max-w-[880px] px-4">
          <p className="text-[20px] md:text-[24px] lg:text-[48px] font-medium lg:font-normal mb-[25px] lg:mb-[32px] text-left">
            Your trusted partner in creating iconic brand and business
          </p>
          <div className="flex flex-col space-y-8 text-[14px] md:text-[18px] lg:text-[20px]">
            <p>
              Grounded in extensive experience and fueled by an extraordinary,
              talented team, BRAVE team is proud of it&apos;s long-standing
              reputation for delivering exceptional results for our clients.
            </p>
            <p>
              From launching new brands and reinvigorating established business,
              to creating a movement. Together, we build{" "}
              <span className="font-bold lg:ml-1">stronger brands</span> that
              inspire the world.
            </p>
          </div>
        </div>
      </section>

      {/* moment */}
      <section className="relative w-full h-[100vh] overflow-hidden">
        Desktop Image
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
        <div className="relative z-10 flex flex-col h-full">
          <div className="flex h-1/2 lg:h-2/3">
            <div className="flex flex-col items-center justify-center text-[36px] lg:text-[96px] lg:pt-24 pl-5 lg:pl-20 text-white uppercase lg:leading-[5.75rem] sm:leading-[4.5rem] leading-10">
              We Inspire <br /> the world
            </div>
          </div>
          <div className="flex h-1/4 lg:h-1/3 text-[30px] lg:text-[70px] text-white justify-center items-center pb-28">
            <div className="bg-white lg:bg-white/60 px-4 py-3 text-[12px] w-[143px] h-[28px] lg:text-[20px] lg:w-[200px] lg:h-[45px] flex items-center justify-center text-center text-[#FF007B] lg:text-[#A30953] rounded-full lg:border-[#A30953] lg:border-[3.28px] lg:border-solid">
              <Link href={"/moments"}>Our Moments</Link>
            </div>
          </div>
          <div className="flex h-1/4 lg:hidden" />
        </div>
      </section>

      <section className="flex flex-col lg:flex-row mt-[32.17px] mb-[13px] lg:mt-[83px] lg:mb-[73px] w-full md:justify-center">
        <div className="flex justify-start lg:font-normal font-medium lg:items-center text-start text-[40px]  lg:text-[85px] mb-[12px] lg:w-[40%] lg:pl-[37px] pl-4 lg:mr-16 2xl:mr-0 lg:leading-[5.75rem]">
          Why <br className="hidden lg:block" /> BRAVE is different
        </div>

        <div className="flex flex-col text-[14px] sm:text-[18px] md:text-[20px] lg:text-[22px] text-justify lg:pr-[80px] max-w-[1000px] px-4">
          <p className="text-[20px] md:text-[24px] lg:text-[48px] mb-[25px] font-medium lg:font-normal lg:mb-[32px] text-start">
            We give our clients the confidence to make iconic moves
          </p>
          <div className="flex flex-col space-y-8 text-[14px] md:text-[18px] lg:text-[20px]">
            <p>
              While our reach is global, BRAVE is small by design: We work with
              only a handful of projects at a time with our signature*
              framework.
            </p>
            <p>
              This discipline allows us to focus on creating and delivering
              customized strategies to meet each project’s unique needs and
              provide a level of service that ensures we are with our partners &
              clients when they need us most.
            </p>
            <p>
              We engage with our partners & clients in a manner that embraces
              their culture, work hand in hand to achieve their goals, and
              measure results with proprietary tools.
            </p>
            <p className="lg:text-[18px] text-[10px]">
              *Neuroeconomics + PHD (Physical, Human, Digital) Framework
            </p>
          </div>
        </div>
      </section>

      {/* family */}

      <section className="relative w-full h-[100vh] overflow-hidden">
        <Image
          src={familyImg}
          alt="Hero Image"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="relative z-10 flex flex-col h-full">
          <div className="flex h-1/2 lg:h-2/3">
            <div className="flex flex-col w-2/3 lg:w-2/5 items-center justify-center text-[36px] lg:text-[96px] lg:pt-24 pl-5 lg:pl-20 text-white uppercase lg:leading-[5.75rem] sm:leading-[3rem] md:leading-[3rem] leading-10">
              We build success together
            </div>
            <div className="flex flex-col w-1/3 lg:w-3/5" />
          </div>
          <div className="flex h-1/4 lg:h-1/3 text-[30px] lg:text-[70px] text-white justify-center items-center pb-28">
            <div className="bg-white lg:bg-white/60 px-4 py-3 text-[12px] lg:text-[20px] w-[143px] lg:w-[200px] lg:h-[45px] flex items-center justify-center text-center text-[#6A397B] lg:text-[#671E80] rounded-full border-solid border-[1px] lg:border-[3.28px] border-white lg:border-[#671E80]">
              <Link href={"/family"}>Our Family</Link>
            </div>
          </div>
          <div className="flex h-1/4 lg:hidden" />
        </div>
      </section>

      <section className="flex flex-col lg:flex-row mt-[32.17px] mb-[13px] lg:mt-[83px] lg:mb-[73px] w-full md:justify-center">
        <div className="flex justify-start lg:items-center text-start text-[40px] lg:font-normal font-medium lg:text-[85px] mb-[12px] lg:w-[40%] lg:pl-[37px] pl-4 lg:mr-16 xl:mr-0 leading-[5.75rem]">
          About <br className="hidden lg:block" /> BRAVE
        </div>

        <div className="flex flex-col text-[14px] sm:text-[18px] md:text-[20px] lg:text-[22px] text-justify lg:pr-[80px] max-w-[1000px] px-4">
          <p className="text-[20px] md:text-[24px] lg:text-[48px] font-medium lg:font-normal mb-[25px] lg:mb-[32px] text-start">
            We build strong business, and a sustainable, transformative tomorrow
          </p>
          <div className="flex flex-col space-y-8 text-[14px] md:text-[18px] lg:text-[20px]">
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
              proven holistic approach to helping our clients build stronger
              brands
            </p>
          </div>
        </div>
      </section>

      {/* approach */}
      <section className="relative w-full h-auto overflow-hidden md:hidden">
        <div className="relative w-full h-auto sm:h-full">
          <Image
            src={approachmImg}
            alt="Hero Image Mobile"
            className="block w-full h-auto"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white/20 text-[#5C2A5F] border-[#5C2A5F] lg:text-[20px] px-4 py-3 text-[12px] w-[143px] h-[28px] lg:w-[200px] lg:h-[45px] flex items-center justify-center text-center rounded-full border-solid border-[1px] lg:border-[3.28px]">
              <Link href={"/approach"}>Our Approach</Link>
            </div>
          </div>
        </div>
      </section>
      <section className="relative w-full h-[100vh] overflow-hidden hidden md:block">
        <Image
          src={approachImg}
          alt="Hero Image"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="relative z-10 flex flex-col h-full">
          <div className="flex h-1/2 lg:h-2/3">
            <div className="flex flex-col items-center justify-center text-[36px] lg:text-[96px] lg:pt-12 pl-5 lg:pl-20 text-white uppercase lg:leading-[5.75rem] sm:leading-[3rem] md:leading-[3rem] leading-10">
              Re-imagine <br /> experiences
            </div>
          </div>
          <div className="flex h-1/4 lg:h-1/3 text-[30px] lg:text-[70px] text-white justify-center items-center pb-28">
            <div className="bg-white lg:bg-white/60 px-4 py-3 text-[12px] lg:text-[20px] w-[143px] lg:w-[200px] lg:h-[45px] flex items-center justify-center text-center text-[#A30953] lg:text-[#A30953] rounded-full border-solid border-[1px] lg:border-[3.28px] border-white lg:border-[#671E80]">
              <Link href={"/approach"}>Our Approach</Link>
            </div>
          </div>
          <div className="flex h-1/4 lg:hidden" />
        </div>
      </section>

      <section className="flex flex-col lg:flex-row mt-[32.17px] mb-[13px] lg:mt-[83px] lg:mb-[73px] w-full md:justify-center">
        <div className="flex justify-start lg:items-center text-start text-[40px] font-medium lg:font-normal lg:text-[85px] mb-[12px] lg:w-[40%] lg:pl-[37px] pl-4 lg:mr-16 2xl:mr-0 leading-[5.75rem]">
          BRAVE&apos;s <br className="hidden lg:block" /> Promise
        </div>

        <div className="flex flex-col text-[14px] sm:text-[18px] md:text-[20px] lg:text-[22px] text-justify lg:pr-[80px] max-w-[880px] px-4">
          <p className="text-[20px] md:text-[24px] lg:text-[48px] font-medium lg:font-normal mb-[25px] lg:mb-[32px] text-start">
            A memorable experience that powers growth
          </p>
          <div className="flex flex-col space-y-8 text-[14px] md:text-[18px] lg:text-[20px]">
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
            <p className="pb-9 lg:pb-0">
              We build stronger brands that emotionally connect and remain
              relevant in changing markets. Wherever you are in your business
              journey, we&apos;re here to help.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
