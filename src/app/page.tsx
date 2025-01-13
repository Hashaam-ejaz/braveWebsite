import Link from "next/link";
import momentsImg from "@assets/images/moments.webp";
import momentsmImg from "@assets/images/momentsm.webp";
import familyImg from "@assets/images/family.webp";
import approachImg from "@assets/images/approach.webp";
import approachmImg from "@assets/images/approachm.webp";
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
            <div className="flex flex-col w-2/3 sm:w-1/3 lg:w-2/5 sm:text-white items-center font-normal justify-center text-[36px] sm:text-[50px] lg:text-[96px] sm:ml-10 xl:ml-32 lg:pt-24 pl-5 lg:pl-20 text-white uppercase">
              Building Stronger Brands
            </div>
            <div className="flex flex-col w-1/3 sm:w-2/3 lg:w-3/5" />
          </div>
          <div className="flex h-1/4 lg:h-1/3 text-[30px] lg:text-[96px] text-white justify-center items-center pb-28 uppercase">
            The Brave Agency
          </div>
          <div className="flex h-1/4 lg:hidden" />
        </div>
      </section>

      <section className="flex flex-col lg:flex-row mt-[32.17px] mb-[13px] lg:mt-[83px] lg:mb-[73px] w-full px-">
        <div className="flex justify-start lg:items-center text-start text-[40px] font-normal lg:text-[85px] mb-[12px] lg:w-[40%] lg:pl-[37px] pl-4 lg:mr-16 xl:mr-0">
          We are <br className="hidden lg:block" /> BRAVE
        </div>

        <div className="flex flex-col text-[14px] sm:text-[18px] md:text-[20px] lg:text-[22px] text-justify lg:pr-[80px] max-w-[880px] px-4">
          <p className="text-[20px] md:text-[24px] lg:text-[48px] font-medium lg:font-normal mb-[25px] lg:mb-[62px]">
            Your trusted partner in creating iconic brand and business.
          </p>
          <div className="flex flex-col space-y-8 text-[14px] md:text-[20px] lg:text-[32.53px]">
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
            <div className="flex flex-col w-2/3 lg:w-2/5 items-center justify-center text-[36px] lg:text-[96px] lg:pt-24 pl-5 lg:pl-20 text-white uppercase">
              We Inspire the world
            </div>
            <div className="flex flex-col w-1/3 lg:w-3/5" />
          </div>
          <div className="flex h-1/4 lg:h-1/3 text-[30px] lg:text-[70px] text-white justify-center items-center pb-28 uppercase">
            <div className="bg-white lg:bg-white/60 px-4 py-3 text-[12px] lg:text-[40px] w-[143px] h-[28px] lg:w-[370px] lg:h-[75px] flex items-center justify-center text-center text-[#FF007B] lg:text-[#A30953] rounded-full lg:border-[#A30953] lg:border-[3.28px] lg:border-solid ">
              <Link href={"/moments"}>Our Moments</Link>
            </div>
          </div>
          <div className="flex h-1/4 lg:hidden" />
        </div>
      </section>

      <section className="flex flex-col lg:flex-row mt-[32.17px] mb-[13px] lg:mt-[83px] lg:mb-[73px] w-full px-">
        <div className="flex justify-start lg:items-center text-start text-[40px]  lg:text-[85px] mb-[12px] lg:w-[40%] lg:pl-[37px] pl-4 lg:mr-16 2xl:mr-0">
          Why <br /> BRAVE is different
        </div>

        <div className="flex flex-col text-[14px] sm:text-[18px] md:text-[20px] lg:text-[22px] text-justify lg:pr-[80px] max-w-[880px] px-4">
          <p className="text-[20px] md:text-[24px] lg:text-[48px] mb-[25px] font-medium lg:font-normal lg:mb-[62px]">
            We give our clients the confidence to make iconic moves
          </p>
          <div className="flex flex-col space-y-8 text-[14px] md:text-[20px] lg:text-[32.53px]">
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
            <p className="lg:text-[24px] text-[10px]">
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
            <div className="flex flex-col w-2/3 lg:w-2/5 items-center justify-center text-[36px] lg:text-[70px] lg:pt-24 pl-5 lg:pl-20 text-white uppercase">
              We build success together
            </div>
            <div className="flex flex-col w-1/3 lg:w-3/5" />
          </div>
          <div className="flex h-1/4 lg:h-1/3 text-[30px] lg:text-[70px] text-white justify-center items-center pb-28 uppercase">
            <div className="bg-white lg:bg-white/60 px-4 py-3 text-[12px] lg:text-[40px] w-[143px] h-[28px] lg:w-[370px] lg:h-[75px] flex items-center justify-center text-center text-[#6A397B] lg:text-[#671E80] rounded-full border-solid border-[1px] lg:border-[3.28px] border-white lg:border-[#671E80]">
              <Link href={"/family"}>Our Family</Link>
            </div>
          </div>
          <div className="flex h-1/4 lg:hidden" />
        </div>
      </section>

      <section className="flex flex-col lg:flex-row mt-[32.17px] mb-[13px] lg:mt-[83px] lg:mb-[73px] w-full px-">
        <div className="flex justify-start lg:items-center text-start text-[40px] font-normal lg:text-[85px] mb-[12px] lg:w-[40%] lg:pl-[37px] pl-4 lg:mr-16 xl:mr-0">
          About <br /> BRAVE
        </div>

        <div className="flex flex-col text-[14px] sm:text-[18px] md:text-[20px] lg:text-[22px] text-justify lg:pr-[80px] max-w-[880px] px-4">
          <p className="text-[20px] md:text-[24px] lg:text-[48px] font-medium lg:font-normal mb-[25px] lg:mb-[62px]">
            We build strong business, and a sustainable, transformative tomorrow
          </p>
          <div className="flex flex-col space-y-8 text-[14px] md:text-[20px] lg:text-[32.53px]">
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
            <p className="lg:text-[24px] text-[10px]">
              *Neuroeconomics + PHD (Physical, Human, Digital) Framework
            </p>
          </div>
        </div>
      </section>

      {/* approach */}
      <section className="relative w-full sm:h-[50vh] lg:h-[60vh] xl:h-[70vh] 2xl:h-[100vh] h-[100vh] overflow-hidden">
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
          <div className="bg-white lg:bg-white/20 lg:text-[#5C2A5F] lg:border-[#5C2A5F] lg:text-[40px] px-4 py-3 text-[12px] w-[143px] h-[28px] lg:w-[370px] lg:h-[75px] flex items-center justify-center text-center text-[#FF4076] rounded-full border-solid border-[1px] lg:border-[3.28px] border-white">
            <Link href={"/approach"}>Our Approach</Link>
          </div>
        </div>
      </section>

      <section className="flex flex-col lg:flex-row mt-[32.17px] mb-[13px] lg:mt-[83px] lg:mb-[73px] w-full px-">
        <div className="flex justify-start lg:items-center text-start text-[40px] font-normal lg:text-[85px] mb-[12px] lg:w-[40%] lg:pl-[37px] pl-4 lg:mr-16 2xl:mr-0">
          BRAVE&apos;s <br /> Promise
        </div>

        <div className="flex flex-col text-[14px] sm:text-[18px] md:text-[20px] lg:text-[22px] text-justify lg:pr-[80px] max-w-[880px] px-4">
          <p className="text-[20px] md:text-[24px] lg:text-[48px] font-medium lg:font-normal mb-[25px] lg:mb-[62px]">
            A memorable experience that powers growth
          </p>
          <div className="flex flex-col space-y-8 text-[14px] md:text-[20px] lg:text-[32.53px]">
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
              journey, we&apos;re here to help.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
