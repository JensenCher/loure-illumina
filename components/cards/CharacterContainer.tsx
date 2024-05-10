"use client";
import CharacterCard from "@/components/cards/CharacterCard";
import WhichCard from "@/components/cards/WhichCard";
import { Character } from "@/types/Character";

interface CharacterContainerProps {
  characters: Character[];
}
const CharacterContainer = ({ characters }: CharacterContainerProps) => {
  return (
    <div className="flex flex-row flex-wrap gap-5 items-center justify-center">
      {characters.map((character, index) => {
        const idx = index + 1;

        if (character.show) {
          return character.charUrl ? (
            <div key={index} className="w-[250px] h-[410px]">
              <WhichCard character={character} navigate={true} index={idx} />
            </div>
          ) : character.url ? (
            <CharacterCard data={character} />
          ) : (
            <div className="object-cover h-full w-full bg-white group-hover:scale-110 transition" />
          );
        }
      })}
    </div>
  );
};

export default CharacterContainer;
