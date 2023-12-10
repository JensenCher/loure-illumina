import Container from "@/components/Container";
import { getCharacterBySlug } from "@/sanity/sanity-utils";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import LargeHeading from "@/components/ui/LargeHeading";
import Paragraph from "@/components/ui/Paragraph";
import MovingCard from "@/components/cards/MovingCard";
import CardDescription from "@/components/cards/CardDescription";
import CharacterCard from "@/components/cards/CharacterCard";
// import CharacterCardMoving from "@/components/characters/CharacterCardMoving";

interface IParams {
  characterSlug?: string;
}

const CharacterPage = async ({ params }: { params: IParams }) => {
  const character = await getCharacterBySlug(params.characterSlug as string);
  if (!character) {
    return <Container>Nothing in here</Container>;
  }
  return (
    <Container>
      <div className="relative pt-20 pb-40 md:top-28 md:pt-0 flex items-center justify-center overflow-x-hidden overflow-y-hidden">
        <div className="container max-w-7xl w-full mx-auto pl-10 pr-10 flex flex-col items-center justify-center">
          <LargeHeading size="default" className="three-d font-header md:text-black dark:text-light-gold pb-4 md:text-center tracking-widest">
            {character.title}
          </LargeHeading>
          <Paragraph className="max-w-2xl md:text-center md:text-2xl text-slate-700 dark:text-slate-300">
            {character.name}, {character.race}
          </Paragraph>
          <div className="max-w-[1000px] grid grid-cols-1 md:grid-cols-2 gap-5 pt-0 md:pt-10">
            <div key={character._id} className="flex justify-center items-center pt-5">
              {character.charUrl ? (
                <div>
                  {/* <MovingCard data={character} width="250px" height="410px"></MovingCard> */}
                  <CharacterCard data={character} width="250px" height="410px"></CharacterCard>
                </div>
              ) : character.url ? (
                <Image width={250} height={410} className="object-contain rounded-2xl" alt="Character" src={character.url} />
              ) : (
                <div className="object-cover h-full w-full bg-white group-hover:scale-110 transition" />
              )}
            </div>
            <CardDescription data={character} />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CharacterPage;
