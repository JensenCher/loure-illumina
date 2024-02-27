import Container from "@/components/Container";
import CardDescription from "@/components/cards/CardDescription";
import WhichCard from "@/components/cards/WhichCard";
import LargeHeading from "@/components/ui/LargeHeading";
import Paragraph from "@/components/ui/Paragraph";
import { convertToRoman } from "@/lib/utils";
import { getCharacterBySlug, prevNextCharacterByOrder } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";

interface IParams {
  characterSlug?: string;
}

const CharacterPage = async ({ params }: { params: IParams }) => {
  const character = await getCharacterBySlug(params.characterSlug as string);
  let prevChar = null;
  let nextChar = null;
  if (params.characterSlug) {
    const characterOrder = params.characterSlug.split("-")[0];
    const prevNextCharacters = await prevNextCharacterByOrder(characterOrder);

    if (prevNextCharacters.length == 2) {
      [prevChar, nextChar] = prevNextCharacters;
    } else {
      const returnChar = prevNextCharacters[0];
      if (returnChar.order > parseInt(characterOrder)) {
        nextChar = returnChar;
      } else {
        prevChar = returnChar;
      }
    }
  }

  if (!character) {
    return <Container>Nothing in here</Container>;
  }

  const aspectRatio = `aspect-[250/410]`;
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
          <div className="w-full max-w-[1000px] grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-16 pt-0 md:pt-10">
            <div key={character._id} className="flex justify-center items-center pt-5">
              {character.charUrl ? (
                <div className="w-full h-full">
                  <WhichCard character={character} />
                </div>
              ) : character.url ? (
                <Image className={`w-full h-full ${aspectRatio} object-contain rounded-2xl`} fill alt="Character" src={character.url} />
              ) : (
                <div className="object-cover h-full w-full bg-white group-hover:scale-110 transition" />
              )}
            </div>
            <div className="flex flex-col gap-10 w-full">
              <CardDescription data={character} />
              <div className="flex items-center justify-center w-full mt-5 border-t-2 border-t-slate-300 dark:border-t-slate-600">
                <div className="mt-5 flex flex-col gap-1 w-full text-black dark:text-white max-w-[500px]">
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
          <div className="mt-20 w-full max-w-[1000px] grid grid-cols-1 md:grid-cols-2 gap-5 pt-0 md:pt-10">
            <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                {prevChar && (
                  <Link
                    href={`/loure-illumina/${prevChar.slug}`}
                    className="w-fit text-xl p-3 flex items-center justify-start flex-shrink-0 gap-3 group transition text-slate-700 dark:text-slate-400 hover:text-black hover:dark:text-white duration-300"
                  >
                    <span className="group-hover:-translate-x-1 duration-300 transition-transform text-3xl">&larr;</span> <span className="tracking-wide">{prevChar.title}</span>
                  </Link>
                )}
              </div>
              <div className="flex justify-end">
                {nextChar && (
                  <Link
                    href={`/loure-illumina/${nextChar.slug}`}
                    className="w-fit text-xl p-3 flex items-center justify-end flex-shrink-0 gap-3 group text-slate-700 dark:text-slate-400 hover:text-black hover:dark:text-white duration-300"
                  >
                    <span className="tracking-wide">{nextChar.title}</span> <span className="group-hover:translate-x-1 duration-300 transition-transform text-3xl">&rarr;</span>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CharacterPage;
