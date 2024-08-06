// Layout
import DashboardLayout from "@/Layouts/Dashboard";


const Home: RP = () => {
  return (
    <section className="flex">
      Chat page
    </section>
  );
}

Home.layout = (page) => <DashboardLayout children={page} title="Chat" />

export default Home;
