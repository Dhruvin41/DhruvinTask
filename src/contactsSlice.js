import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
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

export const { addContact } = contactsSlice.actions;
export default contactsSlice.reducer;
