"use client";

import useWindowSize from "@/hooks/useWindowSize";
import { Character } from "@/types/Character";
import React, { useState } from "react";
import MovingCard from "./MovingCard";
import CharacterCard from "./CharacterCard";
import { motion } from "framer-motion";

interface CharacterCardProps {
  character: Character;
  navigate?: boolean;
  index?: number;
}
const WhichCard: React.FC<CharacterCardProps> = ({ character, navigate = false, index = null }) => {
  const windowSize = useWindowSize();

  const [allImagesLoaded, setAllImagesLoaded] = useState(false);

  const handleImagesLoaded = () => {
    setAllImagesLoaded(true);
  };
  return (
    <motion.div
      className="flex items-center justify-center w-full h-full"
      initial={{
        opacity: 0,
        translateY: -10,
      }}
      animate={{
        opacity: 100,
        translateY: 0,
      }}
      transition={{
        duration: 0.5,
        delay: index !== null ? Math.ceil(index / 4) * 0.25 + 0.5 : 0,
      }}
    >
      <div className="flex items-center justify-center w-full h-fit">
        {windowSize.width && windowSize.width >= 768 ? (
          <>
            <MovingCard data={character} width="100%" height="100%" onImagesLoaded={handleImagesLoaded} navigate={navigate}></MovingCard>
            {allImagesLoaded ? <></> : <div className="w-[100%] h-[100%] rounded-3xl overflow-hidden"></div>}
          </>
        ) : (
          <CharacterCard data={character} width="100%" height="100%" navigate={navigate}></CharacterCard>
        )}
      </div>
    </motion.div>
  );
};

export default WhichCard;
