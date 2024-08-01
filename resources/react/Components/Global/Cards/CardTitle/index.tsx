// Utils
import cn from "@/utils/tailwindCn";

// Types
import { CardTitleProps } from "@/types/Components/Global/Cards";


const CardTitle: RC<CardTitleProps> = (props) => {
  return (
    <h2
      {...props}
      className={cn('card-title', props.className)}>
      {props.children}
    </h2>
  )
}

export default CardTitle;