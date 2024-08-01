// Utils
import cn from "@/utils/tailwindCn";

// Types
import { CardActionsProps } from "@/types/Components/Global/Cards";

const CardActions: RC<CardActionsProps> = (props) => {
  return (
    <div
      {...props}
      className={cn('card-actions', props.className)}>
      {props.children}
    </div>
  )
}

export default CardActions;