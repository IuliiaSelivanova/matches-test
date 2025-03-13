import { IMatch } from "../types/types";

export const addIds = (matches: IMatch[]) => {
  return matches.map((match: IMatch) => ({
    ...match,
    id: match.title,
  }));
};
