import { createAction } from '@reduxjs/toolkit'
export const UPDATE_DATES = 'UPDATE_DATES';

export type DateRanges = {
  to: Date;
  from: Date;
};

export const setDates = createAction<DateRanges>(UPDATE_DATES)