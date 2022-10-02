import { useState } from 'react'
import { AiOutlineUp, AiOutlineDown } from 'react-icons/ai'
import { AiOutlineCheck, AiOutlineClose } from 'react-icons/ai'

import Tr from './Tr'
import Tc from './Tc'

const Table = () => {
  const [expandedIndex, setExpandedIndex] = useState(null)
  const toggle = (newExpandedIndex) => {
    if (expandedIndex === newExpandedIndex) setExpandedIndex(null)
    else setExpandedIndex(newExpandedIndex) 
  }
  return (
    <table className="w-full text-neutral-700">
      <thead>
        <tr className="bg-neutral-100 border-b-4 border-neutral-200">
          <th className="p-5"></th>
          <th className="p-5">Column 1</th>
          <th className="p-5">Column 2</th>
          <th className="p-5">Column 3</th>
          <th className="p-5">Column 4</th>
          <th className="p-5">Column 5</th>
        </tr>
      </thead>
      <tbody className="bg-neutral-50">
      <Tr className = "border-b" isExpanded = {expandedIndex === 2}>
          <td className="p-5"> 
            <button onClick = {() => {
              toggle(2)
            }}>
              {expandedIndex === 2? <AiOutlineDown/> : <AiOutlineUp/>}
            </button>
          </td>
          <td className="p-5">Row 3 Column 1</td>
          <td className="p-5">Row 3 Column 2</td>
          <td className="p-5">Row 3 Column 3</td>
          <td className="p-5">Row 3 Column 4</td>
          <td className="p-5">Row 3 Column 5</td>
          <Tc>
            <span className="block font-semibold text-2xl">Title</span>
            <span className="block font-semibold text-lg text-neutral-400">Title</span>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore dolore, ratione modi numquam hic magni dicta illo tempora ducimus fugiat, deserunt asperiores nostrum sequi explicabo ad dignissimos autem perspiciatis molestias.</p>
            <div className="flex flex-row-reverse gap-5 pt-5 mt-5 border-t">
              <button className="flex p-2 items-center gap-1 rounded-md bg-blue-500 text-white"><AiOutlineCheck/> Confirm</button>
              <button className="flex p-2 items-center gap-1 rounded-md text-white bg-slate-400"><AiOutlineClose/> Close</button>
            </div>
          </Tc>
        </Tr>
        <Tr className = "border-b" isExpanded = {expandedIndex === 3}>
          <td className="p-5"> 
            <button onClick = {() => {
              toggle(3)
            }}>
              {expandedIndex === 3? <AiOutlineDown/> : <AiOutlineUp/>}
            </button>
          </td>
          <td className="p-5">Row 3 Column 1</td>
          <td className="p-5">Row 3 Column 2</td>
          <td className="p-5">Row 3 Column 3</td>
          <td className="p-5">Row 3 Column 4</td>
          <td className="p-5">Row 3 Column 5</td>
          <Tc>
            <span className="block font-semibold text-2xl">Title</span>
            <span className="block font-semibold text-lg text-neutral-400">Title</span>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore dolore, ratione modi numquam hic magni dicta illo tempora ducimus fugiat, deserunt asperiores nostrum sequi explicabo ad dignissimos autem perspiciatis molestias.</p>
            <div className="flex flex-row-reverse gap-5 pt-5 mt-5 border-t">
              <button className="flex p-2 items-center gap-1 rounded-md bg-blue-500 text-white"><AiOutlineCheck/> Confirm</button>
              <button className="flex p-2 items-center gap-1 rounded-md text-white bg-slate-400"><AiOutlineClose/> Close</button>
            </div>
          </Tc>
        </Tr>
        <Tr className = "border-b" isExpanded = {expandedIndex === 4}>
          <td className="p-5"> 
            <button onClick = {() => {
              toggle(4)
            }}>
              {expandedIndex === 4? <AiOutlineDown/> : <AiOutlineUp/>}
            </button>
          </td>
          <td className="p-5">Row 3 Column 1</td>
          <td className="p-5">Row 3 Column 2</td>
          <td className="p-5">Row 3 Column 3</td>
          <td className="p-5">Row 3 Column 4</td>
          <td className="p-5">Row 3 Column 5</td>
          <Tc>
            <span className="block font-semibold text-2xl">Title</span>
            <span className="block font-semibold text-lg text-neutral-400">Title</span>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore dolore, ratione modi numquam hic magni dicta illo tempora ducimus fugiat, deserunt asperiores nostrum sequi explicabo ad dignissimos autem perspiciatis molestias.</p>
            <div className="flex flex-row-reverse gap-5 pt-5 mt-5 border-t">
              <button className="flex p-2 items-center gap-1 rounded-md bg-blue-500 text-white"><AiOutlineCheck/> Confirm</button>
              <button className="flex p-2 items-center gap-1 rounded-md text-white bg-slate-400"><AiOutlineClose/> Close</button>
            </div>
          </Tc>
        </Tr>
      </tbody>
    </table>
  )
}
export default Table