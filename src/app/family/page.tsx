"use client";
import Image from "next/image";
import { teamMembers } from "@lib/contants";
import family1 from "@assets/images/family.webp";
import logoFinal from "@assets/images/logos-26.png";
import "./style.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import family11 from "@assets/images/family11.webp";

const Family = () => {
  const imageArray = Array.from(
    { length: 25 },
    (_, index = 0) => `/images/logos-${index + 1}.webp`
  );
  const settings = {
    accessibility: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="flex flex-col min-h-screen ">
      <main className="flex-1 items-center justify-center">
        <section className="relative w-full h-[100vh] overflow-hidden">
          <Image
            src={family1}
            alt="Hero Image"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-10 flex flex-col h-full">
            <div className="flex h-1/2 lg:h-2/3">
              <div className="drop-shadow-custom pl-5 flex flex-col lg:w-2/5 sm:text-white items-center font-normal justify-center text-[46px] sm:text-[50px] lg:text-[80px] lg:pt-24 lg:pl-10 text-white uppercase lg:leading-[5.75rem] sm:leading-[4.5rem] leading-10 landscape:mt-32">
                Build success together
              </div>
              <div className="hidden lg:flex flex-col w-1/3 sm:w-2/3 lg:w-3/5" />
            </div>
            <div className="flex h-1/4 lg:h-1/3 drop-shadow-custom text-[24px] lg:text-[54px] text-white justify-center items-center uppercase landscape:mt-20 font-extralight">
              Our Family
            </div>
            <div className="flex h-1/4 lg:hidden" />
          </div>
        </section>

        <section className="px-4 py-16">
          <h2 className="text-[24px] lg:text-[54px] text-center mb-12 hidden lg:block font-light">
            OUR CLIENTS
          </h2>
          <h2 className="text-[20px] text-center mb-12 lg:hidden">
            OUR CLIENTS
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {imageArray.map((src, index) => (
              <div
                key={index}
                className="bg-white relative w-full aspect-square md:aspect-[4/3]"
              >
                <Image
                  src={src}
                  alt={`Client ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
                  className="object-contain p-3"
                />
              </div>
            ))}
            <div className=" relative w-full aspect-square md:aspect-[4/3] block md:hidden">
              <Image
                src={logoFinal}
                alt="Client 26"
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
                className="object-contain p-12 sm:p-16"
              />
            </div>
          </div>
        </section>

        <section className="relative w-full h-[100vh] overflow-hidden">
          <Image
            src={family11}
            alt="Hero Image"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-10 flex flex-col h-full">
            <div className="flex h-1/2 lg:h-3/4">
              <div className="flex flex-col sm:text-white items-center font-normal justify-center text-[36px] sm:text-[50px] lg:text-[80px] lg:pt-24 pl-5 text-white uppercase lg:leading-[4.75rem] sm:leading-[4.5rem] leading-10 landscape-mt">
                Staying <br />
                ahead of <br />
                Expectations
              </div>
            </div>
            <div className="flex h-1/4 lg:h-1/4 text-[24px] lg:text-[54px] text-white justify-center uppercase"></div>
            <div className="flex h-1/4 lg:hidden landscape-hidden" />
          </div>
        </section>
        <div className="text-[24px] lg:text-[54px] text-center justify-center uppercase text-black mt-4 lg:mt-2">
          Our Team
        </div>

        <div className="w-3/4 m-auto mb-20">
          <div className="mt-10 lg:mt-20">
            <Slider {...settings}>
              {teamMembers.map((d, index) => (
                <div
                  key={index * 10}
                  className="h-[650px] lg:h-[550px] text-black rounded-xl border "
                >
                  <div className="bg-[#6A397B] rounded-t-xl h-44 flex items-center justify-center">
                    <Image src={d.image} alt="image" width={150} height={150} />
                  </div>
                  <div className="flex flex-col justify-center items-center gap-4 p-4">
                    <p className="text-xl font-semibold ">{d.name}</p>
                    <p className="text-lg font-medium text-[#C0428B]">
                      {d.title}
                    </p>
                    <div>
                      {d.roles.map((role, index) => (
                        <p key={index}>{role}</p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Family;
