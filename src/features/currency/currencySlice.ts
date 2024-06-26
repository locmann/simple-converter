import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type IniStateType = {
  usd: number;
  eur: number;
};

const initialState: IniStateType = {
  usd: 0,
  eur: 0,
};

export const currencySlice = createSlice({
  name: 'currencies',
  initialState,
  reducers: {
    exchangeCurrency: (state, action: PayloadAction<boolean>) => {
      if (action.payload) {
        state.eur = state.usd / 1.07;
      } else {
        state.usd = state.eur * 1.07;
      }
    },
    addUsd: (state, action: PayloadAction<number>) => {
      state.usd = action.payload;
    },
    addEur: (state, action: PayloadAction<number>) => {
      state.eur = action.payload;
    },
  },
});

export const { exchangeCurrency, addEur, addUsd } = currencySlice.actions;
