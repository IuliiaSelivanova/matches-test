import { IMatch } from "../../../types/types";
import {
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { formatStatus } from "../../../utils/formatStatus";

interface MatchesState {
  matches: IMatch[];
  filterOption: string;
  openMatchId: string | null;
}

const initialState: MatchesState = {
  matches: [],
  filterOption: "Все статусы",
  openMatchId: null,
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
    toggleMatchOpen: (
      state,
      action: PayloadAction<string>,
    ) => {
      state.openMatchId =
        state.openMatchId === action.payload
          ? null
          : action.payload;
    },
  },
});

export const {
  setMatches,
  filterMatches,
  toggleMatchOpen,
} = matchesSlice.actions;
export default matchesSlice.reducer;
