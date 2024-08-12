// Types
import type { PayloadAction } from "@reduxjs/toolkit"
import type { ChatsInitState } from "../types/Chats"
import type { UserPusherResource } from "@/types/Models/User";
import type { SidebarChatData } from "@/types/Components/Dashboard/Chat/ChatSidebar";


export default {

  /**
   * Set selected chat.
   * 
   * @param { ChatsInitState } state
   * @param { PayloadAction<SidebarChatData> } action
   * @return { void }
   */
  setSelectedChat: (state: ChatsInitState, action: PayloadAction<SidebarChatData>): void => {
    state.selected = true;
    state.selectedChat = action.payload;
  },

  /**
   * Toggle sidebar selected.
   * 
   * @param { ChatsInitState } state
   * @return { void }
   */
  unselectSidebarChat: (state: ChatsInitState): void => {
    state.selected = !state.selected;
    state.selectedChat = undefined;
  },

  /**
   * Set online users
   * 
   * @param { ChatsInitState } state
   * @param { PayloadAction<Array<UserPusherResource>> } action
   * @return { void }
   */
  setOnlineUsers: (state: ChatsInitState, action: PayloadAction<Array<UserPusherResource>>): void => {
    const users = action.payload.map((user) => [user.id.toString(), user]);
    state.onlineUsers = {
      ...state.onlineUsers,
      ...Object.fromEntries(users)
    };
  },

  /**
   * Add user
   * 
   * @param { ChatsInitState } state
   * @param { PayloadAction<UserPusherResource> } action
   */
  addUser: (state: ChatsInitState, action: PayloadAction<UserPusherResource>) => {
    const users = {
      ...state.onlineUsers,
      [action.payload.id]: action.payload
    }
    state.onlineUsers = users;
  },

  /**
   * Remove user.
   * 
   * @param { ChatsInitState } state
   * @param { PayloadAction<number> } action
   * @return { void }
   */
  removeUser: (state: ChatsInitState, action: PayloadAction<number>): void => {
    const userId = action.payload.toString();
    let users = state.onlineUsers;
    delete users[userId];
    state.onlineUsers = users;
  },

  /**
   * Set sidebar chats.
   * 
   * @param { ChatsInitState } state
   * @param { PayloadAction<Array<SidebarChatData>> } action
   * @return { void }
   */
  setSidebarChats: (state: ChatsInitState, action: PayloadAction<Array<SidebarChatData>>): void => {
    state.sidebarChats = action.payload;
  },

}