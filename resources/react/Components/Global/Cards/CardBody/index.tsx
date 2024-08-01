// Utils
import cn from "@/utils/tailwindCn";

// Types
import { CardBodyProps } from "@/types/Components/Global/Cards";


const CardBody: RC<CardBodyProps> = (props) => {
  return (
    <div
      {...props}
      className={cn('card-body py-6 px-5', props.className)}>
      {props.children}
    </div>
  )
}

export default CardBody;