"use client";
import Image from "next/image";
import { teamMembers } from "@lib/contants";
import family1 from "@assets/images/family.png";
import "./style.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Family = () => {
  const imageArray = Array.from(
    { length: 25 },
    (_, index = 0) => `/images/client${index + 1}.png`
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
            <h1 className=" text-white text-center text-[18px] md:text-[24px] lg:text-[36px] font-garamond">
              Together, we build stronger brands that inspire the world.
            </h1>
          </div>
        </section>
        <section className="mt-[30px] lg:mt-[60px] flex flex-col lg:flex-row gap-8 w-full items-center">
          <h1 className="text-[20px] md:text-[38px] lg:text-[64px] mb-[4px] italic lg:self-start mt-10 ml-10">
            Client&apos;s
          </h1>
          <div className="flex-grow flex justify-center mx-10 lg:mx-20">
            <div className="grid grid-cols-3 md:grid-cols-5 gap-8 place-items-center">
              {imageArray.map((imageSrc, index) => (
                <div
                  key={index}
                  className="relative bg-white w-[130px] h-[130px] lg:w-[180px] lg:h-[180px]"
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

        <div className="w-3/4 m-auto mb-20">
          <div className="mt-20">
            <Slider {...settings}>
              {teamMembers.map((d, index) => (
                <div
                  key={index * 10}
                  className="h-[600px] text-black rounded-xl border "
                >
                  <div className="bg-[#6A397B] rounded-t-xl h-44 flex items-center justify-center">
                    <img src={d.image} alt="image" />
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
