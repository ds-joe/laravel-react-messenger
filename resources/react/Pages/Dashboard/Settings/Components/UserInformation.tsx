// Dependencies
import { usePage, router } from "@inertiajs/react";

// Components
import UserAvatar from "@/Components/Dashboard/Layout/Chat/UserAvatar";

// Hooks
import useToast from "@/hooks/useToast";

// Types 
import type { ChangeEvent } from "react";

const UserInformation: RC = () => {
  const { page_words, auth } = usePage().props as PageProps;
  const toast = useToast();

  const handleUpdateAvatar = (e: ChangeEvent<HTMLInputElement>) => {
    const avatar = e.target.files ? e.target.files[0] : null;
    if (avatar) {
      router.post(route('dashboard.settings.update.userInformation'), {
        ...auth.user,
        avatar
      }, {
        onError: (errors) => {
          toast(errors?.avatar, 'error');
        }
      })
    }
  }

  return (
    <div className="w-full flex items-center justify-center flex-col ">
      <input type="file" hidden id="user-avatar-input" onChange={handleUpdateAvatar} />
      <label htmlFor="user-avatar-input" tabIndex={0} role="button" className="avatar hover:scale-95 transition-all">
        <UserAvatar
          placeholderName={auth.user.full_name}
          avatar={auth.user.avatar as string}
          online={true}
          className="w-36 text-4xl"
        />
      </label>
      <h1 className="text-2xl font-semibold mt-2">{auth.user.full_name}</h1>
      <p className="text-sm font-semibold mt-2 text-base-content/70">{page_words?.member_since}: {auth.user.created_at}</p>
    </div>
  )
}

export default UserInformation;