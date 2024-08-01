import Link from "next/link";
import braveImg from "/public/images/brave-transformed.jpg";
import momentsImg from "/public/images/moments.jpeg";
import familyImg from "/public/images/family.jpeg";
import approachImg from "/public/images/approach.jpeg";
import placeholderImg from "/public/images/placeholder.png";
import Image from "next/image";
import Card from "../components/card/page";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#fbf6f3]">
      <main className="flex-1">
        <section className="relative w-full h-[100vh] overflow-hidden">
          <Image
            src={braveImg}
            alt="Hero Image"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* <div className="absolute inset-0 bg-[#ffcccc] bg-opacity-60"></div> */}
        </section>

        <section className="flex flex-row px-40 py-24 font-garamond">
          <div className="basis-1/4 sm:basis-1 lg:basis-1/4 text-[30px] ">
            We are BRAVE
          </div>
          <div className="basis-3/4 sm:basis-1 lg:basis-3/4 text-[22px] space-y-4 ">
            <p>
              Grounded in extensive experience and fueled by an extraordinary,
              talented team, BRAVE is proud of our long-standing reputation for
              delivering exceptional results for our clients.
            </p>
            <p>
              From launching new brands and reinvigorating established brands,
              to creating a movement — together, we build{" "}
              <em>stronger brands</em> that inspire the world.
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
          <div className="absolute bottom-0 left-0 py-16 px-40">
            <div className="px-4 py-3 bg-[#ff9999] bg-opacity-80 text-white font-garamond ">
              Our Moments
            </div>
          </div>
        </section>

        <section className="flex flex-row px-40 py-24 font-garamond">
          <div className="basis-1/4 sm:basis-1 lg:basis-1/4 text-[30px] ">
            Why BRAVE is different
          </div>
          <div className="basis-3/4 sm:basis-1 lg:basis-3/4 text-[22px] space-y-4">
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
          <div className="absolute bottom-0 left-0 py-16 px-40">
            <div className="px-4 py-3 bg-[#ff9999] bg-opacity-80 text-white font-garamond ">
              Our Family
            </div>
          </div>
        </section>

        <section className="flex flex-row px-40 py-24 font-garamond">
          <div className="basis-1/4 sm:basis-1 lg:basis-1/4 text-[30px] ">
            About Us
          </div>
          <div className="basis-3/4 sm:basis-1 lg:basis-3/4 text-[22px] space-y-4">
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
          <div className="absolute bottom-0 left-0 py-16 px-40">
            <div className="px-4 py-3 bg-[#ff9999] bg-opacity-80 text-white font-garamond ">
              Our Approach
            </div>
          </div>
        </section>

        <section className="flex flex-col px-40 py-24 font-garamond">
          <div className="text-[22px] font-garamond ">
            We combines the fundamental and dynamic elements in any market –
            people, businesses, and their interactions.
          </div>
          <div className="flex flex-col">
            <div className="text-[30px] font-garamond justify-center flex mt-20 mb-10 ">
              Our Commitment
            </div>
            <div className="flex flex-row h-[100%] gap-5 ">
              <Card img={placeholderImg} />
              <Card img={placeholderImg} />
              <Card img={placeholderImg} />
              <Card img={placeholderImg} />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
