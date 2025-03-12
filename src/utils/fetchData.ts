import {
  ApiResponse,
  ServerError,
} from "../types/types.ts";

// Функция получения данных с сервера
export default async function fetchData(
  url: string,
): Promise<ApiResponse | ServerError> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      const errorData = await response.json();
      throw {
        message:
          errorData.message || "Ошибка при загрузке данных",
        statusCode: response.status,
      } as ServerError;
    }
    return await response.json();
  } catch (error) {
    if (
      error &&
      typeof error === "object" &&
      "message" in error &&
      "statusCode" in error
    ) {
      return error as ServerError;
    }
    return {
      message: "Неизвестная ошибка при загрузке данных",
      statusCode: 500,
    };
  }
}

// const fetchMatches = useCallback(async () => {
//   const controller = new AbortController();

//   try {
//     const data = await fetchData(URLMatches);
//     if (isApiResponse(data)) {
//       setMatches(data.data.matches as IMatch[]);
//       setIsError(false);
//     } else {
//       setIsError(true);
//     }
//   } catch (error: unknown) {
//     if (
//       error instanceof Error &&
//       error.message !== "AbortError"
//     ) {
//       setIsError(true);
//     }
//   }
//   return () => controller.abort();
// }, []);
