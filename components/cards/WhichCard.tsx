"use client";

import useWindowSize from "@/hooks/useWindowSize";
import { Character } from "@/types/Character";
import React, { useState } from "react";
import MovingCard from "./MovingCard";
import CharacterCard from "./CharacterCard";

interface CharacterCardProps {
  character: Character;
  navigate?: boolean;
}
const WhichCard: React.FC<CharacterCardProps> = ({ character, navigate = false }) => {
  const windowSize = useWindowSize();

  const [allImagesLoaded, setAllImagesLoaded] = useState(false);

  const handleImagesLoaded = () => {
    setAllImagesLoaded(true);
  };
  return (
    <div className="flex items-center justify-center w-full h-full">
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
    </div>
  );
};

export default WhichCard;
