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

const Chat: RP = () => {
  const chatStatus = useSelector((state: RootState) => state.chatsSlice.selected);

  return (
    <div className="w-full relative max-h-full overflow-y-auto">
      {
        chatStatus ? (
          <Fragment>
            <ChatNavbar />
            <div className="flex flex-col overflow-y-auto min-h-[var(--chat-layout-content-height)] max-h-[var(--chat-layout-content-height)]">
              {/* {
          Array.from({ length: 40 }, (_, k) => (
            <div className="card" key={k}>
              <div className="card-body">
                {k}
              </div>
            </div>
          ))
        } */}
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