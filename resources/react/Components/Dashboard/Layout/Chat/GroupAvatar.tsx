// Utils
import cn from "@/utils/tailwindCn";

// Icons
import { HiUsers } from "react-icons/hi2";

// Types
import type { ComponentPropsWithoutRef } from "react";

const GroupAvatar: RC<ComponentPropsWithoutRef<'div'>> = (props) => {
  return (
    <div
      {...props}
      className={cn(`min-w-8 min-h-8 rounded-full bg-base-200 flex items-center justify-center shadow`, props.className)}
    >
      <HiUsers />
    </div>
  )
}

export default GroupAvatar;