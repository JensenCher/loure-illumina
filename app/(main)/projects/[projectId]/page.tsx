import { getProjectById } from "@/sanity/sanity-utils";
import Image from "next/image";

interface IParams {
  projectId?: string;
}

const ProjectPage = async ({ params }: { params: IParams }) => {
  const project = await getProjectById(params.projectId as string);
  return (
    <div>
      <div key={project._id}>
        {project.name}{" "}
        {project.url ? (
          <Image width={375} height={500} alt="Project" src={project.url} />
        ) : (
          <div className="object-cover h-full w-full bg-white group-hover:scale-110 transition" />
        )}
        {/* <Image /> */}
      </div>
    </div>
  );
};

export default ProjectPage;
