import { configureStore, ThunkAction, Action, combineReducers, getDefaultMiddleware } from '@reduxjs/toolkit';
import deviceReducer from '../features/Devices/deviceReducer';
import dateReducer from '../features/Date/dateReducer';
import chartReducer from '../features/Chart/chartReducer';

const reducer = combineReducers({
  devices: deviceReducer,
  date: dateReducer,
  chart: chartReducer,
});

export const store = configureStore({
  reducer,
  middleware: [
    ...getDefaultMiddleware({
        serializableCheck: false
    }),
    
  ],
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
