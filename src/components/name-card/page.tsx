import { TeamMember } from "@lib/types";
import Image from "next/image";
import React from "react";

interface TeamMemberCardProps {
  member: TeamMember;
}

const NameCard: React.FC<TeamMemberCardProps> = ({ member }) => {
  return (
    <div className="flex flex-row items-center gap-3 p-4 ">
      <div className="relative rounded-full h-24 overflow-hidden w-[6rem]">
        <Image
          src={member.image}
          alt={member.name}
          width={96}
          height={96}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="space-x-6  w-[14.5rem] xs:w-[20rem] sm:w-[24rem] lg:w-[32rem]">
        <p className="ms-6 text-[12px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-medium font-garamond">
          {member.name}
        </p>
        <div className="space-y-1 text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px]  font-garamond">
          <p className="text-start text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] text-pink-600 font-garamond">
            {member.title}
          </p>
          {member.roles.map((role, index) => (
            <p key={index}>{role}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NameCard;
