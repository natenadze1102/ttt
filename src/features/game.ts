import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface Game {
  mainPlayer: string;
  mode: string;
  p1: number;
  p2: number;
  cpu: number;
  tie: number;
}

const initialState: Game = {
  mainPlayer: "x",
  mode: "",
  p1: 0,
  p2: 0,
  cpu: 0,
  tie: 0,
};

export const game = createSlice({
  name: "player",
  initialState,
  reducers: {
    changeMainPlayer: (state, action: PayloadAction<string>) => {
      state.mainPlayer = action.payload;
    },
    changeGameMode: (state, action: PayloadAction<string>) => {
      state.mode = action.payload;
    },
    changePlayerScore: (state, action: PayloadAction<string>) => {
      if (action.payload === "p1") {
        state.p1 += 1;
      }
      if (action.payload === "p2") {
        state.p2 += 1;
      }
      if (action.payload === "cpu") {
        state.cpu += 1;
      }
      if (action.payload === "tie") {
        state.tie += 1;
      }
    },
    resetScores: (state) => {
      state.p1 = 0;
      state.p2 = 0;
      state.cpu = 0;
      state.tie = 0;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  changeMainPlayer,
  changeGameMode,
  changePlayerScore,
  resetScores,
} = game.actions;

export default game.reducer;
