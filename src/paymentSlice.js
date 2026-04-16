import { createSlice } from '@reduxjs/toolkit';

const paymentSlice = createSlice({
  name: 'payment',
  initialState: {
    list: [],
  },
  reducers: {
    addContact: (state, action) => {
      // action.payload: { name: '', number: '' }
      state.list.push({ ...action.payload });
    },
  },
});

export const { addPaymets } = paymentSlice.actions;
export default paymentSlice.reducer;
