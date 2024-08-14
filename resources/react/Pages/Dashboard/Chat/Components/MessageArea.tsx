// Dependencies
import { useForm } from "@inertiajs/react";

// Components
import EmojiPicker, { Theme, type EmojiClickData } from 'emoji-picker-react';

// Utils
import cn from "@/utils/tailwindCn";

// Icons
import { FaRegFaceSmile } from "react-icons/fa6";
import { IoImageOutline } from "react-icons/io5";
import { FaMicrophone } from "react-icons/fa";
import { MdAttachFile } from "react-icons/md";
import { IoIosRocket } from "react-icons/io";

const MessageArea: RC = () => {
  const { data, setData } = useForm({
    message: "",
    attachments: []
  });

  // Handle display microphone icon.
  const isVoiceMessage = () => (data.message == "" || !data.message) && data.attachments.length == 0;

  // Handle Emoji change
  const handleEmojiChange = (emoji: EmojiClickData) => {
    setData((prevData) => ({
      ...prevData,
      message: prevData.message + emoji.emoji,
    }));
  }

  return (
    <div className={cn(
      'w-full flex items-center px-2 bg-base-100 border-t border-t-base-content/20 min-h-[--chat-layout-message-area-height] max-h-[--chat-layout-message-area-height]',
      'flex items-centedarkr gap-2'
    )}>
      {/* Start Shortcut icons */}
      <div className="flex items-center gap-2 w-fit">
        <button className="btn btn-ghost btn-xs text-2xl px-0">
          <MdAttachFile />
        </button>
        <button className="btn btn-ghost btn-xs text-2xl px-0">
          <IoImageOutline />
        </button>
      </div>
      {/* End Shortcut icons */}
      {/* Start Message Area */}
      <div className="w-full">
        <input
          type="text"
          placeholder={"Type a message."}
          onChange={(e) => setData('message', e.target.value)}
          value={data.message}
          className="w-full input input-bordered h-[2.7rem]"
        />
      </div>
      {/* End Message Area */}

      {/* Start Send Button */}
      <div className="flex items-center gap-2">


        <div className="dropdown dropdown-top dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-xs text-2xl h-fit w-fit px-0"><FaRegFaceSmile /></div>
          <ul tabIndex={0} className="dropdown-content menu z-[1] p-0 w-fit ">
            <EmojiPicker
              lazyLoadEmojis={true}
              theme={Theme.DARK}
              onEmojiClick={handleEmojiChange}
            />
          </ul>
        </div>
        <button className="btn btn-primary btn-sm h-[2.5rem] rounded-full text-lg">
          {
            isVoiceMessage() ? (
              <FaMicrophone />
            ) : (
              <IoIosRocket />
            )
          }
        </button>
      </div>
      {/* End Send Button */}

    </div>
  )
}

export default MessageArea;