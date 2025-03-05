import { useEffect, useState } from "react";
import fetchData from "./utils/fetchData";
import Header from "./components/Header/Header";
import GameList from "./components/GameList/GameList";
import { URLMatches } from "./utils/urls";
import { IMatch, ServerError } from "./types/types";
import { isApiResponse } from "./types/typeGuards";

function App() {
  const [matches, setMatches] = useState<IMatch[] | null>(
    null,
  );
  const [error, setError] = useState<ServerError | null>(
    null,
  );

  const fetchMatches = () => {
    fetchData(URLMatches)
      .then((data) => {
        if (isApiResponse(data)) {
          setMatches(data.data.matches as IMatch[]);
        } else {
          setError(data as ServerError);
        }
      })
      .catch((error) => {
        setError(error as ServerError);
      });
  };

  useEffect(() => {
    fetchMatches();
  }, []);

  return (
    <div className="app">
      <Header onRefresh={fetchMatches} error={error} />
      <GameList matches={matches} />
    </div>
  );
}

export default App;
