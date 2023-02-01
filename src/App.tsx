import { useEffect, useState } from "react";
import { charactersTypes, Info, Result } from "./types/characters";
import { apiCharacters } from "./utils/api/characters";
import { Characters } from "./components/characters";
import { Pagination } from "./components/pagination";
import { Navbar } from "./components/navbar";
import { getNewUrl } from "./utils/format-url";

function App() {
  const [characters, setCharacters] = useState<Result[] | undefined>([]);
  const [url, setUrl] = useState("/api/character");
  const [info, setInfo] = useState<Info | undefined>();

  useEffect(() => {
    getCharacters(url);
  }, [url]);

  const getCharacters = async (url: string) => {
    const response: charactersTypes | undefined = await apiCharacters(url);
    const result = response?.results;
    const info = response?.info;
    setCharacters(result);
    setInfo(info);
  };

  const onPrevious = () => {
    const prevUrl = getNewUrl(info?.prev || "/api/character");
    setUrl(prevUrl);
    getCharacters(url);
  };

  const onNext = () => {
    const nextUrl = getNewUrl(info?.next || "/api/character");
    setUrl(nextUrl);
    getCharacters(url);
  };

  return (
    <>
      <Navbar brand="Rick and Morty App" />
      <div className="containter mt-5">
        <Pagination
          prev={info?.prev}
          onPrevious={onPrevious}
          next={info?.next}
          onNext={onNext}
        />
        <Characters characters={characters} />
        <Pagination
          prev={info?.prev}
          onPrevious={onPrevious}
          next={info?.next}
          onNext={onNext}
        />
      </div>
    </>
  );
}

export default App;
