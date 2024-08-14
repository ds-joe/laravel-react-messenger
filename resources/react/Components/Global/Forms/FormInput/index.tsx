// Utils
import cn from "@/utils/tailwindCn";

// Types
import type { FormInputProps } from "@/types/Components/Global/Forms";

const FormInput: RC<FormInputProps> = (props) => {
  return (
    <label className={cn(`form-control w-full`)}>
      {
        props.label && <div className="label">
          <span className="label-text">{props?.label}</span>
        </div>
      }
      {
        props.freeze ? (
          <input
            type="button"
            {...props as any}
            className={cn(
              props.type == 'file' ? " file-input file-input-sm file-input-bordered" : "input input-sm  input-bordered",
              `w-full text-start ${props.error && "input-error"}`,
              props.className
            )
            } />
        ) : (
          <input
            {...props}
            className={cn(
              props.type == 'file' ? " file-input file-input-sm file-input-bordered" : "input input-sm  input-bordered",
              `w-full ${props.error && "input-error"}`,
              props.className
            )} />
        )
      }
      {
        props.helperText && <div className="label">
          <span className="label-text-alt">{props.helperText}</span>
        </div>
      }
    </label>
  )
}

export default FormInput;