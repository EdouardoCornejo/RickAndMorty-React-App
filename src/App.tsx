import { useEffect, useState } from "react";
import { apiCharacters } from "./utils/api/characters";
import { charactersTypes, Info, Result } from "./types/characters";
import { Navbar } from "./components/navbar";
import { Characters } from "./components/characters";
import { Pagination } from "./components/pagination";

function App() {
  const [characters, setCharacters] = useState<Result[] | undefined>([]);
  const [info, setInfo] = useState<Info | undefined>();

  useEffect(() => {
    getCharacters();
  }, []);

  const getCharacters = async () => {
    const response: charactersTypes | undefined = await apiCharacters();
    const result = response?.results;
    const info = response?.info;
    setCharacters(result);
    setInfo(info);
  };

  return (
    <>
      <Navbar brand="Rick and Morty App" />
      <div className="containter mt-5">
        <Pagination
          prev={info?.prev}
          onPrevious={""}
          next={info?.next}
          onNext={""}
        />
        <Characters characters={characters} />
        <Pagination
          prev={info?.prev}
          onPrevious={""}
          next={info?.next}
          onNext={""}
        />
      </div>
    </>
  );
}

export default App;
