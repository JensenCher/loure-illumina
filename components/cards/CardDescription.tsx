"use client";

import { Character } from "@/types/Character";
import { PortableText } from "@portabletext/react";
import "simplebar-react/dist/simplebar.min.css";
import SimpleBar from "simplebar-react";
import "./DescriptionScroll.css";

interface CardDescriptionProps {
  data: Character;
  height?: number | string;
}

const CardDescription: React.FC<CardDescriptionProps> = ({ data, height = "600px" }) => {
  let pixel_h = `h-[${height}]`;
  pixel_h = `sm:h-[600px]`;
  return (
    <div className="flex items-center justify-center">
      <div key={data._id} className={`py-5 text-black dark:text-white text-justify leading-loose relative ${pixel_h} w-full max-w-[500px]`}>
        <SimpleBar forceVisible="y" autoHide={false} className={`leading-loose ${pixel_h} w-full pr-5`}>
          <PortableText value={data.description} />
        </SimpleBar>
      </div>
    </div>
  );
};

export default CardDescription;
