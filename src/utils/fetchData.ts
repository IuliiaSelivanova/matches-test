import {
  ApiResponse,
  ServerError,
} from "../types/types.ts";

export default async function fetchData(
  url: string,
): Promise<ApiResponse | ServerError> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(
        `Ошибка ${response.status}: ${response.statusText}`,
      );
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
