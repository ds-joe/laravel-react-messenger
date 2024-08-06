// Layout
import DashboardLayout from "@/Layouts/Dashboard"
import ChatLayout from "@/Layouts/Chat";

// Components
import ChatNavbar from "./Components/ChatNavbar";
import MessageArea from "./Components/MessageArea";

const Chat: RP = () => {
  return (
    <div className="w-full relative max-h-full overflow-y-auto">
      <ChatNavbar />
      <div className="flex flex-col overflow-y-auto min-h-[var(--chat-layout-content-height)] max-h-[var(--chat-layout-content-height)]">
        {
          Array.from({ length: 40 }, (_, k) => (
            <div className="card" key={k}>
              <div className="card-body">
                {k}
              </div>
            </div>
          ))
        }
      </div>
      <MessageArea />
    </div>
  )
}

Chat.layout = (page) => {
  console.log(page.props)
  return (
    <DashboardLayout title={page.props.page_words?.chat}>
      <ChatLayout children={page} />
    </DashboardLayout>
  )
};

export default Chat;


/*  */