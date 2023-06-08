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
import CardSquare from "@/components/cards/CardSquare";

export default async function Team() {
  // const characters = await getCharacters();

  const teamMembers = [
    {
      name: "Ariel Ramsey Poh",
      title: "Main Artist",
      image: null,
    },
    {
      name: "Marcus",
      title: "Storyboard Designer",
      image: null,
    },
    {
      name: "Darren Chang",
      title: "Storyboard, Designer",
      image: null,
    },
    {
      name: "Jensen Cher",
      title: "Web Designer",
      image: null,
    },
  ];

  return (
    <ClientOnly>
      <div className="relative pt-20 pb-10 md:pb-40 md:top-28 md:pt-0 flex items-center justify-center overflow-x-hidden overflow-y-hidden">
        <div className="container max-w-7xl w-full mx-auto px-10 pt-5 md:pt-0">
          <div className="gap-6 flex flex-col justify-start md:justify-center items-center ">
            <div className="rounded-2xl md:bg-transparent md:dark:bg-transparent z-10 p-4">
              <LargeHeading size="default" className="three-d font-header md:text-black dark:text-light-gold pb-4 md:text-left">
                <span className="tracking-normal">Our Core Team</span>
              </LargeHeading>
              <Paragraph className="max-w-4xl text-left text-xs md:text-base text-slate-700 dark:text-slate-300">
                <p className="leading-6 py-3">
                  In the mystical realm of Loure Illumina, a dedicated team of talented individuals comes together to breathe life into this extraordinary project. Led by the Main
                  Artist, our collective efforts shape the visual landscape of the game, infusing it with awe-inspiring beauty and captivating Tarot card illustrations.
                </p>
                <div className="py-5">
                  <div className="border-t border-gray-400"></div>
                </div>
                <p className="leading-6 py-3">
                  Under the leadership of the Main Artist - <span className="font-bold">Ariel Ramsey Poh</span>, our determined team is responsible for shaping the visual landscape
                  and narrative of Loure Illumina. A dedicated team led by the Main Artist - <span className="font-bold">Ariel Ramsey Poh</span>, shapes the visual landscape and
                  narrative of Loure Illumina. With awe-inspiring beauty, captivating Tarot card illustrations, and intricate storylines, we create an immersive experience.
                  Supported by our Storyboard Designers -<span className="font-bold">Marcus & Darren</span>, and our Web Designer - <span className="font-bold">Jensen</span>, the
                  team's collective efforts bring forth a visually stunning world.
                </p>
                <p className="leading-6 py-3">
                  Loure Illumina is an invitation to appreciate the artistic brilliance we've collectively poured into this project and embark on an enthralling journey of
                  exploration.
                </p>
                <p className="leading-6 py-3">
                  As a team, we have invested countless hours and poured our hearts and souls into building Loure Illumina. Our shared passion for creating extraordinary Tarot
                  cards shines through in every stroke of the brush, every line of code, and every narrative twist. We strive to deliver a visual masterpiece that resonates with
                  players, evoking a sense of awe and admiration.
                </p>
                <p className="leading-6 py-3">
                  Our dedication to excellence is evident in the exceptional quality of the Tarot cards we have meticulously crafted. We yearn for players to experience the joy and
                  wonder we felt while creating these masterpieces, each one a testament to our talent and dedication.
                </p>{" "}
                <p className="leading-6 py-3">
                  We eagerly awaits the moment when players will hold the Loure Illumina Tarot deck in our hands, marveling at the awe-inspiring beauty within. The Tarot cards we
                  have painstakingly designed are destined to be admired, treasured, and cherished by all who embark on this enchanting journey.
                </p>{" "}
                <p className="leading-6 py-3">
                  As the project nears completion, our excitement grows, knowing that our collective efforts will soon be revealed to the world. Loure Illumina beckons, ready to
                  captivate and inspire players with its extraordinary Tarot cards. Brace yourself for an experience like no other, as you witness the culmination of the team's
                  hard work, dedication, and unwavering passion.
                </p>
                <div className="relative flex py-5 items-center">
                  <div className="flex-grow border-t border-slate-400"></div>
                  <span className="flex-shrink mx-4 text-slate-400">The Team</span>
                  <div className="flex-grow border-t border-slate-400"></div>
                </div>
                <div className="w-full px-0 md:px-5">
                  <div className="flex flex-row flex-wrap items-center justify-center gap-3 sm:gap-10">
                    {teamMembers.map((mem, index) => (
                      <CardSquare key={index} data={mem} />
                    ))}
                  </div>
                </div>
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
