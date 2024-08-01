// Components
import { Head } from "@inertiajs/react";
import BackgroundBeams from "@/Components/Global/Aceternity/BackgroundBeams";

// Providers
import NotificationProvider from "@/Providers/Global/NotificationProvider";

const AuthLayout: RPL = ({ children, title }) => {
  return (
    <main className="">
      <Head title={title} />
      <NotificationProvider>
        <BackgroundBeams className="bg-gradient-to-tr from-base-100 to-base-200" />
        {children}
      </NotificationProvider>
    </main>
  )
}

export default AuthLayout;
