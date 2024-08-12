// Utils
import cn from "@/utils/tailwindCn";

// Icons
import { HiBuildingOffice } from "react-icons/hi2";

// Types
import type { ComponentPropsWithoutRef } from "react";

const GroupAvatar: RC<ComponentPropsWithoutRef<'div'>> = (props) => {
  return (
    <div
      {...props}
      className={cn(`min-w-12 min-h-12 rounded-full bg-base-200 flex items-center justify-center shadow`, props.className)}
    >
      <HiBuildingOffice />
    </div>
  )
}

export default GroupAvatar;