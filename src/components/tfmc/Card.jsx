import { AiOutlineCheck, AiOutlineClose } from 'react-icons/ai'

const Card = () => {
  return (
    <div className="flex flex-col gap-5 p-5 overflow-hidden rounded-md shadow-md bg-neutral-50 ">
      <div className="h-44 -mx-5 -mt-5 bg-blue-500"></div>
      <div>
        <span className="block font-semibold text-2xl text-neutral-700">Card Title</span>
        <span className="block text-lg text-neutral-400">Card subtitle</span>
      </div>
      <div>
        <p className="text-neutral-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed sint impedit autem. Nulla neque inventore fugit possimus earum saepe quis. Accusamus, dignissimos vero beatae architecto enim fugit molestias optio dolor.</p>
      </div>
      <div className="flex flex-row-reverse gap-5">
        <button className="flex p-2 items-center gap-1 rounded-md bg-blue-500 text-white"><AiOutlineCheck/> Confirm</button>
        <button className="flex p-2 items-center gap-1 rounded-md text-white bg-slate-400"><AiOutlineClose/> Close</button>
      </div>
    </div>
  )
}

export default Card