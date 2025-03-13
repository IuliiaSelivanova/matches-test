import { configureStore } from "@reduxjs/toolkit";
import matchesReducer from "./features/matches/matchesSlice";
import { webSocketMiddleware } from "./middleware/webSocketMiddleware";
import { apiSlice } from "./features/api/apiSlice";

const store = configureStore({
  reducer: {
    matches: matchesReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      apiSlice.middleware,
      webSocketMiddleware,
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
