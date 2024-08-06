// Components
import ChatSidebar from "@/Components/Dashboard/Layout/Chat/ChatsSidebar";

const ChatLayout: RPL = ({ children }) => {

  // window.Echo.join("online")
  //   .here(() => {
  //   }).joining(() => {

  //   }).leaving(() => {

  //   });

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