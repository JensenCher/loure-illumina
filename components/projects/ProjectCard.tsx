"use client";

import { Project } from "@/types/Project";
import Image from "next/image";
import { useRouter } from "next/navigation";
import HeartButton from "../HeartButtons";

interface ProjectCardProps {
  data: Project;
  onAction?: (id: string) => void;
  disabled?: boolean;
  actionLabel?: string;
  actionId?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ data, onAction, disabled, actionLabel, actionId }) => {
  const router = useRouter();

  return (
    <div onClick={() => router.push(`/projects/${data._id}`)} className="col-span-1 cursor-pointer group">
      <div className="flex flex-col gap-2 w-60">
        <div className="h-96 w-full overflow-hidden relative rounded-xl items-end">
          {data.url ? (
            <Image fill alt="Project" src={data.url} className="object-cover h-full w-full group-hover:scale-110 transition" />
          ) : (
            <div className="object-cover h-full w-full bg-white group-hover:scale-110 transition" />
          )}
          <div
            className="h-14 bottom-0 opacity-0 group-hover:opacity-100 transition duration-300
                absolute w-full bg-opacity-5 bg-gradient-to-t from-black 
                 rounded drop-shadow-lg 
                text-white p-5 flex justify-between
            "
          >
            <div className="absolute bottom-0 pb-4 group-hover">
              <div className="font-semibold text-lg">
                {data?.name}, {data?.slug}
              </div>
            </div>
          </div>
          <div className="absolute top-3 right-3">
            <HeartButton projectId={data._id} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
