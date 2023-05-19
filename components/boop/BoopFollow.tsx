"use client";

import { MouseEvent, useEffect, useRef, useState } from "react";
import { animated, useSpring } from "react-spring";

interface BoopFollowProps {
  rotation?: number;
  timing?: number;
  children: React.ReactNode;
}

const BoopFollow: React.FC<BoopFollowProps> = ({ timing = 150, children }) => {
  const BoopFollowRef = useRef<HTMLSpanElement>(null);
  // span left & right & width
  // let spanBounds = {} as DOMRect;

  const [spanBounds, setSpanBounds] = useState({} as DOMRect);
  const [isBooped, setIsBooped] = useState(false);
  const [rotation, setRotation] = useState(0);
  const style = useSpring({
    display: "inline-block",
    backfaceVisibility: "hidden" as any,
    transform: isBooped ? `rotate(${rotation}deg)` : `rotate(0deg)`,
    transition: `transform ${timing}ms`,
    config: {
      tension: 300,
      friction: 3,
    },
  });
  useEffect(() => {
    if (BoopFollowRef.current) {
      setSpanBounds(BoopFollowRef.current.getBoundingClientRect());
    }
  }, [BoopFollowRef, isBooped, rotation]);

  const trigger = (e: MouseEvent<HTMLButtonElement>) => {
    setIsBooped(true);
    // setRotation
    const center = spanBounds.right - spanBounds.width / 2;
    let distance_from_center_percentage = (e.clientX - center) / spanBounds.width;
    if (isNaN(distance_from_center_percentage)) {
      // isNan == true whenever development hot reload ==> spanBounds is empty {}
      distance_from_center_percentage = 0;
    }
    setRotation(Math.ceil(80 * distance_from_center_percentage));
  };
  const resetBoop = () => {
    setRotation(0);
    setIsBooped(false);
  };
  return (
    <animated.span ref={BoopFollowRef} onMouseMove={trigger} onMouseLeave={resetBoop} style={style}>
      {children}
    </animated.span>
  );
};

export default BoopFollow;
