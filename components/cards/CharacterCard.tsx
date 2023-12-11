"use client";

import { Character } from "@/types/Character";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState, MouseEvent } from "react";
import { useSpring } from "react-spring";

interface CharacterCardProps {
  data: Character;
  navigate?: Boolean;
  className?: string;
  width?: string;
  height?: string;
  children?: React.ReactNode;
  mgColorDodge?: Boolean;
}

interface cardDivObjProps {
  field: string;
  chOrder: number;
  order: number;
  chName: string;
  usage: string;
}

// Card Dimensions 2691 / 4491 fraction
const CharacterCard: React.FC<CharacterCardProps> = ({ data, navigate = false, width = "20rem", height = "33.5rem", className = "", mgColorDodge = false, children }) => {
  // const dim = ["24rem", "36.5rem"];

  const fields = ["mgUrl", "chColorDodgeUrl", "charUrl", "colorDodge2Url", "colorDodge1Url", "fgUrl"];
  let cardDivObjs = [] as cardDivObjProps[];
  fields.map((field: string) => {
    if ((data as any)[field] as any) {
      let [chOrder, order, chName, usage] = (data as any)[field].split("/").pop().split(".")[0].split("_");
      const cardDivObj: cardDivObjProps = {
        field: field,
        chOrder: parseInt(chOrder),
        order: parseInt(order),
        chName: chName,
        usage: usage,
      };
      cardDivObjs.push(cardDivObj);
    }
  });
  cardDivObjs.sort((a, b) => b.order - a.order);
  let cdStyle = 0;
  let curStyle = 2;
  let change = false;
  const twWidth = `w-[250px]`;
  const twHeight = `h-[410px]`;

  const characterCard = (
    <div className={"relative max-w-xs overflow-hidden rounded-3xl shadow-lg group bg-black " + className}>
      <div className={`${twWidth} ${twHeight}`}>
        <Image src={data.bgUrl} fill alt="bg" className="w-full h-full object-contain" sizes={"50vw"} />
      </div>
      <div className={`absolute inset-0 top-0 left-0 w-full h-full`}>
        <Image src={data.mgUrl} fill alt="mg" className="w-full h-full object-contain" sizes={"50vw"} />
      </div>
      {cardDivObjs.map((obj) => {
        let styleChosen = null;
        if (obj.usage && obj.usage.toLowerCase().includes("cd")) {
          if (cdStyle == 0) {
            cdStyle = curStyle;
            change = true;
            styleChosen = cdStyle;
          }
        } else {
          if (change) {
            curStyle += 1;
            change = false;
          }
          styleChosen = curStyle;
        }
        return (
          <div
            key={obj.order}
            className={obj.usage && obj.usage.toLowerCase().includes("cd") ? "absolute inset-0 top-0 left-0 mix-blend-color-dodge" : "absolute inset-0 top-0 left-0 w-full h-full"}
          >
            <Image src={(data as any)[obj.field]} fill alt={obj.usage} className={"w-full h-full object-contain"} sizes={"50vw"} />
          </div>
        );
      })}
      <div className={`absolute top-0 left-0 w-full h-full`}>
        <Image src={data.borderUrl} fill alt="border" className="w-full h-full object-contain" sizes={"50vw"} />
      </div>
      {navigate ? (
        <div
          className="h-14 bottom-0 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition duration-300
                absolute w-full bg-opacity-5 bg-gradient-to-t from-black 
                 rounded drop-shadow-lg 
                text-white p-5 flex justify-between
            "
        >
          <div className="absolute bottom-0 pb-4 group-hover">
            <div className="font-semibold text-lg px-1">
              <span className="font-header">{data?.name}</span>
              <span className="block text-sm">{data?.title}</span>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );

  return navigate ? (
    <Link href={`/${data.category.slug}/${data.slug}`} className="block col-span-1 cursor-pointer group" title={data.title}>
      {characterCard}
    </Link>
  ) : (
    characterCard
  );
};

export default CharacterCard;
