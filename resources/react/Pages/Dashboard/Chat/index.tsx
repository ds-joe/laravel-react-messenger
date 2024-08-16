// Dependencies
import { Fragment } from "react";

// Layout
import DashboardLayout from "@/Layouts/Dashboard"
import ChatLayout from "@/Layouts/Chat";

// Redux
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

// Components
import ChatNavbar from "./Components/ChatNavbar";
import MessageArea from "./Components/MessageArea";
import NotSelected from "./Components/NotSelected";
import ChatBubble from "./Components/ChatBubble";

const Chat: RP = () => {
  const chatStatus = useSelector((state: RootState) => state.chatsSlice.selected);

  // Just fake data for test
  const chatData = [
    {
      message: "Hey, how are you?",
      date: "Jun 4, 2024, 10:30 AM",
      avatar: "https://fakeimg.pl/50x50/?text=A1&font=lobster",
      position: "start",
    },
  ]




  return (
    <div className="w-full relative max-h-full overflow-y-auto">
      {
        chatStatus ? (
          <Fragment>
            <ChatNavbar />
            <div className="flex flex-col overflow-y-auto min-h-[var(--chat-layout-content-height)] max-h-[var(--chat-layout-content-height)] px-4 py-3">
              {
                chatData.map((item) => (
                  <ChatBubble
                    key={item.date}
                    date={item.date}
                    message={item.message}
                    avatar={item.avatar}
                    position={item.position as "start" | 'end'}
                  />
                ))
              }
            </div>
            <MessageArea />
          </Fragment>
        ) : (
          <NotSelected />
        )
      }
    </div>
  )
}

Chat.layout = (page) => {
  return (
    <DashboardLayout title={page.props.page_words?.chat}>
      <ChatLayout children={page} />
    </DashboardLayout>
  )
};

export default Chat;


/*  */