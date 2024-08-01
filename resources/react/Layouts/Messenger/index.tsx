// Components
import { Head } from "@inertiajs/react";
import ChatArea from "@/Components/Messenger/Layout/ChatArea";
import Chats from "@/Components/Messenger/Layout/Chats";
import {
  Row,
  Card

} from "react-bootstrap";

// Providers
import ThemeProvider from "@/Providers/Messenger/ThemeProvider";

const MessengerLayout: RPL = ({ children, title }) => {
  return (
    <ThemeProvider>
      <Head title={title} />
      <Card className=" min-vh-100">
        <Row className=" h-100">
          <Chats />
          <ChatArea />
          {children}
        </Row>
      </Card>
    </ThemeProvider>
  )
}

export default MessengerLayout;
