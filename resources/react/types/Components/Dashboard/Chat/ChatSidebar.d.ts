import { User } from "@/types/Models/User";

// Types
export type ChatSidebarUserProps = {
  avatar?: string;
  name: string;
  lastMessage?: string;
  lastMessageDate?: string;
  online?: boolean;
  selected?: boolean;
  isGroup?: boolean;
  onClick?: () => void;
}

// Incoming chat data
type UserChat = {
  id: number;
  full_name: string;
  is_group: boolean;
  is_user: boolean;
  is_admin: boolean;
  created_at: string;
  updated_at: string;
  blocked_at: string;
  last_message: string;
  last_message_date: string;
  avatar?: string;
}

type GroupChat = {
  id: number;
  name: string;
  is_group: boolean;
  is_user: boolean;
  owner_id: number;
  users: Array<User>;
  user_ids: Array<number>;
  created_at: string;
  updated_at: string;
  blocked_at: string;
  last_message: string;
  last_message_date: string;
};

export type SidebarChatData = GroupChat & UserChat;