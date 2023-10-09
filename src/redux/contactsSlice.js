import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejecting = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchContacts.rejected]: handleRejecting,
  },

  [addContact.pending]: handlePending,
  [addContact.fulfilled](state, action) {
    state.isLoading = false;
    state.error = null;
    state.items.push(action.payload);
  },
  [addContact.rejected]: handleRejecting,

  [deleteContact.pending]: handlePending,
  [deleteContact.fulfilled](state, action) {
    state.isLoading = false;
    state.error = null;
    const contactId = action.payload;
    const index = state.contacts.items.findIndex(
      contact => contact.id === contactId
    );
    state.contacts.items.splice(index, 1);
  },
  [deleteContact.rejected]: handleRejecting,
});

export const contactsReducer = contactsSlice.reducer;

//Selectors

export const getContacts = state => state.contacts.items;
export const getIsLoading = state => state.contacts.isLoading;
export const getError = state => state.contacts.error;
