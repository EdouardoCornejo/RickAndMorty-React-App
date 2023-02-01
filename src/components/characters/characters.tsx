import { FC } from "react";
import { Result } from "../../types/characters";
import { Character } from "./character";

interface CharactersProps {
  characters: Result[] | undefined;
}

export const Characters: FC<CharactersProps> = ({ characters }) => {
  return (
    <div className="row">
      <div className="col">
        <Character characters={characters} />
      </div>
    </div>
  );
};
