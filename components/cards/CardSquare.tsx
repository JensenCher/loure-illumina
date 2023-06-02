"use client";

import Image from "next/image";

interface teamMember {
  name: string;
  title: string;
  image: string | null;
}

interface CardSquareProps {
  data: teamMember;
  onAction?: (id: string) => void;
  disabled?: boolean;
  actionLabel?: string;
  actionId?: string;
  className?: string;
}

// const CardSquare: React.FC<CharacterCardProps> = ({ data, onAction, disabled, actionLabel, actionId }) => {
const CardSquare: React.FC<CardSquareProps> = ({ data, onAction, disabled, actionLabel, actionId, className }) => {
  return (
    <div className={"block col-span-1 group " + className ? className : ""}>
      <div className="flex flex-col gap-3 w-28 md:w-48">
        <div className="relative w-full max-w-lg aspect-square overflow-hidden rounded-xl items-end">
          <Image
            fill
            alt="Character"
            src={data.image ? data.image : "/images/placeholder.jpg"}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover h-auto w-auto group-hover:scale-110 transition duration-300"
          />
          <div
            className="h-14 bottom-0 opacity-100 transition duration-300
              absolute w-full bg-opacity-5 bg-gradient-to-t from-black 
              rounded drop-shadow-lg 
              text-white p-5 flex justify-between
          "
          >
            <div className="absolute bottom-0 left-0 pb-1 md:pb-4 w-full group-hover">
              <div className="font-semibold text-xxs md:text-lg px-1 flex flex-col items-center justify-center">
                <span className="font-header">{data.name}</span>
                <span className="block md:text-sm">{data.title}</span>
              </div>
            </div>
          </div>
          {/* Can replace the heart button with a card border */}
          {/* <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
<HeartButton projectId={data._id} />
</div> */}
        </div>
      </div>
    </div>
  );
};

export default CardSquare;
