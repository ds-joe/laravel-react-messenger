// Components
import { Head } from "@inertiajs/react";

// Providers
import ThemeProvider from "@/Providers/Messenger/ThemeProvider";

const MessengerLayout: RPL = ({ children, title }) => {
  return (
    <ThemeProvider>
      <Head title={title} />
      {children}
    </ThemeProvider>
  )
}

export default MessengerLayout;
