import { useEffect, useState } from "react";
import fetchData from "./utils/fetchData";
import Header from "./components/Header/Header";
import GameList from "./components/GameList/GameList";
import { URLMatches } from "./utils/urls";
import { IMatch } from "./types/types";
import { isApiResponse } from "./types/typeGuards";

function App() {
  const [matches, setMatches] = useState<IMatch[] | null>(
    null,
  );
  const [isError, setIsError] = useState(false);

  const fetchMatches = () => {
    fetchData(URLMatches)
      .then((data) => {
        if (isApiResponse(data)) {
          setMatches(data.data.matches as IMatch[]);
          setIsError(false);
        } else {
          setIsError(true);
        }
      })
      .catch(() => {
        setIsError(true);
      });
  };

  useEffect(() => {
    fetchMatches();
  }, []);

  return (
    <div className="app">
      <Header onRefresh={fetchMatches} isError={isError} />
      <GameList matches={matches} />
    </div>
  );
}

export default App;
