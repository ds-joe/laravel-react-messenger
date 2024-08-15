// Utils
import cn from "@/utils/tailwindCn";

// Types
import type { ChatBubbleProps } from "@/types/Components/Dashboard/Chat/Chat";

// Assets
import placeholderAvatar from "~/images/auth/user-avatar.png";

const ChatBubble: RC<ChatBubbleProps> = ({ date, message, avatar, position }) => {
  return (
    <div className={cn(
      "chat mb-2",
      position === 'start' ? 'chat-start' : position === 'end' ? "chat-end" : ""
    )}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            alt=""
            src={avatar ?? placeholderAvatar} />
        </div>
      </div>
      <div className="chat-header">
        {date}
        {/* <time className="text-xs opacity-50">12:45</time> */}
      </div>
      <div className={cn(
        "chat-bubble min-h-9",
        position === 'end' ? "chat-bubble-success" : "bg-base-100 text-base-content shadow"
      )}>{message}</div>
      {/* <div className="chat-footer opacity-50">Delivered</div> */}
    </div>
  )
}

export default ChatBubble;