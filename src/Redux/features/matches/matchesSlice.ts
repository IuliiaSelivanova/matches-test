import { IMatch } from "../../../types/types";
import {
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { formatStatus } from "../../../utils/formatStatus";

interface MatchesState {
  matches: IMatch[];
  filterOption: string;
}

const initialState: MatchesState = {
  matches: [],
  filterOption: "Все статусы",
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
  },
});

export const { setMatches, filterMatches } =
  matchesSlice.actions;
export default matchesSlice.reducer;
