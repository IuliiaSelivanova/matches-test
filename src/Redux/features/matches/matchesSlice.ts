import { IMatch } from "../../../types/types";
import {
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { formatStatus } from "../../../utils/formatStatus";
import { addIds } from "../../../utils/addIdsToMatches";

interface MatchesState {
  allMatches: IMatch[];
  matches: IMatch[];
  filterOption: string;
  isOpenMatches: { [key: string]: boolean };
}

const initialState: MatchesState = {
  allMatches: [],
  matches: [],
  filterOption: "Все статусы",
  isOpenMatches: {},
};

const matchesSlice = createSlice({
  name: "matches",
  initialState,
  reducers: {
    setMatches: (
      state,
      action: PayloadAction<IMatch[]>,
    ) => {
      state.allMatches = action.payload;
      state.matches = action.payload;

      // установка фильтра если он есть
      if (state.filterOption !== "Все статусы") {
        state.matches = state.allMatches.filter(
          (match) =>
            formatStatus(match.status).text ===
            state.filterOption,
        );
      }
    },
    filterMatches: (
      state,
      action: PayloadAction<string>,
    ) => {
      state.filterOption = action.payload;

      if (state.filterOption === "Все статусы") {
        state.matches = state.allMatches;
      } else {
        state.matches = state.allMatches.filter(
          (match) =>
            formatStatus(match.status).text ===
            state.filterOption,
        );
      }
    },
    toggleMatch: (state, action: PayloadAction<string>) => {
      const matchId = action.payload;
      state.isOpenMatches[matchId] =
        !state.isOpenMatches[matchId];
    },
    setMatchesFromAPI: (
      state,
      action: PayloadAction<{
        data: { matches: IMatch[] };
      }>,
    ) => {
      // добавляем уникальный id
      const matchesWithIds = addIds(
        action.payload.data.matches,
      );
      state.allMatches = matchesWithIds;
      state.matches = matchesWithIds;

      // установка фильтра если он есть
      if (state.filterOption !== "Все статусы") {
        state.matches = state.allMatches.filter(
          (match) =>
            formatStatus(match.status).text ===
            state.filterOption,
        );
      }
    },
  },
});

export const {
  setMatches,
  filterMatches,
  toggleMatch,
  setMatchesFromAPI,
} = matchesSlice.actions;
export default matchesSlice.reducer;
