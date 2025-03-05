import { ApiResponse } from "./types.ts";

export function isApiResponse(
  data: unknown,
): data is ApiResponse {
  return (
    typeof data === "object" &&
    data !== null &&
    "ok" in data &&
    "data" in data
  );
}
