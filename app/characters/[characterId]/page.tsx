import Container from "@/components/Container";
import { getCharacterById } from "@/sanity/sanity-utils";
import Image from "next/image";

interface IParams {
  characterId?: string;
}

const CharacterPage = async ({ params }: { params: IParams }) => {
  const character = await getCharacterById(params.characterId as string);
  return (
    <Container>
      <div className="px-10 max-w-7xl m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-10">
          <div key={character._id} className="flex justify-center py-5">
            {character.url ? (
              <Image width={375} height={500} className="object-contain" alt="Character" src={character.url} />
            ) : (
              <div className="object-cover h-full w-full bg-white group-hover:scale-110 transition" />
            )}
            {/* <Image /> */}
            {/* {character.name}{" "} */}
          </div>
          <div className="py-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi harum dicta iste distinctio ducimus, corrupti odit accusamus? Reiciendis praesentium quo aut error
            excepturi fugiat, obcaecati ex vitae est alias sol Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum officiis aliquam laboriosam, molestias laborum ad maxime
            illum facere expedita dicta, amet, esse commodi atque autem excepturi et quo neque assumenda? Aut incidunt perferendis enim. Quos sed vel dignissimos, ratione
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CharacterPage;
