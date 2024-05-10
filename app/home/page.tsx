import Image from "next/image";
import { getCharacterById, getCharacters } from "@/sanity/sanity-utils";
import Container from "@/components/Container";
import CharacterCard from "@/components/cards/CharacterCard";
import LargeHeading from "@/components/ui/LargeHeading";
import Paragraph from "@/ui/Paragraph";
import MovingCard from "@/components/cards/MovingCard";

export default async function Home() {
  const characters = await getCharacters("order");

  // if (characters.length === 0) {
  //   return (
  //     <ClientOnly>
  //       <EmptyState showReset />
  //     </ClientOnly>
  //   );
  // }

  return (
    <div>
      <div className="w-full justify-center items-center h-fit top-28 hidden md:block md:h-screen md:top-28 md:max-w-3xl md:left-1/2 aspect-square absolute">
        <Image priority className="img-shadow pt-20 md:pt-0" quality={100} style={{ objectFit: "contain" }} fill src="/images/fool.png" alt="fool_banner" />
      </div>
      <div className="relative pt-20 pb-48 md:pb-40 md:top-28 h-[26rem] md:h-screen md:pt-0 flex items-start md:items-center justify-center overflow-x-hidden overflow-y-hidden">
        <div className="container max-w-7xl w-full mx-auto pl-10 pr-10">
          <div className="gap-6 flex flex-col justify-start md:justify-center items-center md:items-start">
            <div className="rounded-2xl md:bg-transparent md:dark:bg-transparent z-10 p-4">
              {/* <LargeHeading size="default" className="three-d font-header md:text-black dark:text-light-gold pb-4">
                Loure Illumina
              </LargeHeading> */}
              <LargeHeading size="default" className="three-d font-header md:text-black dark:text-light-gold pb-4">
                LOURE ILLUMINA
              </LargeHeading>
              <Paragraph className="max-w-xl block md:text-left text-slate-700 dark:text-slate-300">
                Embark on a spiritual voyage guided by angelic forces. This tarot deck intertwines medieval aesthetics with celestial wisdom, offering profound insights and divine
                guidance for seekers of enlightenment.
              </Paragraph>
            </div>
          </div>
        </div>
      </div>
      <Container>
        <div className="p-3 max-w-[1280px] m-auto">
          {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5 place-items-center"> */}
          <div className="flex flex-row flex-wrap gap-5 items-center justify-center">
            {characters.map((character) => {
              return character.charUrl ? (
                <MovingCard data={character} width="250px" height="410px" navigate={true} onImagesLoaded={() => {}}>
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
