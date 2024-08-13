// Dependencies
import { usePage } from "@inertiajs/react";

// Components
import { FormInput } from "@/Components/Global/Forms";

// Icons
import { HiEllipsisVertical, HiPlus, HiChatBubbleBottomCenterText } from "react-icons/hi2";


const ChatSidebarHeader: RC = () => {
  const { page_words } = usePage().props as PageProps;

  return (
    <nav className="h-[var(--chat-sidebar-header-height)] shadow px-4 flex items-center border-b border-base-content/20">
      <div className="flex items-center justify-between w-full gap-2">
        <FormInput
          type="text"
          placeholder={page_words?.search}
        />
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-xs text-xl"><HiEllipsisVertical /></div>
          <ul
            tabIndex={0}
            className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow border border-base-content/20">
            <li><a><HiChatBubbleBottomCenterText /> {page_words?.new_chat}</a></li>
            <li><a><HiPlus /> {page_words?.create_group}</a></li>
          </ul>
        </div>

      </div>
    </nav>
  )
}

export default ChatSidebarHeader;