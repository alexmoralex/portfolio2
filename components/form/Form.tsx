import axios from "axios";
import { useForm, SubmitHandler } from "react-hook-form";
import { notify, onFormErrors } from "utils/notifications";

type Inputs = {
  email: string,
  name: string,
  subject: string,
  message: string,
};

const emailPattern = {
  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
  message: "invalid email address"
}

const onSubmit: SubmitHandler<Inputs> = async (data) => {
  const response = await axios({
    url: '/api/contact',
    method: 'POST',
    data,
  })

  notify('form submitted', 'SUCCESS')
}

export default function Form() {
  const { register, handleSubmit } = useForm<Inputs>();
  
  return(
    <form onSubmit={handleSubmit(onSubmit, onFormErrors)}>
      <div className="flex flex-wrap gap-6">
        <div className="flex gap-6 w-full flex-wrap md:flex-nowrap">
          <input className="field" type="email" placeholder="Email" {...register("email", { required: true, pattern: emailPattern })} />
          <input className="field" type="text" placeholder="Name" {...register("name", { required: true })} />
        </div>
        <input className="field" type="text" placeholder="Subject" {...register("subject", { required: true })} />
        <textarea className="field resize-none h-28" placeholder="Message" {...register("message", { required: true })} />
        <div className="ml-auto w-full md:w-1/2 md:pl-6">
          <button type="submit" className="bg-pine-tree text-white p-2 rounded-lg w-full">SEND</button>
        </div>
      </div>
    </form>
  )
}
