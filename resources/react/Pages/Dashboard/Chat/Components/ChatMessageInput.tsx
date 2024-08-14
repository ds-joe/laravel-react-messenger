// Dependencies
import { usePage } from "@inertiajs/react";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { setMessage, setAttachments } from "@/redux/slicers/chats";
import { RootState } from "@/redux/store";

// Components
import EmojiPicker, { Theme } from 'emoji-picker-react';

// Icons
import { FaRegFaceSmile } from "react-icons/fa6";
import { FaMicrophone } from "react-icons/fa";
import { MdAttachFile } from "react-icons/md";
import { IoIosRocket } from "react-icons/io";

// Types
import type { ChangeEvent } from "react";
type ChatMessageInputProps = {
  hasRecord?: boolean; // Enabled voice message
}

const ChatMessageInput: RC<ChatMessageInputProps> = ({ hasRecord }) => {
  const { page_words } = usePage().props as PageProps;
  const dispatch = useDispatch();
  const { message: stateMessage, attachments: stateAttachments } = useSelector((state: RootState) => state.chatsSlice);

  /**
   * Check if voice message enabled
   * 
   * @return { boolean }
   */
  const voiceMessageEnabled = (): boolean => {
    if (hasRecord) {
      if ((stateMessage == null || stateMessage == "") && (!stateAttachments || stateAttachments.length == 0)) {
        return true;
      }
    }
    return false;
  }

  /**
   * Handle add attachments.
   * 
   * @param { ChangeEvent<HTMLInputElement> } e
   * @return { void }
   */
  const handleAddAttachments = (e: ChangeEvent<HTMLInputElement>): void => {
    const files = e.target.files ?? [];
    const oldAttachments = stateAttachments ?? [];
    dispatch(setAttachments([...oldAttachments, ...files]));
  }

  /**
   * Handle set message.
   * 
   * @param { string } message
   * @param { boolean } emoji
   * @return { void }
   */
  const handleSetMessage = (message: string, emoji: boolean = false): void => {
    dispatch(setMessage({ message, emoji }));
  }

  return (
    <>
      <input
        type="file"
        hidden
        id="message-attachments"
        multiple
        onChange={handleAddAttachments}
      />

      {/* Start Shortcut icons */}
      <div className="flex items-center gap-2 w-fit">
        <label htmlFor="message-attachments" className="btn btn-ghost btn-xs text-2xl px-0">
          <MdAttachFile />
        </label>
        <div className="dropdown dropdown-top dropdown-start flex items-center">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-xs text-xl px-0 py-0 m-0"><FaRegFaceSmile /></div>
          <ul tabIndex={0} className="dropdown-content menu z-[1] p-0 w-fit ">
            <EmojiPicker
              lazyLoadEmojis={true}
              theme={Theme.DARK}
              onEmojiClick={(emoji) => handleSetMessage(emoji.emoji, true)}
            />
          </ul>
        </div>
      </div>
      {/* End Shortcut icons */}
      {/* Start Message Area */}
      <div className="w-full join">
        <input
          type="text"
          placeholder={page_words?.type_a_message}
          onChange={(e) => handleSetMessage(e.target.value)}
          value={stateMessage}
          className="w-full input input-bordered h-[2.5rem] join-item"
        />
        <button className="btn btn-primary btn-sm text-lg join-item h-[2.5rem]">
          {
            voiceMessageEnabled() ? (
              <FaMicrophone />
            ) : (
              <IoIosRocket />
            )
          }
        </button>
      </div>



    </>
  )
}

export default ChatMessageInput;