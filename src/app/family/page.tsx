import Image from "next/image";
import NameCard from "@components/name-card/page";
import { teamMembers } from "@lib/contants";
import family1 from "@assets/images/family.png";

const Family = () => {
  const imageArray = Array.from(
    { length: 25 },
    (_, index = 0) => `/images/client${index + 1}.png`
  );

  return (
    <div className="flex flex-col min-h-screen ">
      <main className="flex-1 items-center justify-center font-garamond">
        <section className="relative w-full h-[100vh] overflow-hidden">
          <Image
            src={family1}
            alt="Hero Image"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-10 flex flex-col items-center justify-center w-full h-full  sm:pl-1 md:pl-2 lg:pl-10">
            <h1 className=" text-white text-[32px] md:text-[48px] lg:text-[100px] uppercase font-garamond">
              Our Family
            </h1>
            <h1 className=" text-white text-center text-[18px] md:text-[24px] lg:text-[36px] uppercase font-garamond">
              Together, we build stronger brands that inspire the world.
            </h1>
          </div>
        </section>

        <section className="mt-[30px] lg:mt-[60px] flex flex-col w-full items-center">
          <h1 className="text-[20px] md:text-[38px] lg:text-[64px] mb-[4px] italic">
            Client&apos;s
          </h1>
          <div className="container mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 place-items-center">
              {imageArray.map((imageSrc, index) => (
                <div
                  key={index}
                  className="relative bg-white w-[150px] h-[150px] lg:w-[200px] lg:h-[200px]"
                >
                  <Image
                    src={imageSrc}
                    alt={`Client ${index + 1}`}
                    fill
                    className=""
                    style={{ objectFit: "contain" }}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full flex flex-col px-10  py-12  items-center justify-center">
          <p className="text-[20px] md:text-[38px] lg:text-[64px] italic">
            Team
          </p>
          {teamMembers.map((member, index) => (
            <NameCard key={index} member={member} />
          ))}
        </section>
      </main>
    </div>
  );
};

export default Family;
