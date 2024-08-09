// Components
import { Head } from "@inertiajs/react";
import Navbar from "@/Components/Dashboard/Layout/Navbar";

// Providers
import ThemeProvider from "@/Providers/Messenger/ThemeProvider";
import NotificationProvider from "@/Providers/Global/NotificationProvider";

const DashboardLayout: RPL = ({ children, title }) => {
  return (
    <main className="min-h-[var(--dashboard-layout-height)] bg-base-200 flex flex-col">
      <ThemeProvider>
        <NotificationProvider>
          <Head title={title} />
          <Navbar />
          <section className=" w-full min-h-[var(--dashboard-layout-content-height)]">
            {children}
          </section>
        </NotificationProvider>
      </ThemeProvider>
    </main>
  )
}

export default DashboardLayout;
