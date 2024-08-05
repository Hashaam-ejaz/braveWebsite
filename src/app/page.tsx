import Link from "next/link";
import braveImg from "/public/images/brave-transformed.jpg";
import momentsImg from "/public/images/moments.jpeg";
import familyImg from "/public/images/family.jpeg";
import approachImg from "/public/images/approach.png";
import placeholderImg from "/public/images/placeholder.png";
import Image from "next/image";
import Card from "../components/card/page";
import landing from "../../public/images/landingSimple.png";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#fbf6f3]">
      <main className="flex-1">
        <section className="relative w-full h-[100vh] overflow-hidden">
          <Image
            src={landing}
            alt="Hero Image"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-10 flex items-center justify-center w-full h-full pl-2 sm:pl-4 md:pl-6 lg:pl-10">
            <h1 className=" text-white text-4xl md:text-6xl lg:text-8xl font-bold uppercase font-garamond text-shadow">
              The Brave Agency
            </h1>
          </div>
        </section>

        <section className="flex flex-col lg:flex-row px-20 lg:px-40 py-12 lg:py-24 font-garamond">
          <div className="basis-1/2 sm:basis-1 lg:basis-1/4 text-[22px] sm:text-[24px] md:text-[26px] lg:text-[30px] mb-2 lg:mb-0 lg:mr-2 mr-0">
            We are BRAVE
          </div>
          <div className="basis-1/2 sm:basis-1 lg:basis-3/4 text-base sm:text-[18px] md:text-[20px]  lg:text-[22px] space-y-4 ">
            <p>
              Grounded in extensive experience and fueled by an extraordinary,
              talented team, BRAVE is proud of our long-standing reputation for
              delivering exceptional results for our clients.
            </p>
            <p>
              From launching new brands and reinvigorating established brands,
              to creating a movement — together, we build{" "}
              <em className="font-semibold">stronger brands</em> that inspire
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
          <div className="absolute inset-0 bg-[#ffcccc] bg-opacity-60"></div>
          <div className="absolute bottom-0 left-0 py-16 w-full flex justify-center lg:px-40 lg:w-fit">
            <div className="px-4 py-3 bg-[#ff9999] bg-opacity-80 text-white font-garamond ">
              <Link href={"/moments"}>Our Moments</Link>
            </div>
          </div>
        </section>

        <section className="flex flex-col lg:flex-row px-20 lg:px-40 py-12 lg:py-24 font-garamond">
          <div className="basis-1/2 sm:basis-1 lg:basis-1/4 text-[22px] sm:text-[24px] md:text-[26px] lg:text-[30px] mb-2 lg:mb-0 lg:mr-2 mr-0">
            Why BRAVE is different
          </div>
          <div className="basis-1/2 sm:basis-1 lg:basis-3/4 text-base sm:text-[18px] md:text-[20px]  lg:text-[22px] space-y-4 ">
            <p>
              While our reach is global, BRAVE is small by design: We work with
              only a handful of projects at a time with{" "}
              <span className="underline font-semibold">our signature*</span>{" "}
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
          </div>
        </section>

        {/* family */}

        <section className="relative w-full h-[100vh] overflow-hidden">
          <Image
            src={familyImg}
            alt="Hero Image"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#ffcccc] bg-opacity-60"></div>
          <div className="absolute bottom-0 left-0 py-16 w-full flex justify-center lg:px-40 lg:w-fit">
            <div className="px-4 py-3 bg-[#ff9999] bg-opacity-80 text-white font-garamond ">
              <Link href={"/family"}>Our Family</Link>
            </div>
          </div>
        </section>

        <section className="flex flex-col lg:flex-row px-20 lg:px-40 py-12 lg:py-24 font-garamond">
          <div className="basis-1/2 sm:basis-1 lg:basis-1/4 text-[22px] sm:text-[24px] md:text-[26px] lg:text-[30px] mb-2 lg:mb-0 lg:mr-2 mr-0">
            About Us
          </div>
          <div className="basis-1/2 sm:basis-1 lg:basis-3/4 text-base sm:text-[18px] md:text-[20px]  lg:text-[22px] space-y-4">
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
              proven holistic approach to helping our clients build{" "}
              <em>stronger brands</em>.
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
          <div className="absolute inset-0 bg-[#ffcccc] bg-opacity-60"></div>
          <div className="absolute bottom-0 left-0 py-16 w-full flex justify-center lg:px-40 lg:w-fit">
            <div className="px-4 py-3 bg-[#ff9999] bg-opacity-80 text-white font-garamond ">
              <Link href={"/approach"}>Our Approach</Link>
            </div>
          </div>
        </section>

        <section className="flex flex-col px-20 lg:px-40 py-12 lg:py-24 font-garamond">
          <div className="text-base sm:text-[18px] md:text-[20px] lg:text-[22px] font-garamond ">
            We combines the fundamental and dynamic elements in any market –
            people, businesses, and their interactions.
          </div>
          <div className="text-[30px] font-garamond justify-center flex lg:mt-20 md:mt-15 sm:mt-10 mt-8 lg:mb-10 md:mb-8 sm:mb-6 mb-4">
            Our Commitment
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col lg:flex-row  gap-5 items-center min-h-40">
              <Card
                text="BEFORE YOU COME"
                img={"/public/images/placeholder.png"}
              />
              <Card
                text="AT THE LOCATION"
                img={"/public/images/placeholder.png"}
              />
              <Card text="TREATMENT" img={"/public/images/placeholder.png"} />
              <Card
                text="STAYING IN TOUCH"
                img={"/public/images/placeholder.png"}
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
