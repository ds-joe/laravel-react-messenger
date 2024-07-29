// Components
import { Head } from "@inertiajs/react";

// Providers
import NotificationProvider from "@/Providers/Global/NotificationProvider";

// Assets
import "@/styles/style.scss";

const AuthLayout: RPL = ({ children, title }) => {
  return (
    <main className=" bg-body-secondary min-vh-100 w-100">
      <Head title={title} />
      <NotificationProvider>
        {children}
      </NotificationProvider>
    </main>
  )
}

export default AuthLayout;
