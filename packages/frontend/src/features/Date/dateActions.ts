export const UPDATE_DATES = 'UPDATE_DATES';

export type DateRanges = {
  to: Date;
  from: Date;
};

export const setDates = ({to, from}: DateRanges) => ({ type: UPDATE_DATES, to, from } );