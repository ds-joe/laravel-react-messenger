// Layout
import MessengerLayout from "@/Layouts/Messenger";

const Home: RP = () => {
  return (
    <>home page </>
  )
}

Home.layout = (page) => <MessengerLayout children={page} />

export default Home;
