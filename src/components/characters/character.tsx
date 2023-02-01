/* eslint-disable jsx-a11y/img-redundant-alt */
import { FC } from "react";
import { Result } from "../../types/characters";
interface CharacterProps {
  characters: Result[] | undefined;
}

export const Character: FC<CharacterProps> = ({ characters }) => {
  return (
    <div className="row">
      {characters?.map((character, index) => (
        <div key={index} className="col mb-4" style={{ minWidth: "300px" }}>
          <div className="card">
            <img src={character.image} alt="character image" />
            <div className="card-body">
              <h5 className="card-title">{character.name}</h5>
              <hr />
              <p>Species: {character.species}</p>
              <p>Location: {character.location.name}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
