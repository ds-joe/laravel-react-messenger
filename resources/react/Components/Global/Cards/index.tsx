// Components
import CardHeader from "./CardHeader";
import CardBody from "./CardBody";
import CardTitle from "./CardTitle";
import CardSubtitle from "./CardSubtitle";
import CardActions from "./CardActions";

// Utils
import cn from "@/utils/tailwindCn";

// Types
import { CardProps } from "@/types/Components/Global/Cards";


const Card: RC<CardProps> = (props) => {
  return (
    <div
      {...props}
      className={cn('card border border-base-content/20 bg-base-100', props.className)}>
      {props.children}
    </div>
  )
}

export default Card;

export {
  CardHeader,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardActions
}