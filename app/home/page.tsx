import Image from "next/image";
import { getCharacterById, getCharacters } from "@/sanity/sanity-utils";
import ClientOnly from "@/components/ClientOnly";
import Container from "@/components/Container";
import EmptyState from "@/components/EmptyState";
import CharacterCard from "@/components/characters/CharacterCard";
import LargeHeading from "@/components/ui/LargeHeading";
import Paragraph from "@/ui/Paragraph";
import MovingCard from "@/components/characters/MovingCard";
import Link from "next/link";

export default async function Home() {
  const characters = await getCharacters();

  // if (characters.length === 0) {
  //   return (
  //     <ClientOnly>
  //       <EmptyState showReset />
  //     </ClientOnly>
  //   );
  // }

  return (
    <ClientOnly>
      <div className="w-full justify-center items-center h-screen top-0 md:top-28 md:max-w-3xl md:left-1/2 aspect-square absolute">
        <Image priority className="img-shadow pt-20 md:pt-0" quality={100} style={{ objectFit: "contain" }} fill src="/images/fool.png" alt="fool_banner" />
      </div>
      <div className="relative pt-20 pb-40 md:top-28 md:h-screen md:pt-0 flex items-center justify-center overflow-x-hidden overflow-y-hidden">
        <div className="container max-w-7xl w-full mx-auto pl-10 pr-10">
          <div className="gap-6 flex flex-col justify-start md:justify-center items-center md:items-start">
            <div className="bg-slate-950/60 dark:bg-slate-100/10 rounded-2xl md:bg-transparent md:dark:bg-transparent z-10 p-4">
              <LargeHeading size="default" className="three-d font-header md:text-black md:dark:text-light-gold pb-4">
                Loure Illumina
              </LargeHeading>
              <Paragraph className="max-w-xl md:text-left text-slate-300 md:text-slate-700 md:dark:text-slate-300">
                In the mystical land of Aradon, a captivating card game known as "Legends of Fate" transports players into a medieval adventure. Valiant warriors, skilled archers,
                and mystic enchanters clash in epic battles against monstrous creatures and cunning villains. With strategic mastery and a dash of luck, heroes rise, alliances
                form, and legends are forged in this thrilling medieval card game of destiny.
              </Paragraph>
            </div>
          </div>
        </div>
      </div>
      <Container>
        <div className="p-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5 place-items-center">
            {characters.map((character) => {
              return character.charUrl ? (
                <MovingCard data={character} width="250px" height="410px" navigate={true}>
                  <h3 className="font-bold text-lg">Hello title</h3>
                  <p className="text-base">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur non explicabo nulla odit ex temporibus soluta eum repudiandae quis? Ipsam?
                  </p>
                </MovingCard>
              ) : character.url ? (
                <Link href={`/${character.category.slug}/${character.slug}`} className="block col-span-1 cursor-pointer group" title={character.title}>
                  <Image width={250} height={410} className="object-fill rounded-2xl" alt="Character" src={character.url} />
                </Link>
              ) : (
                <div className="object-cover h-full w-full bg-white group-hover:scale-110 transition" />
              );
            })}
          </div>
        </div>
      </Container>
    </ClientOnly>
  );
}
