import { FC } from "react";
import { characters } from "../../utils/api/characters";
import { charactersTypes } from "../../types/characters";

interface NavbarProps {
  brand: string;
}

export const Navbar: FC<NavbarProps> = ({ brand }) => {
  const getCharacters = async () => {
    const response: charactersTypes = await characters();
    console.log(
      "🚀 ~ file: Navbar.tsx:12 ~ getCharacters ~ response",
      response
    );
  };

  getCharacters();
  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container">
          <a className=" navbar-brand text-uppercase" href="/">
            {brand}
          </a>
        </div>
      </nav>
    </>
  );
};
