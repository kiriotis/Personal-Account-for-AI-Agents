import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './../features/counterSlice';
import { authService } from '../services/auth.service.ts';
import { activityService } from '../services/activity.service.ts';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [authService.reducerPath]: authService.reducer,
    [activityService.reducerPath]: activityService.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authService.middleware,
      activityService.middleware
    ),
});

// Типы для TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
