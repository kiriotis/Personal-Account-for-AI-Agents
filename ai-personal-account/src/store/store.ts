import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './../features/counterSlice';
import { authService } from '../services/auth.service.ts';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [authService.reducerPath]: authService.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authService.middleware),
});

// Типы для TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
