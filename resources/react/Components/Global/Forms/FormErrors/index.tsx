// Icons
import { TiInfoOutline } from "react-icons/ti";

// Types
import type { FormErrorsProps } from "@/types/Components/Global/Forms";


const FormErrors: RC<FormErrorsProps> = ({ errors }) => {

  return errors && Object.keys(errors).length > 0 ? (
    <div className="alert alert-error text-sm py-2 rounded-md">
      <ul>
        {
          Object.entries(errors).map(([key, value]) => (
            <li
              key={`error-${key}`}
              className="flex items-center gap-1">
              <TiInfoOutline /> {value}
            </li>
          ))
        }
      </ul>
    </div>
  ) : <></>
}

export default FormErrors;