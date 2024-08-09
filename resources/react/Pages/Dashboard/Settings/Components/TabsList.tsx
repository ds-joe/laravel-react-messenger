// Dependencies
import { usePage } from "@inertiajs/react";


// Components
import Card from "@/Components/Global/Cards";

// Icons
import { HiOutlineUser, HiOutlineCog } from "react-icons/hi2";

// Types
type TabsListProps = {
  handleChangeTab: (tab: string) => void;
  currentTab: string
}

const TabsList: RC<TabsListProps> = ({ handleChangeTab, currentTab }) => {
  const { page_words } = usePage().props as PageProps;
  const activeClass = 'bg-primary text-primary-content font-semibold';

  return (
    <Card className="h-full max-md:w-full">
      <ul className="menu">
        <li className={`${currentTab == 'personal-information' && activeClass}`} onClick={() => handleChangeTab('personal-information')}>
          <a href="#"><HiOutlineUser /> {page_words?.personal_information}</a>
        </li>
        <li className={`${currentTab == 'global' && activeClass}`} onClick={() => handleChangeTab('global')}>
          <a href="#"><HiOutlineCog /> {page_words?.global}</a>
        </li>
      </ul>
    </Card>

  )
}

export default TabsList;