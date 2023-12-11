"use client";

import useWindowSize from "@/hooks/useWindowSize";
import { Character } from "@/types/Character";
import React from "react";
import MovingCard from "./MovingCard";
import CharacterCard from "./CharacterCard";

interface CharacterCardProps {
  character: Character;
}
const WhichCard: React.FC<CharacterCardProps> = ({ character }) => {
  const windowSize = useWindowSize();
  return (
    <div>
      {windowSize.width && windowSize.width >= 1280 ? (
        <MovingCard data={character} width="250px" height="410px"></MovingCard>
      ) : (
        <CharacterCard data={character} width="250px" height="410px"></CharacterCard>
      )}
    </div>
  );
};

export default WhichCard;
