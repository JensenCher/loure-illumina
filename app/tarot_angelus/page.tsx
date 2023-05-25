import Image from "next/image";
import { getProjectById, getProjects } from "@/sanity/sanity-utils";
import ClientOnly from "@/components/ClientOnly";
import Container from "@/components/Container";
import EmptyState from "@/components/EmptyState";
import ProjectCard from "@/components/projects/ProjectCard";
import LargeHeading from "@/components/ui/LargeHeading";
import Paragraph from "@/ui/Paragraph";
import Nav from "@/components/navbar/Nav";

export default async function TarotAngelusHome() {
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
      <div className="relative pt-20 pb-40 md:top-28 md:pt-0 flex items-center justify-center overflow-x-hidden overflow-y-hidden">
        <div className="container max-w-7xl w-full mx-auto pl-10 pr-10">
          <div className="gap-6 flex flex-col justify-start md:justify-center items-center ">
            <div className="bg-slate-950/60 dark:bg-slate-100/10 rounded-2xl md:bg-transparent md:dark:bg-transparent z-10 p-4">
              <LargeHeading size="default" className="three-d font-header md:text-black md:dark:text-light-gold pb-4 md:text-center">
                TAROT ANGELUS
              </LargeHeading>
              <Paragraph className="max-w-2xl md:text-center text-slate-300 md:text-slate-700 md:dark:text-slate-300">
                Embark on a spiritual voyage guided by angelic forces. This tarot deck intertwines medieval aesthetics with celestial wisdom, offering profound insights and divine
                guidance for seekers of enlightenment.
              </Paragraph>
            </div>
          </div>
        </div>
      </div>
      <Container>
        <div className="p-3 max-w-[1536px] m-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5 place-items-center">
            {projects.map((project) => (
              <ProjectCard key={project._id} data={project} disabled={project.url ? true : false} />
            ))}
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
