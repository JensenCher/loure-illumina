"use client";

import { Character } from "@/types/Character";
import Image from "next/image";
import Link from "next/link";

interface CharacterCardProps {
  data: Character;
  onAction?: (id: string) => void;
  disabled?: boolean;
  actionLabel?: string;
  actionId?: string;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ data, onAction, disabled, actionLabel, actionId }) => {
  return (
    <Link href={`/${data.category.slug}/${data.slug}`} className="block col-span-1 cursor-pointer group">
      <div className="flex flex-col gap-3 w-[250px]">
        <div className="h-[417px] w-full overflow-hidden relative rounded-2xl items-end">
          {data.url ? (
            <Image
              fill
              alt="Character"
              src={data.url}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover h-auto w-auto group-hover:scale-110 transition duration-300"
            />
          ) : (
            <div className="object-cover h-full w-full bg-white group-hover:scale-110 transition duration-300" />
          )}
          <div
            className="h-14 bottom-0 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition duration-300
                absolute w-full bg-opacity-5 bg-gradient-to-t from-black 
                 rounded drop-shadow-lg 
                text-white p-5 flex justify-between
            "
          >
            <div className="absolute bottom-0 pb-4 group-hover">
              <div className="font-semibold text-lg px-1">
                <span className="font-header">{data?.name}</span>
                <span className="block text-sm">{data?.title}</span>
              </div>
            </div>
          </div>
          {/* Can replace the heart button with a card border */}
          {/* <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <HeartButton projectId={data._id} />
          </div> */}
        </div>
      </div>
    </Link>
  );
};

export default CharacterCard;
