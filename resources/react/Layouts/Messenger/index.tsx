
// Providers
import ThemeProvider from "@/Providers/Messenger/ThemeProvider";

const MessengerLayout: RPO = ({ children }) => {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  )
}

export default MessengerLayout;
