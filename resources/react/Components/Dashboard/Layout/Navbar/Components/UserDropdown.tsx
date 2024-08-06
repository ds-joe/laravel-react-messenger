// Dependencies
import { usePage, router } from "@inertiajs/react";

const UserDropdown: RC = () => {
  const { page_words } = usePage().props as PageProps;

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
            src="https://scontent.fcai21-4.fna.fbcdn.net/v/t39.30808-6/278927394_1473970733075023_3800524179922861178_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=XtS_8WKpzAEQ7kNvgHPWcO3&_nc_ht=scontent.fcai21-4.fna&oh=00_AYBxWz7r81tdctPQBfTqpoZltSeUzz9-fF6YnxmfYMQ6vg&oe=66B7CA4E" />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li>
          <a className="justify-between">
            {page_words?.settings}
            <span className="badge">{page_words?.new}</span>
          </a>
        </li>
        <li onClick={handleLogout}><a>{page_words?.logout}</a></li>
      </ul>
    </div>
  )
}

export default UserDropdown;