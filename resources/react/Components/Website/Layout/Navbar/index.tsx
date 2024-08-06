// Dependencies
import { Link, usePage } from "@inertiajs/react";

// Icons
import { LuUserPlus2 } from "react-icons/lu";
import { SiAmazonapigateway } from "react-icons/si";

const Navbar: RC = () => {
  const { page_words } = usePage().props as PageProps;

  return (
    <div className="navbar z-10 relative">
      <div className="container">
        <div className="flex-1">
          <Link href="/" className="text-xl font-semibold">{import.meta.env.VITE_APP_NAME}</Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 flex items-center gap-3">
            <li><Link href={route('login')} className="btn btn-ghost btn-sm"><SiAmazonapigateway /> {page_words?.sign_in}</Link></li>
            <li><Link href={route('register')} className="btn btn-primary btn-sm"><LuUserPlus2 /> {page_words?.sign_up}</Link></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar;