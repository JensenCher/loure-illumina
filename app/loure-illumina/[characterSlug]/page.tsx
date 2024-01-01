import Container from "@/components/Container";
import CardDescription from "@/components/cards/CardDescription";
import WhichCard from "@/components/cards/WhichCard";
import LargeHeading from "@/components/ui/LargeHeading";
import Paragraph from "@/components/ui/Paragraph";
import { getCharacterBySlug } from "@/sanity/sanity-utils";
import Image from "next/image";

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
          <div className="w-full max-w-[1000px] grid grid-cols-1 md:grid-cols-2 gap-5 pt-0 md:pt-10">
            <div key={character._id} className="flex justify-center items-center pt-5">
              {character.charUrl ? (
                <div>
                  <WhichCard character={character} />
                </div>
              ) : character.url ? (
                <Image width={250} height={410} className="object-contain rounded-2xl" alt="Character" src={character.url} />
              ) : (
                <div className="object-cover h-full w-full bg-white group-hover:scale-110 transition" />
              )}
            </div>
            <div className="flex flex-col gap-10 w-full">
              <CardDescription data={character} />
              <div className="mt-5 flex flex-col gap-1 w-full text-black dark:text-white">
                <div className="flex flex-row flex-wrap gap-3">
                  <h3>Written By:</h3>
                  <span>{character.writtenBy && character.writtenBy.join(", ")}</span>
                </div>
                <div className="flex flex-row flex-wrap gap-3">
                  <h3>Edited By:</h3>
                  <span>{character.editedBy && character.editedBy.join(", ")}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CharacterPage;
