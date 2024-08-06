import Image from "next/image";
import headerImg from "/public/images/appraoch-header.jpg";
import section1Img from "/public/images/family1.jpg";
import NameCard from "@/assets/components/name-card/page";
import { teamMembers } from "@/assets/lib/contants";

const Family = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#fbf6f3]">
      <main className="flex-1 items-center justify-center">
        <section className="relative w-full h-[15vh] md:h-[20vh] overflow-hidden">
          <Image
            src={headerImg}
            alt="Hero Image"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#ffcccc] bg-opacity-60"></div>
        </section>

        <section className="flex flex-col lg:px-35 py-12 lg:py-24 font-garamond h-[30rem] sm:h-[35rem] md:h-[40rem] lg:h-[50rem] ">
          <div className="flex flex-col justify-between items-center h-full">
            <div className="w-full text-center mb-8 ">
              <div className="text-[22px] sm:text-[24px] md:text-[26px] lg:text-[30px]">
                Our family
              </div>
              <p className="text-base sm:text-[18px] md:text-[20px]  lg:text-[22px]">
                Together, we{" "}
                <em className="text-pink-500">build stronger brands</em> that
                inspire the world.
              </p>
            </div>
            <div className="w-full flex justify-center h-full">
              <div className="relative w-[90%] h-full overflow-hidden">
                <Image
                  src={section1Img}
                  alt="Hero Image"
                  className="absolute inset-0 w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full flex flex-col px-10  py-12 lg:px-40 lg:py-24 items-center justify-center">
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
