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
    <div>
      {windowSize.width && windowSize.width >= 1280 ? (
        <>
          <MovingCard data={character} width="250px" height="410px" onImagesLoaded={handleImagesLoaded} navigate={navigate}></MovingCard>
          {allImagesLoaded ? <></> : <div className="w-[250px] h-[410px] bg-black rounded-3xl overflow-hidden"></div>}
        </>
      ) : (
        <CharacterCard data={character} width="250px" height="410px" navigate={navigate}></CharacterCard>
      )}
    </div>
  );
};

export default WhichCard;
