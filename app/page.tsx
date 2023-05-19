import Image from "next/image";
import { Inter } from "next/font/google";
import { getProjectById, getProjects } from "@/sanity/sanity-utils";
import ClientOnly from "@/components/ClientOnly";
import Container from "@/components/Container";
import EmptyState from "@/components/EmptyState";
import ProjectCard from "@/components/projects/ProjectCard";
import LargeHeading from "@/components/ui/LargeHeading";
import Paragraph from "@/ui/Paragraph";

const inter = Inter({ subsets: ["latin"] });

export default async function Home() {
  const projects = await getProjects();

  if (projects.length === 0) {
    return (
      <ClientOnly>
        <EmptyState showReset />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <div className="w-full justify-center items-center h-screen -top-48 sm:top-0 lg:max-w-3xl lg:left-1/2 aspect-square absolute">
        <Image priority className="img-shadow pt-20 lg:pt-0" quality={100} style={{ objectFit: "contain" }} fill src="/images/fool.png" alt="fool_banner" />
      </div>
      <div className="relative pt-20 pb-40 sm:h-screen sm:pt-0 flex items-center justify-center overflow-x-hidden overflow-y-hidden">
        <div className="container max-w-7xl w-full mx-auto pl-10 pr-10">
          <div className="gap-6 flex flex-col justify-start lg:justify-center items-center lg:items-start">
            <div className="bg-slate-950/60 dark:bg-slate-100/10 rounded-2xl sm:bg-transparent sm:dark:bg-transparent z-10 p-4">
              <LargeHeading size="lg" className="three-d  sm:text-black sm:dark:text-light-gold pb-4">
                Loure Illumina
              </LargeHeading>
              <Paragraph className="max-w-xl lg:text-left text-slate-300 sm:text-slate-700 sm:dark:text-slate-300">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-5 place-items-center">
            {projects.map((project) => (
              <ProjectCard key={project._id} data={project} disabled={project.url ? true : false} />
            ))}
            {projects.map((project) => (
              <ProjectCard key={project._id} data={project} disabled={project.url ? true : false} />
            ))}
          </div>
        </div>
        <div className="h-96 bg-orange-500"></div>
        <div className="h-96 bg-purple-500"></div>
      </Container>
    </ClientOnly>
  );
}
