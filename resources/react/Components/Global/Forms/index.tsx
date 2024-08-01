// Components
import FormErrors from "./FormErrors";
import FormInput from "./FormInput";
import FormGroup from "./FormGroup";
import FormGroupDouble from "./FormGroupDouble";
import FormCheck from "./FormCheck";

// Utils
import cn from "@/utils/tailwindCn";

// Types
import type { FormProps } from "@/types/Components/Global/Forms";

const Form: RC<FormProps> = (props) => {
  return (
    <form
      {...props}
      className={cn(`flex flex-col gap-2`, props.className)}
    >
      {props.children}
    </form>
  )
}

export default Form;

export {
  FormErrors,
  FormInput,
  FormGroup,
  FormGroupDouble,
  FormCheck
}