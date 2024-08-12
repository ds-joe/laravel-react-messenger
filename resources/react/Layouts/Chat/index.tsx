// Dependencies
import { useEffect } from "react";

// Redux
import { useDispatch } from "react-redux";
import { setOnlineUsers, removeUser, addUser } from "@/redux/slicers/chats";

// Components
import ChatSidebar from "@/Components/Dashboard/Layout/Chat/ChatsSidebar";

// Types
import type { UserPusherResource } from "@/types/Models/User";

const ChatLayout: RPL = ({ children }) => {
  const dispatch = useDispatch();

  // Watch joined users.
  window.Echo.join("online")
    .here((users: Array<UserPusherResource>) => {
      dispatch(setOnlineUsers(users))
    }).joining((user: UserPusherResource) => {
      dispatch(addUser(user))
    }).leaving((user: UserPusherResource) => {
      dispatch(removeUser(user.id))
    });

  // handle user on leave
  useEffect(() => {
    return () => {
      window.Echo.leave("online");
    }
  }, [])

  return (
    <div className="flex">
      <ChatSidebar />
      <div className="w-full max-h-[var(--dashboard-layout-content-height)] overflow-y-auto">
        {children}
      </div>
    </div>
  )
}

export default ChatLayout;