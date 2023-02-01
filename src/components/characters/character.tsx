/* eslint-disable jsx-a11y/img-redundant-alt */
import { FC } from "react";
import { Result } from "../../types/characters";
interface CharacterProps {
  characters: Result[] | undefined;
}

export const Character: FC<CharacterProps> = ({ characters }) => {
  return (
    <>
      <div className="row">
        {characters?.map((character, index) => (
          <div key={index} className="col" style={{ minWidth: "200px" }}>
            <div className="card">
              <img src={character.image} alt="character image" />
              <div className="card-body"></div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
