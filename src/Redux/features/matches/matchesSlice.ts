import { IMatch } from "../../../types/types";
import {
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { formatStatus } from "../../../utils/formatStatus";

interface MatchesState {
  matches: IMatch[];
  filterOption: string;
  isOpenMatches: { [key: string]: boolean };
}

const initialState: MatchesState = {
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
      state.matches = action.payload;

      if (state.filterOption !== "Все статусы") {
        state.matches = state.matches.filter(
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

      if (action.payload === "Все статусы") return;

      state.matches = state.matches.filter(
        (match) =>
          formatStatus(match.status).text ===
          action.payload,
      );
    },
    toggleMatch: (state, action: PayloadAction<string>) => {
      const matchId = action.payload;
      state.isOpenMatches[matchId] =
        !state.isOpenMatches[matchId];
    },
  },
});

export const { setMatches, filterMatches, toggleMatch } =
  matchesSlice.actions;
export default matchesSlice.reducer;
