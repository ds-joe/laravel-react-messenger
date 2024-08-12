// Components
import GroupAvatar from "../GroupAvatar";

// Utils
import cn from "@/utils/tailwindCn";

// Assets
import placeholderAvatar from "~/images/auth/user-avatar.png";

// Types
import type { ChatSidebarUserProps } from "@/types/Components/Dashboard/Chat/ChatSidebar";

const ChatSidebarUser: RC<ChatSidebarUserProps> = ({ onClick, isGroup, name, avatar, lastMessage, lastMessageDate, online }) => {

  // Handle selected chat
  const handleSelectedChat = () => {
    onClick && onClick();
  }

  return (
    <div className=" flex items-center  gap-2 py-4 px-4 transition-all hover:bg-base-200 cursor-pointer " onClick={handleSelectedChat}>

      {/* Start avatar Div */}
      {
        !isGroup ? (
          <div className={cn(`avatar`, `${online ? "online" : 'offline'}`)}>
            <div className="w-12 rounded-full">
              <img
                src={avatar ?? placeholderAvatar}
                alt={name}
              />
            </div>
          </div>
        ) : <GroupAvatar />
      }
      {/* End avatar Div */}
      {/* Start content Div */}
      <div className="flex flex-col w-full">

        <div className="flex items-center justify-between w-full gap-2">
          <h1 className="text-sm font-semibold  line-clamp-1" title={name}>{name}</h1>
          <p className="text-xs font-medium text-base-content/70 line-clamp-1" title={lastMessageDate}>{lastMessageDate}</p>
        </div>
        <p className="text-sm mt-1 line-clamp-1" title={lastMessage}>
          {lastMessage}
        </p>
      </div>
      {/* End content Div */}


    </div>
  )
}

export default ChatSidebarUser;