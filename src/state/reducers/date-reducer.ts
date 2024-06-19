import { createSlice } from '@reduxjs/toolkit';

const fetchDate=()=>{
  // Initial date of Current Month
  const currentDate = new Date();
  const IntialDateofCurrentMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
  const CurrentDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getUTCDate());
  const LastMonthCurrentDate = new Date(currentDate.getFullYear(), currentDate.getMonth()-1, currentDate.getUTCDate())

  return {CurrentDate,IntialDateofCurrentMonth,LastMonthCurrentDate}
}

const dateSlice = createSlice({
  name: 'date',
  initialState: {
    startDate: fetchDate().IntialDateofCurrentMonth.toDateString(),
    endDate: fetchDate().CurrentDate.toDateString(),
    monthStartDate: fetchDate().IntialDateofCurrentMonth.toDateString(),
    monthCurrentDate: fetchDate().CurrentDate.toDateString(),
    lastMonthCurrentDate: fetchDate().LastMonthCurrentDate.toDateString()
  },
  reducers: {
    setDate: (state,action) => {
        return {...state,...action.payload}
    },
  },
});

export const { setDate } = dateSlice.actions;

export const date = dateSlice.reducer;
