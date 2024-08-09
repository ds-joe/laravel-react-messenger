// Dependencies
import { useState } from "react";

// Layout
import DashboardLayout from "@/Layouts/Dashboard";

// Components
import TabsList from "./Components/TabsList";
import UserInformation from "./Components/UserInformation";
import PersonalInformationTab from "./Components/PersonalInformationTab";
import GlobalTab from "./Components/GlobalTab";
import Card, { CardBody } from "@/Components/Global/Cards";


const Settings: RP = () => {
  const [currentTab, setCurrentTab] = useState<string>("personal-information");

  // Handle Change tab
  const handleChangeTab = (tab: string) => {
    setCurrentTab((_) => tab);
  }

  return (
    <section className="container py-10">

      <UserInformation />
      <div className="flex items-start justify-center h-full w-full mt-8 gap-4 lg:gap-2 lg:flex-row flex-col">
        <TabsList currentTab={currentTab} handleChangeTab={handleChangeTab} />
        <Card className="w-full lg:max-w-2xl min-h-72">
          <CardBody>
            {currentTab == 'personal-information' && <PersonalInformationTab />}
            {currentTab == 'global' && <GlobalTab />}
          </CardBody>
        </Card>
      </div>
    </section>
  )
}

Settings.layout = (page) => <DashboardLayout children={page} title={page.props?.page_words?.settings} />

export default Settings;