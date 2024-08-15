// Utils
import cn from "@/utils/tailwindCn";

// Types
import type { UserAvatarProps } from "@/types/Components/Dashboard/Chat/UserAvatar";

const UserAvatar: RC<UserAvatarProps> = (props) => {
  return (
    props.avatar ? (
      <div className={cn(`avatar ${props.online ? "online" : 'offline'}`)}>
        <div className={cn('rounded-full', props.className)}>
          <img
            src={props.avatar}
            alt={props.placeholderName}
          />
        </div>
      </div>
    ) : (
      <div className={cn(`avatar placeholder ${props.online ? "online" : 'offline'}`)}>
        <div className={cn('bg-neutral text-neutral-content  rounded-full', props.className)}>
          <span>{props.placeholderName[0]}</span>
        </div>
      </div>
    )
  )
}

export default UserAvatar;