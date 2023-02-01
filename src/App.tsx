import { useEffect, useState } from "react";
import { apiCharacters } from "./utils/api/characters";
import { charactersTypes, Result } from "./types/characters";
import { Navbar } from "./components/navbar";
import { Characters } from "./components/characters";

function App() {
  const [characters, setCharacters] = useState<Result[] | undefined>([]);

  useEffect(() => {
    getCharacters();
  }, []);

  const getCharacters = async () => {
    const response: charactersTypes | undefined = await apiCharacters();
    const result = response?.results;
    setCharacters(result);
  };

  return (
    <>
      <Navbar brand="Rick and Morty App" />
      <Characters characters={characters} />
    </>
  );
}

export default App;
