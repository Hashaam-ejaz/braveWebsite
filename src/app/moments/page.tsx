"use client";
import Image from "next/image";
import moments1 from "@assets/images/moments.png";
import Card from "@components/moments-card/card2";

const Family = () => {
  const imageArray = Array.from(
    { length: 12 },
    (_, index = 0) => `/images/mom${index + 1}.png`
  );

  const textArray = [
    { firstText: "Diesel USA", secondText: "Brand Transformation & New Arena" },
    { firstText: "Prada USA", secondText: "Founded Prada in United States" },
    {
      firstText: "Qurate Retail Group",
      secondText: "Ideated and executed Nasqad ceremony",
    },
    {
      firstText: "Bergdorf Goodman",
      secondText: "Launched ED by Ellen Degeneres",
    },
    {
      firstText: "Diesel AD campaign",
      secondText: "AD that Changed the World",
    },
    {
      firstText: "Prada Epicenter 1 & 2",
      secondText: "Experience: Design, Art & Culture",
    },
    {
      firstText: "Fashion Show",
      secondText: "Executed New York Runway Show",
    },
    {
      firstText: "Fashion Group International",
      secondText: "Overall Strategy for 26 Global FGI",
    },
    {
      firstText: "Fashion Group International",
      secondText: "Production of 'Night of Stars'",
    },
    {
      firstText: "GQ & Rolling Stones",
      secondText: "Launched Pre Parties with Bon Jovi",
    },
    {
      firstText: "Ricky martin & DSquared",
      secondText: "Executed Concert & Celeb Seeding",
    },
    {
      firstText: "Wilsoon",
      secondText: "Official Sponsor Of The NFL Superbowl",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen ">
      <main className="flex-1 items-center justify-center font-garamond">
        <section className="relative w-full h-[100vh] overflow-hidden">
          <Image
            src={moments1}
            alt="Hero Image"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-10 flex flex-col items-center justify-center w-full h-full  sm:pl-1 md:pl-2 lg:pl-10">
            <div className="flex flex-col">
              <h1 className=" text-white text-[32px] md:text-[48px] lg:text-[100px] font-garamond">
                OUR MOMENTS
              </h1>
              <h1 className="text-center text-white text-[15px] md:text-[30px] lg:text-[36px] font-garamond font-thin	">
                Creating stories that are making headlines
              </h1>
            </div>
          </div>
        </section>
        <section className="mt-[30px] lg:mt-[60px] flex flex-col w-full items-center">
          <div className="flex flex-col items-center p-4 mb-[42px] lg:mb-[170px]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 place-items-center">
              {imageArray.map((imageSrc, index) => {
                const { firstText, secondText } = textArray[index];
                return (
                  <div key={index} className="w-full flex justify-center">
                    <Card
                      imageSrc={imageSrc}
                      firstText={firstText}
                      secondText={secondText}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Family;
