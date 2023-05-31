import Container from "@/components/Container";
import { getCharacterBySlug } from "@/sanity/sanity-utils";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import LargeHeading from "@/components/ui/LargeHeading";
import Paragraph from "@/components/ui/Paragraph";
import MovingCard from "@/components/characters/MovingCard";
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
          <Paragraph className="max-w-2xl md:text-center md:text-2xl text-slate-300 md:text-slate-700 md:dark:text-slate-300">
            {character.name}, {character.race}
          </Paragraph>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-10">
            <div key={character._id} className="flex justify-center py-5">
              {character.charUrl ? (
                <div>
                  {/* 320px 536px */}
                  <MovingCard data={character} width="250px" height="410px">
                    <h3 className="font-bold text-lg">Hello title</h3>
                    <p className="text-base">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur non explicabo nulla odit ex temporibus soluta eum repudiandae quis? Ipsam?
                    </p>
                  </MovingCard>
                </div>
              ) : character.url ? (
                <Image width={375} height={500} className="object-contain rounded-2xl" alt="Character" src={character.url} />
              ) : (
                <div className="object-cover h-full w-full bg-white group-hover:scale-110 transition" />
              )}
              {/* <Image /> */}
              {/* {character.name}{" "} */}
            </div>
            <div className="py-5 text-black dark:text-white">
              <PortableText value={character.description} />
            </div>
          </div>
          {/* <CharacterCardMoving /> */}
        </div>
      </div>
    </Container>
  );
};

export default CharacterPage;