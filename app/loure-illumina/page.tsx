import Image from "next/image";
import { getCharacters } from "@/sanity/sanity-utils";
import ClientOnly from "@/components/ClientOnly";
import Container from "@/components/Container";
import EmptyState from "@/components/EmptyState";
import CharacterCard from "@/components/cards/CharacterCard";
import LargeHeading from "@/components/ui/LargeHeading";
import Paragraph from "@/ui/Paragraph";
import Nav from "@/components/navbar/Nav";
import MovingCard from "@/components/cards/MovingCard";
import Link from "next/link";

export default async function TarotAngelusHome() {
  const characters = await getCharacters("title");

  // if (characters.length === 0) {
  //   return (
  //     <ClientOnly>
  //       <EmptyState showReset />
  //     </ClientOnly>
  //   );
  // }

  return (
    <div>
      <div className="relative pt-20 pb-10 md:pb-40 md:top-28 md:pt-0 flex items-center justify-center overflow-x-hidden overflow-y-hidden">
        <div className="container max-w-7xl w-full mx-auto px-10 pt-5 md:pt-0">
          <div className="gap-6 flex flex-col justify-start md:justify-center items-center ">
            <div className="rounded-2xl md:bg-transparent md:dark:bg-transparent z-10 p-4">
              <LargeHeading size="default" className="three-d font-header md:text-black dark:text-light-gold pb-4 md:text-center">
                LOURE ILLUMINA
              </LargeHeading>
              <Paragraph className="max-w-2xl md:text-center text-slate-700 dark:text-slate-300">
                Embark on a spiritual voyage guided by angelic forces. This tarot deck intertwines medieval aesthetics with celestial wisdom, offering profound insights and divine
                guidance for seekers of enlightenment.
              </Paragraph>
            </div>
          </div>
        </div>
      </div>
      <Container>
        <div className="p-3 max-w-[1280px] m-auto">
          {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 place-items-center"> */}
          <div className="flex flex-row flex-wrap gap-5 items-center justify-center">
            {characters.map((character) => {
              return character.charUrl ? (
                <MovingCard data={character} width="250px" height="410px" navigate={true}>
                  <h3 className="font-bold text-lg">Hello title</h3>
                  <p className="text-base">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur non explicabo nulla odit ex temporibus soluta eum repudiandae quis? Ipsam?
                  </p>
                </MovingCard>
              ) : character.url ? (
                // <Link href={`/${character.category.slug}/${character.slug}`} className="block col-span-1 cursor-pointer group" title={character.title}>
                //   <Image width={250} height={410} className="object-fill rounded-2xl" alt="Character" src={character.url} />
                // </Link>
                <CharacterCard data={character} />
              ) : (
                <div className="object-cover h-full w-full bg-white group-hover:scale-110 transition" />
              );
            })}
          </div>
        </div>
      </Container>
    </div>
  );
}
