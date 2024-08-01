// Utils
import cn from "@/utils/tailwindCn";

// Types
import type { FormGroupProps } from "@/types/Components/Global/Forms";

const FormGroup: RC<FormGroupProps> = (props) => {
  return (
    <div
      {...props}
      className={cn(
        'flex flex-col gap-1',
        props.className
      )}>
      {props.children}
    </div>
  )
}

export default FormGroup;