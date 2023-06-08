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
  return (
    <div key={data._id} className={`py-5 text-black dark:text-white leading-loose relative ${pixel_h} w-[300px] md:w-[500px]`}>
      <SimpleBar forceVisible="y" autoHide={false} className={`leading-loose ${pixel_h} pr-5`}>
        <PortableText value={data.description} />
      </SimpleBar>
    </div>
  );
};

export default CardDescription;
