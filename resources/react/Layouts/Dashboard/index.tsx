// Components
import { Head } from "@inertiajs/react";
import Navbar from "@/Components/Dashboard/Layout/Navbar";

// Providers
import ThemeProvider from "@/Providers/Messenger/ThemeProvider";

const DashboardLayout: RPL = ({ children, title }) => {
  return (
    <main className="h-[var(--dashboard-layout-height)] bg-base-200 flex flex-col">
      <ThemeProvider>
        <Head title={title} />
        <Navbar />
        <section className="overflow-hidden w-full h-[var(--dashboard-layout-content-height)]">
          {children}
        </section>
      </ThemeProvider>
    </main>
  )
}

export default DashboardLayout;
