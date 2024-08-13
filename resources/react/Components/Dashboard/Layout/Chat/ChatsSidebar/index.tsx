// Dependencies
import { useEffect } from "react";
import { usePage } from "@inertiajs/react";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { setSidebarChats, setSelectedChat } from "@/redux/slicers/chats";
import type { RootState } from "@/redux/store";

// Components
import ChatSidebarUser from "../ChatSidebarUser";
import ChatSidebarHeader from "./Components/Header";

// Utils
import cn from "@/utils/tailwindCn";

// Types
import type { SidebarChatData } from "@/types/Components/Dashboard/Chat/ChatSidebar";

const ChatSidebar: RC = () => {
  const dispatch = useDispatch();
  const { selected: chatIsSelected, sidebarChats, onlineUsers } = useSelector((state: RootState) => state.chatsSlice);
  const { userChats } = usePage().props as PageProps<{ userChats: Array<SidebarChatData> }>

  // Check if user is online
  const checkOnline = (user_id: number) => {
    const id = user_id.toString();
    return onlineUsers[id] ? true : false;
  }

  // Handle set selected chat
  const handleSetSelectedChat = (chat: SidebarChatData) => {
    dispatch(
      setSelectedChat(chat)
    )
  }

  // Handle set user chats.
  useEffect(() => {
    dispatch(setSidebarChats(userChats))
  }, [userChats]);

  return (
    <aside className={cn(
      `md:min-w-80 md:max-w-80 min-h-[var(--dashboard-layout-content-height)] bg-base-100 overflow-y-hidden border-r border-r-base-content/20 max-h-[var(--dashboard-layout-content-height)] transition-all`,
      'absolute w-full md:relative z-[1] left-0',
      chatIsSelected && "-left-full md:left-0 transition-all"
    )}>
      <ChatSidebarHeader />
      <div className="min-h-[var(--chat-sidebar-content-height)] max-h-[var(--chat-sidebar-content-height)] overflow-y-auto">
        {
          sidebarChats.map((chat) => (
            <ChatSidebarUser
              key={`${chat.is_group ? "group" : "user"}-${chat.id}`}
              avatar={chat.is_user ? chat.avatar : undefined}
              name={chat.is_group ? chat?.name : chat?.full_name}
              lastMessage={chat.last_message}
              lastMessageDate={chat.last_message_date}
              isGroup={chat.is_group}
              onClick={() => handleSetSelectedChat(chat)}
              online={checkOnline(chat.id)}
            />
          ))
        }
      </div>
    </aside>
  )
}

export default ChatSidebar;