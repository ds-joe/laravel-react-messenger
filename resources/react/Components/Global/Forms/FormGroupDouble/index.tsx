// Utils
import cn from "@/utils/tailwindCn";

// Types
import type { FormGroupDoubleProps } from "@/types/Components/Global/Forms";


const FormGroupDouble: RC<FormGroupDoubleProps> = (props) => {
  return (
    <div
      {...props}
      className={cn('grid lg:grid-cols-2 gap-2', props.className)}>
      {props.children}
    </div>
  )
}

export default FormGroupDouble;