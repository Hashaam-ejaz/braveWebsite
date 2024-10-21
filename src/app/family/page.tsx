"use client";
import Image from "next/image";
import { teamMembers } from "@lib/contants";
import family1 from "@assets/images/family.webp";
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

        <section className="px-4 py-16">
          <h2 className="text-[64px] text-center mb-12 font-garamond italic hidden lg:block">
            Clients
          </h2>
          <h2 className="text-[20px] text-center mb-12 font-garamond italic lg:hidden">
            Our Client&apos;s footprint
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
          </div>
        </section>

        <section className="relative w-full h-[100vh] overflow-hidden">
          <Image
            src={family11}
            alt="Hero Image"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-10 flex items-center justify-center w-full h-full  sm:pl-1 md:pl-2 lg:pl-10">
            <div className="flex flex-col">
              <h1 className="text-center text-white text-[15px] md:text-[36px] lg:text-[48px] font-garamond">
                Driven by our Purpose
              </h1>
              <h1 className="text-center text-white text-[15px] md:text-[36px] lg:text-[48px] font-garamond italic">
                Building Stronger Brands
              </h1>
            </div>
          </div>
        </section>
        <h2 className="text-[64px] text-center mt-12 font-garamond italic hidden lg:block">
          Team
        </h2>

        <div className="w-3/4 m-auto mb-20">
          <div className="mt-20">
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
