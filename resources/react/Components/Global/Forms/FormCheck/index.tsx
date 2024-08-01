// Utils
import cn from "@/utils/tailwindCn";

// Types
import type { FormCheckProps } from "@/types/Components/Global/Forms";

const FormCheck: RC<FormCheckProps> = (props) => {
  return (
    <label className="cursor-pointer label gap-1 w-fit">
      <input
        {...props}
        type="checkbox"
        className={cn('checkbox', props.className)}
      />
      <span className="label-text">{props?.label}</span>
    </label>
  )
}

export default FormCheck;