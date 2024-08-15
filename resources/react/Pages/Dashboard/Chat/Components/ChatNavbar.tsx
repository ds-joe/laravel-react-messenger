// Dependencies
import { usePage } from "@inertiajs/react";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { unselectSidebarChat } from "@/redux/slicers/chats";
import type { RootState } from "@/redux/store";

// Components
import GroupAvatar from "@/Components/Dashboard/Layout/Chat/GroupAvatar";
import UserAvatar from "@/Components/Dashboard/Layout/Chat/UserAvatar";

// Icons
import { FiArrowLeft } from "react-icons/fi";
import { HiEllipsisVertical, HiOutlineTrash } from "react-icons/hi2";
import { GoBlocked } from "react-icons/go";

const ChatNavbar: RC = () => {
  const { selectedChat, onlineUsers } = useSelector((state: RootState) => state.chatsSlice);
  const dispatch = useDispatch();
  const { page_words } = usePage().props as PageProps;

  // User online
  const checkOnline = (user_id: number) => {
    const id = user_id.toString();
    return onlineUsers[id] ? true : false;
  }

  // Handle close chat in mobile mode.
  const handleCloseChat = () => {
    dispatch(unselectSidebarChat());
  }

  return (
    <nav className="bg-base-100 flex items-center justify-between px-4 py-2 border-b border-b-base-content/20  shadow w-full h-[var(--chat-layout-user-navbar-height)]">
      {/* Start Avatar and status div */}
      <div className="flex items-center gap-2">
        <button className="btn btn-sm btn-ghost md:hidden rounded-full" onClick={handleCloseChat}><FiArrowLeft /></button>
        <div className="flex items-center gap-2">

          {
            selectedChat?.is_group ? <GroupAvatar className="min-w-10 min-h-10" /> : (
              <UserAvatar className="w-9" placeholderName={selectedChat?.full_name || ""} avatar={selectedChat?.avatar} online={checkOnline(selectedChat?.id || 0)} />
            )
          }

          <div className="flex flex-col">
            <h1 className="font-semibold">{selectedChat?.is_group ? selectedChat.name : selectedChat?.full_name}</h1>
            {
              !selectedChat?.is_group && (
                <p className="text-sm">
                  {checkOnline(selectedChat?.id || 0) && page_words?.online}

                  {/* {page_words?.last_seen}:  */}
                </p>
              )
            }
          </div>
        </div>
      </div>
      {/* End Avatar and status div */}
      {/* Start chat options div */}
      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn btn-ghost rounded-full btn-sm text-xl"><HiEllipsisVertical /></div>
        <ul
          tabIndex={0}
          className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow border border-base-content/20">
          <li><a><HiOutlineTrash /> {page_words?.delete_chat}</a></li>
          <li><a><GoBlocked /> {page_words?.block_user}</a></li>
        </ul>
      </div>
      {/* End chat options div */}
    </nav >
  )
}

export default ChatNavbar;