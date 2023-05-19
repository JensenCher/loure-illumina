"use client";

import React from "react";
import { animated, useSpring } from "react-spring";

interface BoopProps {
  rotation?: number;
  timing?: number;
  tension?: number;
  friction?: number;
  children: React.ReactNode;
}

const Boop: React.FC<BoopProps> = ({ rotation = 0, timing = 150, tension = 300, friction = 10, children }) => {
  const [isBooped, setIsBooped] = React.useState(false);
  // const style = {
  //   display: 'inline-block',
  //   backfaceVisibility: 'hidden',
  //   transform: isBooped
  //     ? `rotate(${rotation}deg)`
  //     : `rotate(0deg)`,
  //   transition: `transform ${timing}ms`,
  // };
  const style = useSpring({
    display: "inline-block",
    backfaceVisibility: "hidden" as any,
    transform: isBooped ? `rotate(${rotation}deg)` : `rotate(0deg)`,
    config: {
      tension: 300,
      friction: 10,
    },
  });

  React.useEffect(() => {
    if (!isBooped) {
      return;
    }
    const timeoutId = window.setTimeout(() => {
      setIsBooped(false);
    }, timing);
    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [isBooped, timing]);
  const trigger = () => {
    setIsBooped(true);
  };
  return (
    //   <span onMouseEnter={trigger} style={style as React.CSSProperties}>
    //     {children}
    //   </span>
    <animated.span onMouseEnter={trigger} style={style}>
      {children}
    </animated.span>
  );
};

export default Boop;
