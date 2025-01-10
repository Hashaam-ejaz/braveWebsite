"use client";
import Image from "next/image";
import moments1 from "@assets/images/moments3.webp";
import Card from "@components/moments-card/card2";

const Family = () => {
  const imageArray = Array.from(
    { length: 23 },
    (_, index = 0) => `/images/mom${index + 1}.webp`
  );

  const textArray = [
    {
      firstText: "PRADA USA",
      secondText: "Fulfilling PRADA's Global Ambition",
    },
    {
      firstText: "FASHION GROUP INTERNATIONAL",
      secondText: "Providing Leadership to 26 Global FGI regions",
    },
    {
      firstText: "PRADA EPICENTER I & II",
      secondText: "Experience Beyond Retail",
    },
    {
      firstText: "DIESEL USA",
      secondText: "Reimagining Brand to Connect with Peoples’ DNA",
    },
    {
      firstText: "NY FASHION SHOW",
      secondText: "Bringing the Best of New York to Rest of the World",
    },
    {
      firstText: "DIESEL AD CAMPAIGN",
      secondText: "Iconic Ad that Changed the World",
    },
    {
      firstText: "RICKY MARTIN x DSQUARD ",
      secondText: "Where Music Meets the Brand",
    },
    {
      firstText: "HIP HOP x TRIBECA FILM FESTIVAL",
      secondText: "From Inspiring Singers to Inspiring Movies",
    },
    {
      firstText: "WILSON x NFL",
      secondText: "Uniting Game Changers",
    },
    {
      firstText: "FASHION GROUP INTERNATIONAL",
      secondText: "Production of Night of Stars",
    },
    {
      firstText: "EUROPEAN COMMISSION",
      secondText: "Transforming manufacturing sector for trade enhancement",
    },
    {
      firstText: "EUROPEAN BANK",
      secondText: "Merger that redefines banking",
    },
    {
      firstText: "GLOBAL INSURANCE LEADER",
      secondText: "Banking on Happy Customer – A century Strategy",
    },
    {
      firstText: "GQ x NFL HONORS",
      secondText: "A New Way to Play the Game",
    },
    {
      firstText: "BACCARAT HOTEL, NEW YORK",
      secondText: "Creating an Experience Unlike any Other",
    },
    {
      firstText: "MCM WORLDWIDE",
      secondText: "Reinvigorating a Legendary Brand",
    },
    {
      firstText: "MARIE CLAIRE x CHANGE MAKERS",
      secondText: "Made for Makers",
    },
    {
      firstText: "SUPER BOWL x BLACK EYED PEAS",
      secondText: "Sounds like Super Bowl",
    },
    {
      firstText: "NFL HALFTIME SHOW",
      secondText: "When Sports Becomes an Experience",
    },
    {
      firstText: "PUMA x NBA",
      secondText: "Building Better Together",
    },
    {
      firstText: "RAY J",
      secondText: "Establishing the New Possible",
    },
    {
      firstText: "DIESEL-U-MUSIC",
      secondText: "Movement that Inspires",
    },
    {
      firstText: "JON BON JOVI",
      secondText: "Turning a Legend into an Icon",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen ">
      <main className="flex-1 items-center justify-center">
        <section className="relative w-full h-[100vh] overflow-hidden">
          <Image
            src={moments1}
            alt="Hero Image"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-10 flex flex-col items-center justify-center w-full h-full  sm:pl-1 md:pl-2 lg:pl-10">
            <div className="flex flex-col text-center">
              <h1 className=" text-white text-[32px] md:text-[48px] lg:text-[100px]">
                OUR MOMENTS
              </h1>
              <h1 className="text-center text-white text-[15px] md:text-[30px] lg:text-[36px] font-thin	">
                We create the narrative that make the headlines
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
