import { useCallback, useEffect, useState } from "react";
import fetchData from "./utils/fetchData";
import Header from "./components/Header/Header";
import GameList from "./components/GameList/GameList";
import { URLMatches } from "./utils/urls";
import { IMatch } from "./types/types.ts";
import { isApiResponse } from "./types/typeGuards.ts";
import { socket } from "./utils/websocket.ts";

function App() {
  const [matches, setMatches] = useState<IMatch[] | null>(
    null,
  );
  const [isError, setIsError] = useState(false);
  const [updateMatches, setUpdateMatches] = useState<
    IMatch[] | null
  >(null);

  const fetchMatches = useCallback(async () => {
    const controller = new AbortController();

    try {
      const data = await fetchData(URLMatches);
      if (isApiResponse(data)) {
        setMatches(data.data.matches as IMatch[]);
        setIsError(false);
      } else {
        setIsError(true);
      }
    } catch (error: unknown) {
      if (
        error instanceof Error &&
        error.message !== "AbortError"
      ) {
        setIsError(true);
      }
    }
    return () => controller.abort();
  }, []);

  useEffect(() => {
    fetchMatches();
  }, [fetchMatches]);

  useEffect(() => {
    socket.onmessage = function (e) {
      try {
        const parsedData = JSON.parse(e.data);
        setUpdateMatches(parsedData.data);
      } catch (error) {
        console.error(
          "Ошибка парсинга WebSocket-сообщения:",
          error,
        );
      }
    };
  });

  return (
    <div className="app">
      <Header onRefresh={fetchMatches} isError={isError} />
      <GameList matches={updateMatches} />
    </div>
  );
}

export default App;
