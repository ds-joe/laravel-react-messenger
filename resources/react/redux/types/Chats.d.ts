// Types
import { SidebarChatData } from "@/types/Components/Dashboard/Chat/ChatSidebar";
import { UserPusherResource } from "@/types/Models/User";



export type ChatsInitState = {
  selected: boolean;
  selectedChat?: SidebarChatData,
  onlineUsers: Record<string, UserPusherResource>,
  sidebarChats: Array<SidebarChatData>,
  message: string;
  attachments?: Array<File>
}