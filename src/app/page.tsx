import Link from "next/link";
import braveImg from "/public/images/brave-transformed.jpg";
import momentsImg from "/public/images/moments.jpeg";
import Image from "next/image";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
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

        <section className="relative w-full h-[100vh] overflow-hidden">
          <Image
            src={momentsImg}
            alt="Hero Image"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#ffcccc] bg-opacity-60"></div>
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
      </main>
    </div>
  );
};

export default Home;
