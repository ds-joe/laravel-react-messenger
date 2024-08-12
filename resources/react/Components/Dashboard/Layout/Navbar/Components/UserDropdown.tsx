// Dependencies
import { usePage, router, Link } from "@inertiajs/react";

// Assets
import userAvatar from "~/images/auth/user-avatar.png";

const UserDropdown: RC = () => {
  const { page_words, auth } = usePage().props as PageProps;

  // Handle user logout
  const handleLogout = () => {
    router.post(route('auth.logout'));
  }

  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Profile photo"
            src={auth.user.avatar as string ?? userAvatar} />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow">
        <li>
          <Link href={route("dashboard.settings")} preserveState={true} className="justify-between">
            {page_words?.settings}
            <span className="badge">{page_words?.new}</span>
          </Link>
        </li>
        <li>
          <Link href={route("dashboard.chat")} preserveState={true} className="justify-between">
            {page_words?.chat}
          </Link>
        </li>
        <li onClick={handleLogout}><a>{page_words?.logout}</a></li>
      </ul>
    </div>
  )
}

export default UserDropdown;