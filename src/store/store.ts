import { configureStore } from '@reduxjs/toolkit';
import { currencySlice } from '../features/currency/currencySlice.ts';

export const store = configureStore({
  reducer: {
    currencies: currencySlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
