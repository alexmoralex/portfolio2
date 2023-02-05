import toast from 'react-hot-toast';
import { FieldError, FieldErrors } from "react-hook-form";

export const notify = async (data: string, type: string) => {

  switch (type) {
    case 'ERROR':
      return toast.error(data)

    case 'CUSTOM':
      return toast.custom(data)

    case 'SUCCESS':
      return toast.success(data)
  
    default:
      return toast(data)

  }     
}

export const onFormErrors = (errors: FieldErrors) => {
  Object.keys(errors).map(data => {
    const error = errors[data] as FieldError
    if (!error) return;
    
    if('message' in error === false) return onFormErrors(error as FieldErrors);

    const message = error.message || `${data} ${error.type}`

    notify(message, 'ERROR')
  });
}
