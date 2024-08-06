// Components
import { Head } from "@inertiajs/react";

// Providers
import ThemeProvider from "@/Providers/Messenger/ThemeProvider";

const DashboardLayout: RPL = ({ children, title }) => {
  return (
    <main className="min-h-screen">
      <ThemeProvider>
        <Head title={title} />
        <section className="relative">
          {children}
        </section>
      </ThemeProvider>
    </main>
  )
}

export default DashboardLayout;
