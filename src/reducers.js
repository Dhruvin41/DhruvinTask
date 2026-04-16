import { createSlice } from '@reduxjs/toolkit';

const dataSlice = createSlice({
  name: 'items',
  initialState: { list: [] },
  reducers: {
    addItem: (state, action) => {
      // action.payload = { id: 1, name: '...', number: '...' }
      state.list.push(action.payload);
    },
  },
});

export const { addItem } = dataSlice.actions;
export default dataSlice.reducer;
