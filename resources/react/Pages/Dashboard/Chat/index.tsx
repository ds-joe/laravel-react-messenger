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
    {
      message: "I'm good, thanks! How about you?",
      date: "Jun 4, 2024, 10:31 AM",
      avatar: "https://fakeimg.pl/50x50/?text=A2&font=lobster",
      position: "end",
    },
    {
      message: "Doing well, just working on a project. It's been pretty busy lately.",
      date: "Jun 4, 2024, 10:32 AM",
      avatar: "https://fakeimg.pl/50x50/?text=A1&font=lobster",
      position: "start",
    },
    {
      message: "I can relate! What project are you working on?",
      date: "Jun 4, 2024, 10:33 AM",
      avatar: "https://fakeimg.pl/50x50/?text=A2&font=lobster",
      position: "end",
    },
    {
      message: "It's a web app for a client. Lots of new features to implement.",
      date: "Jun 4, 2024, 10:34 AM",
      avatar: "https://fakeimg.pl/50x50/?text=A1&font=lobster",
      position: "start",
    },
    {
      message: "That sounds exciting! Need any help?",
      date: "Jun 4, 2024, 10:35 AM",
      avatar: "https://fakeimg.pl/50x50/?text=A2&font=lobster",
      position: "end",
    },
    {
      message: "Maybe later! I appreciate the offer, though.",
      date: "Jun 4, 2024, 10:36 AM",
      avatar: "https://fakeimg.pl/50x50/?text=A1&font=lobster",
      position: "start",
    },
    {
      message: "No problem. Just let me know!",
      date: "Jun 4, 2024, 10:37 AM",
      avatar: "https://fakeimg.pl/50x50/?text=A2&font=lobster",
      position: "end",
    },
  ];


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