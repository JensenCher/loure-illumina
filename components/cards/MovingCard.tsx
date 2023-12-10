"use client";

import { Character } from "@/types/Character";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState, MouseEvent } from "react";
import { animated, useSpring } from "react-spring";

interface MovingCardProps {
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
const MovingCard: React.FC<MovingCardProps> = ({ data, navigate = false, width = "20rem", height = "33.5rem", className = "", mgColorDodge = false, children }) => {
  const CardRef = useRef<HTMLDivElement>(null);
  // span left & right & width
  const [spanBounds, setSpanBounds] = useState({} as DOMRect);
  // let spanBounds = { height: 0, width: 0, x: 0, y: 0 } as DOMRect;
  const [isMoving, setIsMoving] = useState(false);
  // const [rotation, setRotation] = useState(0);
  const [translate, setTranslate] = useState([0, 0]);
  const style1 = useSpring({
    display: "inline-block",
    backfaceVisibility: "hidden" as any,
    // transform: isMoving ? `rotate(${rotation}deg)` : `rotate(0deg)`,
    // transform: isMoving ? `translate(30px, 10px)` : `translate(0px, 0px)`,
    transform: isMoving ? `translate(${translate[0] * -1 * 0.05}px, ${translate[1] * -1 * 0.03}px)` : `translate(0px, 0px)`,
    height: height,
    width: width,
    transition: `transform 100ms`,
    config: {
      tension: 100,
      friction: 10,
    },
  });
  const styleBorder = useSpring({
    display: "inline-block",
    backfaceVisibility: "hidden" as any,
    // transform: isMoving ? `rotate(${rotation}deg)` : `rotate(0deg)`,
    // transform: isMoving ? `translate(30px, 10px)` : `translate(0px, 0px)`,
    transform: isMoving ? `translate(${translate[0] * -1 * 0.05}px, ${translate[1] * -1 * 0.03}px)` : `translate(0px, 0px)`,
    transition: `transform 100ms`,
    config: {
      tension: 100,
      friction: 10,
    },
  });
  const style2 = useSpring({
    display: "inline-block",
    backfaceVisibility: "hidden" as any,
    // transform: isMoving ? `rotate(${rotation}deg)` : `rotate(0deg)`,
    transform: isMoving ? `translate(${translate[0] * -1 * 0.08}px, ${translate[1] * -1 * 0.08}px)` : `translate(0px, 0px)`,
    transition: `transform 100ms`,
    config: {
      tension: 100,
      friction: 10,
    },
  });
  const style3 = useSpring({
    display: "inline-block",
    backfaceVisibility: "hidden" as any,
    // transform: isMoving ? `rotate(${rotation}deg)` : `rotate(0deg)`,
    transform: isMoving ? `translate(${translate[0] * -1 * 0.09}px, ${translate[1] * -1 * 0.09}px)` : `translate(0px, 0px)`,
    transition: `transform 100ms`,
    config: {
      tension: 100,
      friction: 10,
    },
  });
  const style4 = useSpring({
    display: "inline-block",
    backfaceVisibility: "hidden" as any,
    // transform: isMoving ? `rotate(${rotation}deg)` : `rotate(0deg)`,
    transform: isMoving ? `translate(${translate[0] * -1 * 0.1}px, ${translate[1] * -1 * 0.1}px)` : `translate(0px, 0px)`,
    transition: `transform 100ms`,
    config: {
      tension: 100,
      friction: 10,
    },
  });
  useEffect(() => {
    if (CardRef.current) {
      // console.log("if CardRef", CardRef.current);
      // spanBounds = CardRef.current.getBoundingClientRect();
      setSpanBounds(CardRef.current.getBoundingClientRect());
    }
  }, [isMoving]);

  const trigger = (e: MouseEvent) => {
    setIsMoving(true);
    // setRotation
    const center = [spanBounds.right - spanBounds.width / 2, spanBounds.bottom - spanBounds.height / 2];
    // console.log("spandBounds", spanBounds);
    let distance_from_center = [e.clientX - center[0], e.clientY - center[1]];
    // let distance_from_center_percentage = [distance_from_center[0] / spanBounds.width, distance_from_center[1] / spanBounds.height];
    // console.log("checking");
    // if (isNaN(distance_from_center[0]) || isNaN(distance_from_center[1]) || distance_from_center_percentage[0] == Infinity || distance_from_center_percentage[1] == Infinity) {
    if (isNaN(distance_from_center[0]) || isNaN(distance_from_center[1])) {
      // isNan == true whenever development hot reload ==> spanBounds is empty {}
      // sometimes the percentage will become Infinity when spanBounds.width/height are 0
      distance_from_center[0] = 0;
      distance_from_center[1] = 0;
      // distance_from_center_percentage[0] = 0;
      // distance_from_center_percentage[1] = 0;
    }
    setTranslate(distance_from_center);
  };
  const resetMovingCard = () => {
    setTranslate([0, 0]);
    setIsMoving(false);
  };
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

  const movingCard = (
    <div className={"relative max-w-xs overflow-hidden rounded-3xl shadow-lg group bg-black " + className}>
      <div className="bg-transparent absolute inset-0 top-0 left-0 z-20 w-full h-full" ref={CardRef} onMouseMove={trigger} onMouseLeave={resetMovingCard}></div>
      <animated.div className={`w-[${width}] h-[${height}]`} style={style1}>
        <Image src={data.bgUrl} fill alt="bg" className="w-full h-full object-contain" sizes={"50vw"} />
      </animated.div>
      <animated.div className={`absolute inset-0 top-0 left-0 w-full h-full`} style={style2}>
        <Image src={data.mgUrl} fill alt="mg" className="w-full h-full object-contain" sizes={"50vw"} />
      </animated.div>
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
          <animated.div
            key={obj.order}
            className={obj.usage && obj.usage.toLowerCase().includes("cd") ? "absolute inset-0 top-0 left-0 mix-blend-color-dodge" : "absolute inset-0 top-0 left-0 w-full h-full"}
            style={styleChosen == 2 ? style2 : styleChosen == 3 ? style3 : style4}
          >
            <Image src={(data as any)[obj.field]} fill alt={obj.usage} className={"w-full h-full object-contain"} sizes={"50vw"} />
          </animated.div>
        );
      })}
      <animated.div className={`absolute top-0 left-0 w-full h-full`} style={styleBorder}>
        <Image src={data.borderUrl} fill alt="border" className="w-full h-full object-contain" sizes={"50vw"} />
      </animated.div>
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
      {movingCard}
    </Link>
  ) : (
    movingCard
  );
};

export default MovingCard;
