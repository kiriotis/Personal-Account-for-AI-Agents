import { configureStore } from '@reduxjs/toolkit';
import { activityService } from '../services/activity.service.ts';
import { authService } from '../services/auth.service.ts';
import { authUser } from '../services/user.service.ts';
import counterReducer from './../features/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [authService.reducerPath]: authService.reducer,
    [activityService.reducerPath]: activityService.reducer,
    [authUser.reducerPath]: authUser.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authService.middleware)
      .concat(activityService.middleware)
      .concat(authUser.middleware),
});

// Типы для TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
