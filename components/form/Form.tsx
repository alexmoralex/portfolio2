

export default function Form() {
  return(
    <form>
      <div className="flex flex-wrap gap-6">
        <div className="flex gap-6 w-full flex-wrap md:flex-nowrap">
          <input className="field" type="text" placeholder="Email" name="email" />
          <input className="field" type="text" placeholder="Name" name="name" />
        </div>
        <input className="field" type="text" placeholder="Subject" name="subject" />
        <textarea className="field resize-none h-28" placeholder="Message" name="message" />
        <div className="ml-auto w-full md:w-1/2 md:pl-6">
          <button type="submit" className="bg-pine-tree text-white p-2 rounded-lg w-full">SEND</button>
        </div>
      </div>
    </form>
  )
}
