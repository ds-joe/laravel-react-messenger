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

export const { setSelectedChat, unselectSidebarChat, setOnlineUsers, removeUser, addUser, setSidebarChats } = chatsSettingsSlice.actions;

export default chatsSettingsSlice.reducer