"use client";
import Image from "next/image";
import moments1 from "@assets/images/moments.png";
import Card from "@components/moments-card/card2";

const Family = () => {
  const imageArray = Array.from(
    { length: 18 },
    (_, index = 0) => `/images/mom${index + 1}.png`
  );

  const textArray = [
    {
      firstText: "PRADA USA",
      secondText: "Founding team of Prada in United States",
    },
    {
      firstText: "FASHION GROUP INTERNATIONAL",
      secondText: "Overall Strategy for 26 Global FGI regions",
    },
    {
      firstText: "PRADA EPICENTER I & II",
      secondText: "Experience: Design, Art & Culture",
    },
    {
      firstText: "DIESEL USA",
      secondText: "Brand Transformation & New Arenas",
    },
    {
      firstText: "NY FASHION SHOW",
      secondText: "Executed Runway Show",
    },
    {
      firstText: "DIESEL AD CAMPAIGN",
      secondText: "Tailored Strategy: Ad that changed the world",
    },
    {
      firstText: "RICKY MARTIN & DSQUARD ",
      secondText: "Managed Two Clients & Collaborations",
    },
    {
      firstText: "HIP HOP x TRIBECA FILM FESTIVAL x FASHION",
      secondText: "Partnership & Premiership at Film Festival",
    },
    {
      firstText: "WILSON x NFL",
      secondText: "Executed Sponsorship of NFL Super Bowl 2019-20",
    },
    {
      firstText: "FASHION GROUP INTERNATIONAL",
      secondText: "Production of  ‘ Night of Stars ’",
    },
    {
      firstText: "GQ 2019 NFL HONORS",
      secondText: "Partnered to host the Super Bowl 53 Event",
    },
    {
      firstText: "BACCARAT HOTEL, NEW YORK",
      secondText: "Strategy & Execution",
    },
    {
      firstText: "RODEO DRIVE EVENT",
      secondText: "Executed the Event & Product Collaborations",
    },
    {
      firstText: "JON BON JOVI",
      secondText: "Launched HWRW by Jon Bon Jovi Brand",
    },
    {
      firstText: "MARIE CLAIRE",
      secondText: "Partnered in Hollywood’s Change Makers Event",
    },
    {
      firstText: "Super Bowl LIII x Black Eyed Peas",
      secondText: "Partnered with Sponsor to Elevate Brand",
    },
    {
      firstText: "RAY J",
      secondText: "Spearheaded to Launch Scoot-E by Ray J",
    },
    {
      firstText: "DIESEL-U-MUSIC 2009 NYC",
      secondText: "Kanye West – Managed Celebrity Management",
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
