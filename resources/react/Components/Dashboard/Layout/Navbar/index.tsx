// Dependencies
import { usePage } from "@inertiajs/react";

// Components
import UserDropdown from "./Components/UserDropdown";

const Navbar: RC = () => {
  // @ts-ignore just ignored because it does not used.
  const { page_words } = usePage().props as PageProps;

  return (
    <div className="navbar py-0 bg-base-100 border-b border-b-base-content/20 min-h-[var(--dashboard-navbar-height)] h-[var(--dashboard-navbar-height)]">
      <div className="container">
        <div className="flex-1">
          <a className="text-xl font-semibold">{import.meta.env.VITE_APP_NAME}</a>
        </div>
        <div className="flex-none gap-2">
          <UserDropdown />
        </div>
      </div>
    </div>
  )
}


export default Navbar;