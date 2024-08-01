// Utils
import cn from "@/utils/tailwindCn";

// Types
import { CardHeaderProps } from "@/types/Components/Global/Cards";


const CardHeader: RC<CardHeaderProps> = (props) => {
  return (
    <div
      {...props}
      className={cn('card-body py-4 px-5', props.className)}>
      {props.children}
    </div>
  )
}

export default CardHeader;