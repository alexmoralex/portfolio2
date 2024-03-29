import axios from "axios";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { notify, onFormErrors } from "utils/notifications";

type Inputs = {
  email: string,
  name: string,
  subject: string,
  message: string,
};

type Content = {
  email: string,
  name: string,
  subject: string,
  message: string,
  sendButton: string,
  required: string,
  invalid: string,
  sent: string,
}

export default function Form({ content }: { content: Content }) {
  const { register, handleSubmit } = useForm<Inputs>();
  const [loading, setloading] = useState(false)

  const emailPattern = {
    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    message: `${content.email}: ${content.invalid}`
  }
  
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setloading(true)
    await axios({
      url: '/api/contact',
      method: 'POST',
      data,
    })
  
    setloading(false)
    notify(content.sent, 'SUCCESS')
  }
  
  return(
    <form onSubmit={handleSubmit(onSubmit, onFormErrors)}>
      <div className="flex flex-wrap gap-6">
        <div className="flex gap-6 w-full flex-wrap md:flex-nowrap">
          <input className="field" type="email" placeholder={content.email} {...register("email", { required: `${content.email}: ${content.required}`, pattern: emailPattern })} />
          <input className="field" type="text" placeholder={content.name} {...register("name", { required: `${content.name}: ${content.required}` })} />
        </div>
        <input className="field" type="text" placeholder={content.subject} {...register("subject", { required: `${content.subject}: ${content.required}` })} />
        <textarea className="field resize-none h-28" placeholder={content.message} {...register("message", { required: `${content.message}: ${content.required}` })} />
        <div className="ml-auto w-full md:w-1/2 md:pl-6">
          <button type="submit" className="bg-pine-tree text-white p-2 rounded-lg w-full" disabled={loading}>{content.sendButton}</button>
        </div>
      </div>
    </form>
  )
}
