import React from "react";
import placeholderImg from "/public/images/placeholder.png";
import Image from "next/image";
import { text } from "stream/consumers";

interface CardProps {
  img: string; // Specifies that `img` should be a string
  text: string;
}

const Card: React.FC<CardProps> = ({ img, text = "" }) => {
  return (
    <div className="w-full h-full max-w-md rounded-lg overflow-hidden shadow-lg min-h-[12rem] lg:min-h-[16rem]">
      <Image
        src={img}
        alt="Cover Image"
        width={261}
        height={182}
        className="w-full h-[70%] object-cover"
      />
      {/* <div className="p-4 flex justify-center items-center gap-6">
        <div className="flex flex-col items-center">
          <RocketIcon className="w-8 h-8 text-primary" />
          
        </div>
        <div className="flex flex-col items-center">
          <BriefcaseIcon className="w-8 h-8 text-primary" />
          
        </div>
        <div className="flex flex-col items-center">
          <BoltIcon className="w-8 h-8 text-primary" />
          
        </div>
      </div> */}
      <div className="p-4 text-center">
        <p className="text-muted-foreground text-[18.34px] lg:text-[23px]">
          {text}
        </p>
      </div>
    </div>
  );
};

export default Card;

const BoltIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <circle cx="12" cy="12" r="4" />
    </svg>
  );
};

const BriefcaseIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>
  );
};

const RocketIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  );
};
