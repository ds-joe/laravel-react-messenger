// Components
import { Head } from "@inertiajs/react";
import BackgroundBeams from "@/Components/Global/Aceternity/BackgroundBeams";
import Navbar from "@/Components/Global/Layout/Navbar";

// Providers
import NotificationProvider from "@/Providers/Global/NotificationProvider";

const AuthLayout: RPL = ({ children, title }) => {
  return (
    <main className="h-screen w-full font-rubik">
      <Head title={title} />
      <NotificationProvider>
        <BackgroundBeams className="bg-gradient-to-tr from-base-100 to-base-200" />
        <Navbar />
        <section className="relative flex items-center justify-center flex-col py-10 " >
          <div className="container">
            {children}
          </div>
        </section>
      </NotificationProvider>
    </main>
  )
}

export default AuthLayout;
