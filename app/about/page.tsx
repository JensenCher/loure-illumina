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

export default async function About() {
  // const characters = await getCharacters();

  return (
    <ClientOnly>
      <div className="relative pt-20 pb-10 md:pb-40 md:top-28 md:pt-0 flex items-center justify-center overflow-x-hidden overflow-y-hidden">
        <div className="container max-w-7xl w-full mx-auto px-10 pt-5 md:pt-0">
          <div className="gap-6 flex flex-col justify-start md:justify-center items-center ">
            <div className="rounded-2xl md:bg-transparent md:dark:bg-transparent z-10 p-4">
              <LargeHeading size="default" className="three-d font-header md:text-black dark:text-light-gold pb-4 md:text-center">
                <span className="text-2xl md:text-4xl">ABOUT</span>
                <span className="block ">LOURE ILLUMINA</span>
                <span className="text-sm md:text-xl font-body tracking-normal text-slate-400">A World of Adventures and Mysteries Await</span>
              </LargeHeading>
              <Paragraph className="max-w-4xl text-left dark:text-slate-300 text-slate-900">
                <p className="indent-8 leading-8">
                  In the enchanting realm of Loure Illumina, a mystical land veiled in ancient secrets and untold wonders, a diverse cast of Tarot card characters embarks on
                  thrilling adventures that blend the elements of teamwork, lone wolf pursuits, and the pursuit of love. Each journey unfolds with a unique blend of sadness,
                  challenges, and unexpected encounters, all leading to an immersive experience that captivates players.
                </p>

                <p className="indent-8 leading-8">
                  Among the heroes who tread upon the hallowed grounds of Loure Illumina is The Chariot, a noble knight known for their unwavering courage and chivalry. They
                  venture forth, driven by a quest to recover a lost artifact, facing perilous trials and fierce adversaries. Along their path, they encounter The Magician, a
                  cunning and mysterious rogue who harbors secrets of their own. Reluctantly, they form an unlikely alliance, their strengths complementing each other as they
                  navigate treacherous terrains and face daunting foes.
                </p>
                <p className="indent-8 leading-8">
                  Meanwhile, deep within the mystical forests, The High Priestess weaves her spells in solitude. Her quest for forbidden knowledge leads her to confront ancient
                  riddles and decipher cryptic prophecies. Often a lone wolf, she delves into forbidden realms where others fear to tread, harnessing her powers to unravel the
                  secrets of the past, present, and future.{" "}
                </p>
                <p className="indent-8 leading-8">
                  Amidst the grand tapestry of Loure Illumina's adventures, a tale of forbidden love unfolds. In a chance encounter, The Lovers cross paths with The Empress, an
                  ethereal enchantress. Bound by duty and divided by their respective allegiances, they embark on a star-crossed journey, yearning for a love that defies the
                  boundaries of their world. Their paths intertwine in unexpected ways, testing their resolve and commitment to their cause.
                </p>
                <p className="indent-8 leading-8">
                  With each adventure, the characters of Loure Illumina face not only external trials but also inner conflicts, forcing them to confront their deepest fears,
                  insecurities, and desires. They discover that their true strengths lie not only in their individual abilities but also in the power of collaboration and the bonds
                  they forge along their quests.{" "}
                </p>
                <p className="indent-8 leading-8">
                  As players delve deeper into the realm of Loure Illumina, an ancient prophecy is unveiled, hinting at a gathering storm. The fate of the land hangs in the
                  balance, and the characters find themselves drawn into a web of destiny. They must unravel the mysteries of a forgotten realm, where hidden truths and
                  unimaginable powers await those who dare to seek them.{" "}
                </p>
                <p className="indent-8 leading-8">
                  In this world of adventure and mystery, players are invited to explore the vast landscapes of Loure Illumina, uncover hidden secrets, and forge their own path.
                  The choices they make and the alliances they form will shape their characters' destinies and determine the ultimate fate of Loure Illumina itself. Prepare to
                  embark on a journey where love, danger, and the thrill of discovery intertwine in this immersive and captivating experience. The realm of Loure Illumina beckons
                  you to unveil its secrets.
                </p>
              </Paragraph>
            </div>
          </div>
        </div>
      </div>
      <Container>
        <div className="p-3 max-w-[1536px] m-auto"></div>
      </Container>
    </ClientOnly>
  );
}
