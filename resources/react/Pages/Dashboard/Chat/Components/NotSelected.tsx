// Dependencies
import { usePage } from "@inertiajs/react";

// Icons
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";

const NotSelected: RC = () => {
  const { page_words } = usePage().props as PageProps;

  return (
    <div className="w-full min-h-[var(--dashboard-layout-content-height)] max-h-[var(--dashboard-layout-content-height)] flex items-center justify-center flex-col gap-2">
      <HiOutlineChatBubbleLeftRight className="text-8xl" />
      <h3 className="text-2xl font-medium">{page_words?.no_chat_selected}</h3>
    </div>
  )
}

export default NotSelected;