// Dependencies
import { createSlice } from "@reduxjs/toolkit";

// Init State 
import { initialState } from "../initState/chats";

// Actions
import chatsActions from "../actions/chats";

const chatsSettingsSlice = createSlice({
  name: 'chats',
  initialState,
  reducers: chatsActions,
})

// Action creators are generated for each case reducer function
export const { setSelectedChat } = chatsSettingsSlice.actions;

export default chatsSettingsSlice.reducer