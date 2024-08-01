import Image from "next/image";
import headerImg from "/public/images/appraoch-header.jpg";
import section1Img from "/public/images/family1.jpg";
import NameCard from "@/assets/components/name-card/page";
import { teamMembers } from "@/assets/lib/contants";

const Family = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#fbf6f3]">
      <main className="flex-1">
        <section className="relative w-full h-[20vh] overflow-hidden">
          <Image
            src={headerImg}
            alt="Hero Image"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#ffcccc] bg-opacity-60"></div>
        </section>

        <section className="flex flex-row px-40 py-24 font-garamond h-[50rem]">
          <div className="basis-1/4 sm:basis-1 lg:basis-1/4 flex flex-col font-garamond">
            <div className="text-[30px]">Our family</div>
            <p className="text-[22px]">
              Together, we{" "}
              <em className="text-pink-500">build stronger brands</em> that
              inspire the world.
            </p>
          </div>
          <div className="basis-3/4 sm:basis-1 lg:basis-3/4 flex justify-center">
            <div className="relative w-full h-full overflow-hidden">
              <Image
                src={section1Img}
                alt="Hero Image"
                className="absolute inset-0 w-full h-full object-contain"
              />
            </div>
          </div>
        </section>

        <section className="w-full flex flex-col px-40 py-24 md:py-24 lg:py-32">
          <p>BRAVE Team</p>
          {teamMembers.map((member, index) => (
            <NameCard key={index} member={member} />
          ))}
        </section>
      </main>
    </div>
  );
};

export default Family;
