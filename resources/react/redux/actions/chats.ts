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
    const sortedChat = action.payload.sort((a, b) => {
      const dateA = new Date(a.last_message_date);
      const dateB = new Date(b.last_message_date);
      if (dateA > dateB) return -1;
      if (dateA < dateB) return 1;
      return 0;
    });

    state.sidebarChats = sortedChat;
  },

  /**
   * Set Message
   * 
   * @param { ChatsInitState } state
   * @param { PayloadAction<{ message: string, emoji: boolean }> } action
   * @return { void }
   */
  setMessage: (state: ChatsInitState, action: PayloadAction<{ message: string, emoji: boolean }>): void => {
    const { emoji, message } = action.payload;
    state.message = emoji ? `${state.message}${message}` : message;
  },

  /**
   * Set attachments
   * 
   * @param { ChatsInitState } state
   * @param { PayloadAction<Array<File>> } action
   * @return { void }
   */
  setAttachments: (state: ChatsInitState, action: PayloadAction<Array<File>>): void => {
    state.attachments = action.payload;
  },

  /**
   * Clear message and attachments.
   * 
   * @param { ChatsInitState } state
   * @return { void }
   */
  clearMessageAndAttachments: (state: ChatsInitState): void => {
    state.message = "";
    state.attachments = undefined;
  }

}