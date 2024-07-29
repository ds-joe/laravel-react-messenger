// Layout
import MessengerLayout from "@/Layouts/Messenger";

const Home: RP = () => {
  return (
    <>messenger page </>
  )
}

Home.layout = (page) => <MessengerLayout children={page} title="Messenger" />

export default Home;
