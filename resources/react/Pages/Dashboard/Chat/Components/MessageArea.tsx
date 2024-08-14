// Dependencies
import { useEffect } from "react";

// Redux
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

// Components
import ChatMessageInput from "./ChatMessageInput";
import AttachmentsModal from "./AttachmentsModal";

// Utils
import cn from "@/utils/tailwindCn";


const MessageArea: RC = () => {
  const { attachments: stateAttachments } = useSelector((state: RootState) => state.chatsSlice);

  // Toggle attachment modal
  useEffect(() => {
    if (stateAttachments && stateAttachments.length > 0) {
      location.hash = 'message_attachments_modal';
    } else {
      location.hash = '';
    }
  }, [stateAttachments])

  return (
    <div className={cn(
      'w-full flex items-center px-2 bg-base-100 border-t border-t-base-content/20 min-h-[--chat-layout-message-area-height] max-h-[--chat-layout-message-area-height]',
      'flex items-centedarkr gap-2'
    )}>
      {(stateAttachments && stateAttachments.length > 0) && <AttachmentsModal />}
      <ChatMessageInput hasRecord={true} />
    </div>
  )
}

export default MessageArea;