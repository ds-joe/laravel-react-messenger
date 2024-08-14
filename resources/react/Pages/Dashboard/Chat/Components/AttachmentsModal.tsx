// Dependencies
import { usePage } from "@inertiajs/react";

// Services
import FileService from "@/Services/File/File";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { setAttachments } from "@/redux/slicers/chats";
import { RootState } from "@/redux/store";

// Components
import ChatMessageInput from "./ChatMessageInput";

// Icons
import { FaRegFileAlt, FaRegTrashAlt } from "react-icons/fa";

const AttachmentsModal: RC = () => {
  const { page_words } = usePage().props as PageProps;
  const dispatch = useDispatch();
  const { attachments: stateAttachments } = useSelector((state: RootState) => state.chatsSlice);
  const fileService = new FileService();

  /**
   * Remove attachment
   * 
   * @param { number } index
   * @return { void }
   */
  const handleRemoveAttachment = (index: number): void => {
    const oldAttachments = stateAttachments ?? [];
    const newAttachments = [...oldAttachments.slice(0, index), ...oldAttachments.slice(index + 1)];
    dispatch(setAttachments(newAttachments));
  }

  return (
    <div className="modal" role="dialog" id="message_attachments_modal">
      <div className="modal-box">
        <h3 className="text-lg font-bold">{page_words?.attachments}</h3>

        <section className="flex flex-col mt-4 w-full">

          {
            stateAttachments?.map((file) => (
              <div className="flex items-center py-4">
                {
                  fileService.isImage(file) ? (
                    <img
                      src={fileService.getFileUrl(file)}
                      alt={file.name}
                      className="w-10 h-10 object-cover mr-3"
                    />
                  ) : fileService.isVideo(file) ? (
                    <video
                      className="w-10 h-10 object-cover mr-3"
                      src={fileService.getFileUrl(file)}
                    ></video>
                  ) : (
                    <FaRegFileAlt
                      className="w-10 h-10 mr-2"
                    />
                  )
                }

                <div className="flex flex-col gap-1">
                  <p className="text-sm font-semibold">{file.name}</p>
                  <p className="text-sm">{fileService.getFileSizeMB(file).toFixed(4)} MB</p>
                </div>
                <div className=" ml-auto">
                  <button
                    className="btn btn-xs btn-ghost text-lg"
                    onClick={() => handleRemoveAttachment(stateAttachments.indexOf(file))}
                  >
                    <FaRegTrashAlt />
                  </button>
                </div>
              </div>
            ))
          }
        </section>

        <div className="mt-2 flex items-center gap-2">
          <ChatMessageInput hasRecord={false} />
        </div>
      </div>
    </div>
  )
}

export default AttachmentsModal;