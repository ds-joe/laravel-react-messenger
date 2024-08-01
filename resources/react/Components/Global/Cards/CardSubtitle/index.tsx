// Utils
import cn from "@/utils/tailwindCn";

// Types
import { CardSubtitleProps } from "@/types/Components/Global/Cards";


const CardSubtitle: RC<CardSubtitleProps> = (props) => {
  return (
    <p
      {...props}
      className={cn('card-title text-lg font-normal', props.className)}>
      {props.children}
    </p>
  )
}

export default CardSubtitle;