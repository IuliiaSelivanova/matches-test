import { Action, Middleware } from "@reduxjs/toolkit";
import { setMatches } from "../features/matches/matchesSlice";
import { IMatch } from "../../types/types";
import { SOCKET_URL } from "../../utils/urls";
import { formatStatus } from "../../utils/formatStatus";

export const webSocketMiddleware: Middleware = (store) => {
  let socket: WebSocket | null = null;

  return (next) => (action: unknown) => {
    const typedAction = action as Action<string>;

    if (typedAction.type === "matches/connect") {
      // проверка состояния WebSocket перед открытем нового соединения
      if (socket && socket.readyState === WebSocket.OPEN) {
        console.log("WebSocket уже открыт");
        return;
      }

      // открытие соединения
      socket = new WebSocket(SOCKET_URL);

      socket.onopen = () => {
        console.log("WebSoket connected");
      };

      socket.onmessage = (e) => {
        // получаем и парсим данные
        const data = JSON.parse(e.data);

        // добавляем уникальный id
        const matchesWithIds: IMatch[] = data.data.map(
          (match: IMatch) => ({
            ...match,
            // устанавливаем id на уникальное значение match, поскольку с сервера не приходит
            id: match.title,
          }),
        );

        // получаем текущий фильтр
        const currentFilter =
          store.getState().matches.filterOption;

        // сохранение фильтрации при обновлении данных
        if (currentFilter !== "Все статусы") {
          const filteredMatches = matchesWithIds.filter(
            (match) =>
              formatStatus(match.status).text ===
              currentFilter,
          );
          store.dispatch(setMatches(filteredMatches));
        } else {
          // сохраняем в store обновленные данные
          store.dispatch(setMatches(matchesWithIds));
        }
      };

      socket.onclose = () => {
        console.log("WebSocket disconnected");
        socket = null;
      };

      socket.onerror = (error) => {
        console.error("WebSocket error", error);
        console.log(
          "WebSocket readyState:",
          socket?.readyState,
        );
      };
    }

    if (typedAction.type === "matches/disconnect") {
      // закрытие соединения
      if (socket) {
        socket.close();
      }
    }
    return next(action);
  };
};
